<template>
  <div>
    <v-row>
      <v-col
        cols="10"
        class="pb-0 pr-0"
      >
        <v-text-field
          v-model="searchWords"
          placeholder="キーワード検索"
        />
      </v-col>
      <v-col
        cols="2"
        class="pb-0 pl-0"
        align-self="center"
      >
        <v-btn
          text
          @click="search"
        >
          <v-icon>mdi-magnify</v-icon>
        </v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="pt-0"
      >
        <v-radio-group v-model="targetOfSearch" class="mt-0">
          <v-radio
            label="失敗談を検索"
            value="failure"
          />
          <v-radio
            label="名言を検索"
            value="saying"
          />
        </v-radio-group>
      </v-col>
    </v-row>
    <v-row
      no-gutters
    >
      <v-col
        justify="center"
        align="center"
      >
        <v-progress-circular
          v-if="isSearching"
          indeterminate
          color="primary"
        ></v-progress-circular>
      </v-col>
    </v-row>
    <v-dialog
      v-model="occurError"
    >
      エラーが発生しました。通信環境をご確認ください。
    </v-dialog>
    <v-dialog
      v-model="occurNotHit"
      max-width="300"
    >
      <v-card>
        <v-card-title>
          ヒットなし
        </v-card-title>
        <v-card-text>
          {{
            randomMessageOfNotHit()
          }}
        </v-card-text>
      </v-card>
    </v-dialog>
    <FailureList
      v-if="searchFailuresResults.length !== 0 && targetOfSearch === 'failure'"
      :failures="searchFailuresResults"
    />
    <SayingList
      v-if="searchSayingsResults.length !== 0 && targetOfSearch === 'saying'"
      :sayings="searchSayingsResults"
    />
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import FailureList from '@/components/failure/FailureList'
import SayingList from '@/components/saying/SayingList'
import { searchFailures, searchSayings } from '~/graphql/queries'
export default {
  components: {
    FailureList,
    SayingList
  },
  data () {
    return {
      targetOfSearch: 'failure',
      searchWords: '',
      searchFailuresResults: [],
      searchSayingsResults: [],
      isSearching: false,
      occurError: false,
      occurNotHit: false
    }
  },
  methods: {
    async search () {
      this.isSearching = true
      if (this.targetOfSearch === 'failure') {
        const results = await this.searchFailures()
        this.isSearching = false
        // error
        if (results === false) {
          this.occurError = true
          return
        }
        // ヒットなし
        if (results.length === 0) {
          this.occurNotHit = true
          return
        }
        this.searchFailuresResults = results
      } else if (this.targetOfSearch === 'saying') {
        const results = await this.searchSayings()
        this.isSearching = false
        // error
        if (results === false) {
          this.occurError = true
          return
        }
        // ヒットなし
        if (results.length === 0) {
          this.occurNotHit = true
          return
        }
        this.searchSayingsResults = results
      }
    },
    async searchFailures () {
      const { searchWords } = this
      if (!searchWords) { return }
      const result = await API.graphql({
        query: searchFailures,
        variables: {
          filter: {
            or: [
              { title: { match: searchWords } },
              { content: { match: searchWords } }
            ]
          }
        }
      }).then((results) => {
        return results.data.searchFailures.items
      }).catch((e) => {
        console.log(e)
        return false
      })
      return result
    },
    async searchSayings () {
      const { searchWords } = this
      if (!searchWords) { return }
      const result = await API.graphql({
        query: searchSayings,
        variables: {
          filter: { content: { match: searchWords } }
        }
      }).then((results) => {
        return results.data.searchSayings.items
      }).catch((e) => {
        console.log(e)
        return false
      })
      return result
    },
    randomMessageOfNotHit () {
      const array = [
        'つまりあなたがパイオニア',
        '君がみんなより挑戦してる証拠さ',
        '君は検索結果の枠に収まる人じゃないだろ',
        '君の中に答えがあるってことさ'
      ]
      return array[Math.floor(Math.random() * array.length)]
    }
  }
}
</script>

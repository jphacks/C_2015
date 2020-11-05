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
    <Failurelist
      v-if="searchResults.length !== 0 && targetOfSearch === 'failure'"
      :failures="searchResults"
    />
    <v-row
      v-if="searchResults.length !== 0 && targetOfSearch === 'failure'"
    >
      <v-col
        v-for="saying in searchResults"
        :key="saying.id"
      >
        <v-card>
          {{ saying.id }}
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
import { API, graphqlOperation } from 'aws-amplify'
import Failurelist from '@/components/failure/FailureList'
import { searchFailures } from '~/graphql/queries'
export default {
  components: {
    Failurelist
  },
  data () {
    return {
      targetOfSearch: 'failure',
      searchWords: '',
      searchResults: []
    }
  },
  methods: {
    async search () {
      // くるくるを回す
      if (this.targetOfSearch === 'failure') {
        console.log('failure')
        await this.searchFailures()
      }
    },
    async searchFailures () {
      const { searchWords } = this
      if (!searchWords) { return }
      try {
        const results = (await API.graphql(
          graphqlOperation(searchFailures, {
            filter: { content: { match: 'hoge' } }
          })
        )).data.searchFailures.items
        this.searchResults = results
      } catch (e) {
        console.error(e)
      }
    }
  }
}
</script>

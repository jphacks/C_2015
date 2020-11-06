<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
        <v-card>
          <v-row>
            <v-col col="12">

            </v-col>
          </v-row>
          <v-card-title class="headline justify-center text-center">
            <h2>失敗談投稿フォーム</h2>
          </v-card-title>
          <v-card-text class="text-center">
            あなたの失敗談を投稿しましょう！<br>
            この話を元に、誰かが名言を送ってくれます。<br>
            あなたの失敗談も、誰かの力になるかもしれません。
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card>
          <v-text-field v-model="title" label="Title" />
          <v-textarea v-model="content" label="Content" />
        </v-card>
        <v-btn @click="createFailure">
          失敗談を投稿する
        </v-btn>
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API } from 'aws-amplify'
import { createFailure } from '~/graphql/mutations'

export default {
  components: {
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async createFailure () {
      const { title, content } = this
      if (!title || !content) { return false }
      const failure = {
        title,
        content
      }
      await API.graphql({
        query: createFailure,
        variables: { input: failure }
      })
      this.title = ''
      this.content = ''
    }
  },
  head () {
    return {
      title: '失敗談...'
    }
  }
}
</script>

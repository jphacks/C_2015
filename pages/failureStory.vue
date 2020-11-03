<template>
  <amplify-authenticator>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="text-center">
        <logo />
        <vuetify-logo />
      </div>
      <v-card>
        <v-card-title class="headline">
          失敗談投稿フォーム
        </v-card-title>
        <v-card-text>
          hogehoge
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
  <v-row>
    <v-col>
      <v-card>
        <v-text-field v-model="title" label="Title"></v-text-field>
        <v-text-field v-model="content" label="Content"></v-text-field>
      </v-card>
      <v-btn @click="createFailure">失敗談を投稿する</v-btn>
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

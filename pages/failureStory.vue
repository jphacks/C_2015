<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <head-card></head-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="post-form text-center">
        <v-text-field class="post-form-title" v-model="title" label="タイトル" />
        <v-textarea class="post-form-text" v-model="content" label="本文" />
        <v-btn class="post-form-btn" @click="createFailure">
          失敗談を投稿する
        </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API } from 'aws-amplify'
import { createFailure } from '~/graphql/mutations'
import HeadCard from '~/components/failureStory/HeadCard.vue'

export default {
  components: {
    HeadCard
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

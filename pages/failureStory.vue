<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="10" md="10">
        <head-card></head-card>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="12" sm="10" md="10">
        <v-card class="post-form text-center">
        <v-text-field class="post-form-title"  v-model="title" label="タイトル" />
        <v-textarea class="post-form-text"  v-model="content" label="本文" />
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

<style scoped>
.post-form .v-input__slot::before{
  border: none;
}
.post-form{
  padding: 1rem 1rem 0;
  background-color: #f4dca5;
}
.post-form-title{
background-color: #fff;
padding: 1rem 1rem 0;
}
.post-form-text{
background-color: #fff;
padding: 1rem 1rem 0;
}
.post-form-btn{
  margin: 1rem;
  color: #fff;
  background-color: #5c606a !important;
}
</style>

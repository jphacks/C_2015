<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <head-card></head-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <post-failure></post-failure>
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API } from 'aws-amplify'
import { createFailure } from '~/graphql/mutations'
import HeadCard from '~/components/failureStory/HeadCard.vue'
import PostFailure from '~/components/failureStory/PostFailure.vue'

export default {
  components: {
    HeadCard,
    PostFailure
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

<template>
  <v-card>
    <v-card-title>
      おばさんの失敗に送る<br>
      {{ failure }}
    </v-card-title>
    <v-card-text>
      {{ saying.content }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="showFailure">失敗談を見る</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
import { API } from 'aws-amplify'
import { getFailure } from '~/graphql/queries'

export default {
  props: {
    saying: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      failure: {}
    }
  },
  created () {
    this.getFailureOwner()
  },
  methods: {
    async getFailureOwner () {
      const failureId = this.saying.failureID
      console.log('failureId')
      console.log(failureId)
      const failure = await API.graphql({
        query: getFailure(failureId)
      })
      this.failure = failure
    }
  }
}
</script>

<style scoped>
.v-card{
  background-color: #f4dca5;
  padding: 1rem;
}
.v-card__title,
.v-card__text,
.v-card__actions{
  background-color: #fff;
  margin: .5rem 0;
}
.v-card__text{
  width: auto;
}
</style>

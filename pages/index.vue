<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <failure-card
        name="hoge"
        content="hogehoge"
      />
    </v-col>
    {{ failures }}
  </v-row>
</template>

<script>
import FailureCard from '@/components/failure/FailureCard.vue'
import { API } from 'aws-amplify'
import { listFailures } from '~/graphql/queries'

export default {
  components: {
    FailureCard
  },
  data () {
    return {
      failures: []
    }
  },
  methods: {
    async getFailures () {
      const failures = await API.graphql({
        query: listFailures
      })
      this.failures = failures.data.listFailures.items
    }
  }
}
</script>

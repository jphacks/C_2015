<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="failure in failures"
      :key="failure.id"
      cols="12"
    >
      <FailureCard :failure="failure" />
    </v-col>
  </v-row>
</template>

<script>
import { API } from 'aws-amplify'
import FailureCard from '@/components/failure/FailureCard'
import { listFailures } from '~/graphql/queries'

export default {
  name: 'FailureList',
  components: {
    FailureCard
  },
  data () {
    return {
      failures: []
    }
  },
  created () {
    this.getFailures()
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

<template>
  <v-row justify="center" align="center">
    <v-col
      cols="12"
      v-for="failure in failures"
      :key="failure.id"
    >
      <failure-card
        :failure="failure"
      />
    </v-col>
    <assign-webpush />
  </v-row>
</template>

<script>
import FailureCard from '@/components/failure/FailureCard.vue'
import AssignWebpush from '@/components/webpush/AssignWebpush.vue'
import { API } from 'aws-amplify'
import { listFailures } from '~/graphql/queries'

export default {
  components: {
    FailureCard,
    AssignWebpush
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
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

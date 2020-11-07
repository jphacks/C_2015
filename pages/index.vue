<template>
  <div>
    <FailureList :failures="failures" />
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import FailureList from '@/components/failure/FailureList'
import { listFailures, listSayings } from '~/graphql/custumQueries'

export default {
  components: {
    FailureList
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
    },
    async getSayings () {
      const sayings = await API.graphql({
        query: listSayings
      })
      this.sayings = sayings.data.listSayings.items
    }
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

<template>
  <div>
    <FailureList :failures="failures" />
    <SayingList :sayings="sayings" />
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import FailureList from '@/components/failure/FailureList'
import SayingList from '@/components/saying/SayingList'
import { listFailures, listSayings } from '~/graphql/custumQueries'

export default {
  components: {
    FailureList,
    SayingList
  },
  data () {
    return {
      failures: [],
      sayings: []
    }
  },
  created () {
    this.getFailures()
    this.getSayings()
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

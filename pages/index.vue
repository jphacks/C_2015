<template>
  <div>
    <FailureList :failures="failures"/>
    <SayingList />
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import FailureList from '@/components/failure/FailureList'
import SayingList from '@/components/saying/SayingList'
import { listFailures } from '~/graphql/custumQueries'

export default {
  components: {
    FailureList,
    SayingList
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

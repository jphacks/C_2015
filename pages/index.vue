<template>
  <div>
    <FailureList :failures="failures" />
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import FailureList from '@/components/failure/FailureList'
import { listFailures, listSayings } from '~/graphql/custumQueries'
import { getFailure } from '~/graphql/queries'

export default {
  components: {
    FailureList
  },
  data () {
    return {
      failures: [],
      sayings: []
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
      const realFailures = await Promise.all(failures.data.listFailures.items.map(async (item) => {
        const id = item.id
        const realFailure = await API.graphql({
          query: getFailure,
          variables: { id }
        })
        return realFailure.data.getFailure
      }))
      console.log(realFailures)
      this.failures = realFailures
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

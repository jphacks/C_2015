<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12">
        <v-profile :username=username />
        <v-quotations />
      </v-col>
      <v-col
      cols="12"
      v-for="failure in failures"
      :key="failure.id"
      >
        <v-failure :failure="failure" />
      </v-col>
      <v-col
      cols="12"
      v-for="saying in sayings"
      :key="saying.id"
      >
        <v-saying :saying="saying" />
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API, Auth } from 'aws-amplify'
import { listFailures, listSayings } from '~/graphql/queries'
import VFailure from '~/components/myPage/Failure.vue'
import VProfile from '~/components/myPage/Profile.vue'
import VSaying from '~/components/myPage/Saying.vue'

export default {
  components: {
    VFailure,
    VProfile,
    VSaying
  },
  data () {
    return {
      username: '',
      failures: [],
      sayings: []
    }
  },
  created () {
    this.getFailures()
    this.getSayings()
    this.getUsername()
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
    },
    async getUsername () {
      const user = await Auth.currentUserInfo()
      this.username = user.username
    }
  }
}
</script>

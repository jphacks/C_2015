<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card>
          <v-card-title class="headline">
            username:{{username}}さん
          </v-card-title>
        </v-card>
        <v-col
        cols="12"
        v-for="failure in failures"
        :key="failure.id"
        >
          <v-failure :failure="failure" />
        </v-col>
        <v-profile />
        <v-quotations />
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API, Auth } from 'aws-amplify'
import { listFailures } from '~/graphql/queries'
import VFailure from '~/components/myPage/Failure.vue'
import VProfile from '~/components/myPage/Profile.vue'
import VQuotations from '~/components/myPage/Quotations.vue'

export default {
  components: {
    VFailure,
    VProfile,
    VQuotations
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
    this.getUsername()
  },
  methods: {
    async getFailures () {
      const failures = await API.graphql({
        query: listFailures
      })
      this.failures = failures.data.listFailures.items
    },
    async getUsername () {
      const user = await Auth.currentUserInfo()
      this.username = user.username
    }
  }
}
</script>

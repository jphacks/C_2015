<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="10">
        <v-profile :username=username />
        <v-quotations />
      </v-col>
      <v-col cols="8">
        <div class="bar text-center">
          <v-icon color="white">mdi-feather</v-icon>
          <span>これまでに投稿した失敗談</span>
          <v-icon color="white">mdi-feather</v-icon>
        </div>
      </v-col>
      <failure-list :failures="failures" />
      <v-col cols="8">
        <div class="bar text-center">
          <v-icon color="white">mdi-feather</v-icon>
          <span>これまでに送った名言</span>
          <v-icon color="white">mdi-feather</v-icon>
        </div>
      </v-col>
      <saying-list :sayings="sayings" />
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API, Auth } from 'aws-amplify'
import FailureList from '@/components/myPage/FailureList'
import SayingList from '@/components/myPage/SayingList'
import { listFailures, listSayings } from '~/graphql/custumQueries'
import VProfile from '~/components/myPage/Profile.vue'

export default {
  components: {
    FailureList,
    SayingList,
    VProfile
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
        query: listFailures,
        variables: {
          filter: {
            owner: {
              eq: this.username
            }
          }
        }
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

<style scoped>
.bar{
  color: white;
  background-color:#5c606a;
  padding: 1rem;
  border-radius: 30px;
}
</style>

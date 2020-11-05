<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="saying in sayings"
      :key="saying.id"
      cols="12"
    >
      <v-card>
        <v-card-title>{{ saying.content }}</v-card-title>
      </v-card>
    </v-col>
    {{ sayings }}
  </v-row>
</template>

<script>
import { API } from 'aws-amplify'
import { listSayings } from '~/graphql/queries'

export default {
  name: 'SayingList',
  data () {
    return {
      sayings: []
    }
  },
  created () {
    this.getSayings()
  },
  methods: {
    async getSayings () {
      const sayings = await API.graphql({
        query: listSayings
      })
      this.sayings = sayings.data.listSayings.items
    }
  }
}
</script>

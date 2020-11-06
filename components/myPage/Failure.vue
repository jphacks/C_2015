<template>
  <v-card>
    <v-card-title>{{ failure.title }}</v-card-title>
    <v-card-text>
      {{ failure.content }}
    </v-card-text>
    <v-card-actions>
      <v-card-text>
        名言が<span>{{ propfailure }}</span>コ送られました！
      </v-card-text>
      <v-btn @click="showSaying">名言一覧</v-btn>
      <v-btn @click="createSaying">名言を送る</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: {
    failure: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      propfailure: this.failure
    }
  },
  created () {
    this.countSaying()
  },
  methods: {
    countSaying () {

    }
  }
}
</script>

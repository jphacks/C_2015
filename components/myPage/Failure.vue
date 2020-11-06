<template>
  <v-card>
    <v-card-title>{{ failure.title }}</v-card-title>
    <v-card-text>
      {{ failure.content }}
    </v-card-text>
    <v-card-actions>
      <v-card-text>
        名言が<span>{{ sayingsCount }}</span>コ送られました！
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
      sayingsCount: 0
    }
  },
  created () {
    this.countSaying()
  },
  methods: {
    countSaying () {
      const sayings = this.failure.sayings.items
      let count = 0
      sayings.forEach((e) => {
        count += 1
      })
      this.sayingsCount = count
    }
  }
}
</script>

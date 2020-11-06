<template>
  <v-card>
    <v-card-title class="title">{{ failure.title }}</v-card-title>
    <v-card-text class="content">
      {{ failure.content }}
    </v-card-text>
    <v-card-actions class="actions">
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

<style scoped>
.v-card{
  background-color: #f4dca5;
  padding: 1rem;
}
.v-card__title,
.v-card__text,
.v-card__actions{
  background-color: #fff;
  margin: .5rem 0;
}
.v-card__text{
  width: auto;
}
.title{
  margin-right: 30%;
}
.actions{
  margin-left: 20%;
}
</style>

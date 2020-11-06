<template>
  <v-card>
    <v-row>
      <v-col cols="2">
        <div class="username">
          <span>{{ failure.owner }}</span>
        </div>
      </v-col>
      <v-col cols="10">
        <v-card-title class="title">{{ failure.title }}</v-card-title>
        <v-card-text class="content">
          {{ failure.content }}
        </v-card-text>
        <v-card-actions class="actions">
          <v-card-text>
            名言が<span>{{ sayingsCount }}</span>コ送られました！
          </v-card-text>
          <v-btn @click="showSayings">名言一覧</v-btn>
          <v-btn @click="createSaying">名言を送る</v-btn>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FailureCard',
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
    showSayings () {
      this.$emit('showSayings', this.failure)
    },
    createSaying () {
      this.$emit('showSendSaying', this.failure)
    },
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
}
.username{
  height: 100%;
  position: relative;
}
.username span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  padding: .5rem 20%;
}
</style>

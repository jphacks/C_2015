<template>
  <v-card>
    <v-card-title>{{ failure.title }}</v-card-title>
    <v-card-text>
      {{ failure.content }}
    </v-card-text>
    <v-card-actions>
      <v-btn @click="showSayings">
        名言一覧
      </v-btn>
      <v-btn @click="createSaying">
        名言を送る
      </v-btn>
    </v-card-actions>
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
  methods: {
    showSayings () {
      this.$emit('showSayings', this.failure)
    },
    createSaying () {
      this.$emit('showSendSaying', this.failure)
    }
  }
}
</script>

<template>
  <v-card>
    <v-card-title>
      {{ saying.failure.owner }}さんの失敗に送る...<br>
      {{ saying.content }}
    </v-card-title>
    <v-card-actions>
      <v-btn @click="showFailure">失敗談を見る</v-btn>
    </v-card-actions>
  </v-card>
</template>

<script>

export default {
  props: {
    saying: {
      type: Object,
      required: true
    }
  },
  methods: {
    showFailure () {
      this.$emit('showFailure', this.saying)
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
.v-btn{
  box-shadow: none;
  background-color: #9D1D22 !important;
  color: white;
  border-radius: 0;
}
</style>

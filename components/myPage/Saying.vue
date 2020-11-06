<template>
  <v-card>
    <v-card-title>{{ saying.title }}</v-card-title>
    <v-card-text>
      {{ saying.content }}
    </v-card-text>
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
  }
}
</script>

<template>
  <v-card>
    <v-card-text>
      {{ saying.content }}
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: 'SayingCard',
  props: {
    saying: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  }
}
</script>

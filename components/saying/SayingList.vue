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
  </v-row>
</template>

<script>
export default {
  name: 'SayingList',
  props: {
    sayings: {
      type: Array,
      default: () => ([]),
      required: false
    }
  }
}
</script>

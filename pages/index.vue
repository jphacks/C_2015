<template>
  <v-row justify="center" align="center">
    <v-col cols="12">
      <failure-card
        name="hoge"
        content="hogehoge"
      />
    </v-col>
  </v-row>
</template>

<script>
import FailureCard from '@/components/failure/FailureCard.vue'

export default {
  components: {
    FailureCard
  }
}
</script>

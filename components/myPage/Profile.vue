<template>
  <v-card class="head-card">
      <v-row class="text-center">
        <v-col cols="12">
          <h3 class="text-center"><span>{{ username }}さんのマイページ</span></h3>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style scoped>
.v-card{
  background-color: #9d1d22;
  padding: 1rem;
  border-radius: 20px;
}
h3 span{
  background-color: #f8f0de;
  padding: 1rem 20%;
}
</style>

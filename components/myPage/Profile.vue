<template>
  <v-card class="head-card">
      <v-row class="text-center">
        <v-col cols="12">
          <div>
            <h3>{{ username }}さんのマイページ</h3>
          </div>
        </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  props: ['username']
}
</script>

<style>

</style>

<template>
  <div>
    <v-row>
      <h1>名言投稿フォーム</h1>
    </v-row>
    <v-row>
      <v-col cols="12">
        <h2>{{ }} へ名言を送ろう</h2>
      </v-col>
      <v-col cols="12">
        <div>
          <v-text-field v-model="content" label="Body" />
        </div>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  data () {
    return {
      content: ''
    }
  }
}
</script>

<template>
  <v-card class="post-form text-center">
    <v-text-field class="post-form-title" v-model="title" label="タイトル" />
    <v-textarea class="post-form-text" v-model="content" label="本文" />
    <v-btn class="post-form-btn" @click="createFailure">
      失敗談を投稿する
    </v-btn>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.post-form{
  padding: 1rem;
  background-color: #f4dca5;
}
.post-form-title{
background-color: #fff;
}
.post-form-text{
background-color: #fff;
}
.post-form-btn{
}
</style>

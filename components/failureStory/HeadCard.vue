<template>
  <v-card class="head-card">
    <v-container>
      <v-row class="text-center">
        <v-col cols="1" class="d-flex align-items-center">
          <v-icon color="red darken-4" medium> mdi-feather </v-icon>
        </v-col>
        <v-col cols="8">
          <div>
            <h2><span>失敗談投稿フォーム</span></h2>
          </div>
          <div>
            <p>
              あなたの失敗談を投稿しましょう！<br />
              この話を元に、誰かが名言を送ってくれます。<br />
              あなたの失敗談も、誰かの力になるかもしれません。
            </p>
          </div>
        </v-col>
        <v-col cols="1" class="d-flex align-items-center">
          <v-icon color="red darken-4" medium> mdi-feather </v-icon>
        </v-col>
      </v-row>
    </v-container>
  </v-card>
</template>

<script>
export default {

}
</script>

<style scoped>
.head-card{
  border-radius: 0;
  background-color: #7e0f14;
}
h2{
 width: 100%;
 padding: 1rem;
}
h2 span{
  box-sizing: border-box;
  background-color: #f3ebd7;
  color: #7e0f14;
  padding: 1rem 10%;
}
p{
  margin-top: 1rem;
  color: white;
}
.v-icon::before{
  background-color: white;
  border-radius: 50%;
  padding: .8rem;
}
</style>

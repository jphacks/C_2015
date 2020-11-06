<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <v-card class="head-card">
          <v-container>
             <v-row class="text-center">
              <v-col cols="1" class="d-flex align-items-center">
                <v-icon
                  color="red darken-4"
                  medium>
                  mdi-feather
                </v-icon>
              </v-col>
              <v-col cols="8">
                <div>
                  <h2>失敗談投稿フォーム</h2>
                </div>
                <div>
                  <p>
                    あなたの失敗談を投稿しましょう！<br>
                  この話を元に、誰かが名言を送ってくれます。<br>
                  あなたの失敗談も、誰かの力になるかもしれません。
                  </p>
                </div>
              </v-col>
              <v-col cols="1" class="d-flex align-items-center">
                <v-icon
                  color="red darken-4"
                  medium>
                  mdi-feather
                </v-icon>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card class="post-form text-center">
          <v-text-field class="post-form-title" v-model="title" label="タイトル" />
          <v-textarea class="post-form-text" v-model="content" label="本文" />
          <v-btn class="post-form-btn" @click="createFailure">
            失敗談を投稿する
          </v-btn>
        </v-card>
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import { API } from 'aws-amplify'
import { createFailure } from '~/graphql/mutations'

export default {
  components: {
  },
  data () {
    return {
      title: '',
      content: ''
    }
  },
  methods: {
    async createFailure () {
      const { title, content } = this
      if (!title || !content) { return false }
      const failure = {
        title,
        content
      }
      await API.graphql({
        query: createFailure,
        variables: { input: failure }
      })
      this.title = ''
      this.content = ''
    }
  },
  head () {
    return {
      title: '失敗談...'
    }
  }
}
</script>

<style lang="css" scoped>
.head-card{
  border-radius: 0;
}
.v-icon::before{
  background-color: white;
  border-radius: 50%;
  padding: .8rem;
}
.post-form{
  padding: 1rem;
}
.post-form-title{

}
.post-form-text{

}
.post-form-btn{
}
</style>

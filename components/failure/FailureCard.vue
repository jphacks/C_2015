<template>
  <v-card>
    <v-row>
      <v-col cols="2">
        <div class="username">
          <span>{{ failure.owner }}</span>
          <v-img
        max-width="70px"
        max-height="70px"
        src="books.png"></v-img>
        </div>
      </v-col>
      <v-col cols="10">
        <v-card-title class="title">{{ failure.title }}</v-card-title>
        <v-card-text class="content">
          {{ failure.content }}
        </v-card-text>
        <v-card-actions class="actions">
          <v-card-text>
            名言が<span>{{ sayingsCount }}</span>コ送られました！
          </v-card-text>
          <div>
            <v-btn @click="showSayings">名言一覧</v-btn>
            <v-btn @click="createSaying">名言を送る</v-btn>
          </div>
          <div class="responses">
            <v-btn class="response-btn" @click="toggleMetoo" text>
              <v-icon>
                mdi-heart-outline
              </v-icon>
            </v-btn>
            <v-btn class="response-btn" @click="toggleSorry" text>
              <v-icon>
                mdi-coffee-outline
              </v-icon>
            </v-btn>
            <v-btn class="response-btn" @click="toggleNice" text>
              <v-icon>
                mdi-thumb-up-outline
              </v-icon>
            </v-btn>
          </div>
        </v-card-actions>
      </v-col>
    </v-row>
  </v-card>
</template>

<script>
export default {
  name: 'FailureCard',
  props: {
    failure: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      sayingsCount: 0,
      isMetoo: false,
      isSorry: false,
      isNice: false
    }
  },
  created () {
    this.countSaying()
  },
  methods: {
    showSayings () {
      this.$emit('showSayings', this.failure)
    },
    createSaying () {
      this.$emit('showSendSaying', this.failure)
    },
    countSaying () {
      const sayings = this.failure.sayings.items
      let count = 0
      sayings.forEach((e) => {
        count += 1
      })
      this.sayingsCount = count
    },
    toggleMetoo () {
      //
    },
    toggleSorry () {
      //
    },
    toggleNice () {
      //
    }
  }
}
</script>

<style scoped>
.v-card{
  background-color: #f4dca5;
  padding: 1rem;
}
.v-card__title,
.v-card__text,
.v-card__actions{
  background-color: #fff;
  margin: .5rem 0;
}
.v-card__text{
  width: auto;
}
.title{
  margin-right: 30%;
}
.actions{
  padding: 0 1rem;
  justify-content: space-around;
}
.username{
  height: 100%;
  position: relative;
}
.username span{
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
  background-color: #fff;
  padding: .5rem 20%;
}
.v-btn{
  box-shadow: none;
  background-color: #9D1D22 !important;
  color: white;
  border-radius: 0;
}
.v-btn.response-btn{
  box-shadow: none;
  background-color: #9D1D22 !important;
  color: white;
  border-radius: 0;
}
</style>

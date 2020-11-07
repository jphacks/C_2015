<template>
  <v-card>
    <v-row>
      <v-col cols="2">
        <div class="username row">
          <v-row>
            <v-col cols="12">
              <p>
                {{ failure.owner }}<br>
                さんの失敗談
              </p>
            </v-col>
            <v-col cols="12">
              <v-img
              max-width="70px"
              max-height="70px"
              src="books.png"></v-img>
            </v-col>
          </v-row>
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
import { API, Auth } from 'aws-amplify'
import { createMetoo, createNice, createSorry, deleteMetoo, deleteNice, deleteSorry } from '~/graphql/mutations'
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
      isNice: false,
      username: ''
    }
  },
  created () {
    this.countSaying()
    this.isMetoo = this.failure.metoos.items.some(metoo => metoo.owner === this.username)
    this.isSorry = this.failure.sorrys.items.some(sorry => sorry.owner === this.username)
    this.isMetoo = this.failure.nices.items.some(nice => nice.owner === this.username)
    this.getUsername()
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
    async getUsername () {
      const user = await Auth.currentUserInfo()
      console.log(user)
      this.username = user.username
    },
    toggleMetoo () {
      if (this.isMetoo) {
        this.deleteMetoo()
      } else {
        this.createMetoo()
      }
      this.isMetoo = !this.isMetoo
    },
    toggleSorry () {
      if (this.isSorry) {
        this.deleteSorry()
      } else {
        this.createSorry()
      }
      this.isSorry = !this.isSorry
    },
    toggleNice () {
      if (this.isNice) {
        this.deleteNice()
      } else {
        this.createNice()
      }
      this.isNice = !this.isNice
    },
    async createNice () {
      await API.graphql({
        mutation: createNice,
        variables: {
          input: {
            failureID: this.failure.id
          }
        }
      })
    },
    async createMetoo () {
      await API.graphql({
        mutation: createMetoo,
        variables: {
          input: {
            failureID: this.failure.id
          }
        }
      })
    },
    async createSorry () {
      await API.graphql({
        mutation: createSorry,
        variables: {
          input: {
            failureID: this.failure.id
          }
        }
      })
    },
    async deleteNice () {
      const action = this.failure.nices.items.find(item => item.owner === this.username)
      const id = action.id
      await API.graphql({
        mutation: deleteNice,
        variables: {
          input: { id }
        }
      })
    },
    async deleteMetoo () {
      const action = this.failure.metoos.items.find(item => item.owner === this.username)
      const id = action.id
      await API.graphql({
        mutation: deleteMetoo,
        variables: {
          input: { id }
        }
      })
    },
    async deleteSorry () {
      const action = this.failure.sorrys.items.find(item => item.owner === this.username)
      const id = action.id
      await API.graphql({
        mutation: deleteSorry,
        variables: {
          input: { id }
        }
      })
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
  padding: 1rem;
}
.username p{
  padding: 1rem;
  background-color: #fff;
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

<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="failure in failures"
      :key="failure.id"
      cols="12"
    >
      <FailureCard
        :failure="failure"
        @showSayings="openSayingsDialog"
        @showSendSaying="openSendSayingDialog"
      />
    </v-col>
    <v-dialog
      v-model="showSayingsDialog"
    >
      <v-card class="modal-sayings">
        <div>
           <v-card-title>
            「{{ targetFailure.title }}」に送られた名言
          </v-card-title>
          <v-card-text>
            <span>{{ targetFailure.content }}</span>におくる...
          </v-card-text>
          {{ targetFailure }}
        </div>
      </v-card>
    </v-dialog>
    <v-dialog
      v-model="showSendSayingDialog"
    >
      <v-card  class="modal-send">
        <div>
          <v-card-title>
            「{{ targetFailure.title }}」へ名言を送ろう
          </v-card-title>
          <v-card-text>
            失敗談：{{ targetFailure.content }}
          </v-card-text>
          <v-card-actions>
            <v-text-field
              v-model="createdSaying"
              label="名言"
              :rules="[rulesCreateSaying.required]"
              placeholder="大学生よ単位を抱け"
            >
              本文
            </v-text-field>
          </v-card-actions>
          <v-card-actions>
            <v-btn
              @click="createSaying"
            >
              名言を送る
            </v-btn>
          </v-card-actions>
        </div>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { API } from 'aws-amplify'
import FailureCard from '@/components/failure/FailureCard'
import { createSaying } from '~/graphql/mutations'

export default {
  name: 'FailureList',
  components: {
    FailureCard
  },
  props: {
    failures: {
      type: Array,
      default: () => ([]),
      required: false
    }
  },
  data () {
    return {
      showSayingsDialog: false,
      showSendSayingDialog: false,
      targetFailure: {},
      createdSaying: '',
      rulesCreateSaying: {
        required: value => !!value || '名言を残してね'
      }
    }
  },
  methods: {
    openSayingsDialog (failure) {
      this.targetFailure = failure
      this.showSayingsDialog = true
    },
    openSendSayingDialog (failure) {
      this.targetFailure = failure
      this.showSendSayingDialog = true
    },
    async createSaying () {
      const { createdSaying } = this
      if (!createdSaying) { return }
      const saying = {
        content: createdSaying,
        failureID: this.targetFailure.id
      }
      await API.graphql({
        query: createSaying,
        variables: { input: saying }
      })
      this.createdSaying = ''
      this.showSendSayingDialog = false
    }
  }
}
</script>

<style scoped>
.modal-sayings{
  padding: 1rem;
  background-color: #f4dca5;
}
.modal-sayings div{
  padding: .5rem;
  background-color: #fff;
}
.modal-sayings .v-card__text span{
  color: #9D1D22;
}

.modal-send{
  padding: 1rem;
  background-color: #f4dca5;
}
.modal-send .v-btn{
  box-shadow: none;
  background-color: #9D1D22 !important;
  color: white;
  border-radius: 0;
}
.modal-send div{
  padding: .5rem;
  background-color: #fff;
}
.modal-send .v-card__text span{
  color: #9D1D22;
}
</style>

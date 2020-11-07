<template>
  <v-row justify="center" align="center">
    <v-col
      v-for="saying in sayings"
      :key="saying.id"
      cols="10"
    >
      <saying-card
       :saying="saying"
       @showFailure="openFailureDialog"
      />
    </v-col>
    <v-dialog
      v-model="showFailureDialog"
    >
    <v-card>
      <v-card-title>
        {{ targetFailure.title }}
      </v-card-title>
      <v-card-text>
        {{ targetFailure.content }}
      </v-card-text>
      {{ targetFailure}}
    </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import SayingCard from '@/components/myPage/Saying'

export default {
  name: 'SayingList',
  components: {
    SayingCard
  },
  props: {
    sayings: {
      type: Array,
      default: () => ([]),
      required: false
    }
  },
  data () {
    return {
      showFailureDialog: false,
      targetFailure: {}
    }
  },
  methods: {
    openFailureDialog (saying) {
      this.targetSayingFailure = saying.failure
      this.showFailureDialog = true
    }
  }
}
</script>

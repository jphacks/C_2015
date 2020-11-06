<template>
  <div>
    <v-btn
      v-if="!isPushNotificationsEnabled"
      @click="activateWebpush"
    >
      プッシュ通知を有効化する
    </v-btn>
  </div>
</template>

<script>
import { API } from 'aws-amplify'
import { createOnesingle } from '~/graphql/mutations'
export default {
  name: 'AssingWebpush',
  created () {
    this.checkisAlreadySubscribed()
  },
  data () {
    return {
      isPushNotificationsEnabled: false
    }
  },
  methods: {
    activateWebpush () {
      this.$OneSignal.push(() => {
        this.$OneSignal.on('subscriptionChange', (isSubscribed) => {
          if (isSubscribed) {
            this.$OneSignal.getUserId((userId) => {
              this.createOnesingle(userId)
            })
          }
        })
        // 通知許可を求める。
        this.$OneSignal.showNativePrompt()
      })
    },
    checkisAlreadySubscribed () {
      this.$OneSignal.push(() => {
        this.$OneSignal.isPushNotificationsEnabled((isEnabled) => {
          this.isPushNotificationsEnabled = isEnabled
        })
      })
    },
    async createOnesingle (userId) {
      await API.graphql({
        query: createOnesingle,
        variables: { input: {
          onesingle: userId
        } }
      })
    }
  }
}
</script>

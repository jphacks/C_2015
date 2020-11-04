<template>
  <div>
    <v-btn
      @click="activateWebpush"
    >プッシュ通知を有効化する</v-btn>
  </div>
</template>

<script>
export default {
  name: 'AssingWebpush',
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
    createOnesingle (id) {
      // ここにOnesingleモデルにデータ突っ込む処理。
      console.log(id)
    }
  }
}
</script>

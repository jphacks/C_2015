<template>
  <amplify-authenticator>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="6">
        <div class="text-center">
          <logo />
          <vuetify-logo />
        </div>
        <v-card>
          <v-card-title class="headline">
            マイページ
          </v-card-title>
        </v-card>
        <v-failure></v-failure>
        <v-profile></v-profile>
        <v-quotations></v-quotations>
      </v-col>
    </v-row>
  </amplify-authenticator>
</template>

<script>
import VFailure from '~/components/myPage/Failure.vue'
import VProfile from '~/components/myPage/Profile.vue'
import VQuotations from '~/components/myPage/Quotations.vue'

export default {
  components: {
    VFailure,
    VProfile,
    VQuotations
  }
}
</script>

<template>
  <div>
    <FailureList />
    <SayingList />
  </div>
</template>

<script>
import FailureList from '@/components/failure/FailureList'
import SayingList from '@/components/saying/SayingList'

export default {
  components: {
    FailureList,
    SayingList
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

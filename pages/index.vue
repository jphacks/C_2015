<template>
  <div>
    <FailureList />
  </div>
</template>

<script>
import FailureList from '@/components/failure/FailureList'

export default {
  components: {
    FailureList
  },
  head () {
    return {
      title: 'Home'
    }
  }
}
</script>

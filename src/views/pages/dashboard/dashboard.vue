<template>
  <div id="dashboard">
    <logout-button></logout-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'
import LogoutButton from '../../components/logoutButton.vue'

export default {
  name: "dashboard",
  components: {
    LogoutButton
  },
  data: function data() {
    return {
    }
  }
}
</script>
<style lang="scss" scoped>
</style>

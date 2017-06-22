<template>
  <el-button type="text" @click="logout">注销</el-button>
</template>
<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  name: "Button",
  data: function data() {
    return {
    }
  },
  computed: mapState([
    'token'
  ]),
  methods: {
    logout: function(){
      this.$store.commit(types.LOGOUT)
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
<style lang="scss">
</style>

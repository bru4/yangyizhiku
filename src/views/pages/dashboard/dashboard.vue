<template>
  <div id="dashboard">
    <h1>{{token}}</h1>
    <el-button type="primary" @click="logout">注销</el-button>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  name: "dashboard",
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
<style lang="scss" scoped>
</style>

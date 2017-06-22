<template>
  <div class="">
    <el-button type="text" @click="logout">注销</el-button>
    <el-dialog
      title="提示"
      :visible.sync="logoutDialogVisible"
      size="tiny"
      :before-close="handleClose">
      <span>您确定注销？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutDialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="logoutOk">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import * as types from '@/store/types'

export default {
  name: "Button",
  data: function data() {
    return {
      logoutDialogVisible: false
    }
  },
  computed: mapState([
    'token'
  ]),
  methods: {
    logout: function() {
      this.logoutDialogVisible = true
    },
    logoutOk: function(){
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

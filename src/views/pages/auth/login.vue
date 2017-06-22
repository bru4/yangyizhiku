<style lang="scss" scoped>
body{
  background-color: #DDE0E0;
}
.auth-login {
}

</style>

<template>

<div id="login" class="auth-login">
    <el-form :model="loginForm" :rules="rules" ref="loginForm" label-width="100px" class="form">
        <el-form-item label="账号" prop="name">
            <el-input v-model="loginForm.name" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="pwd">
            <el-input type="password" v-model="loginForm.pwd" auto-complete="off"></el-input>
        </el-form-item>
        <el-form-item>
            <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
            <el-button @click="resetForm('loginForm')">重置</el-button>
        </el-form-item>
    </el-form>
</div>

</template>

<script>

import * as types from '@/store/types'

export default {
    name: "login",
    data: function data() {
        return {
          loginForm: {
            name: '',
            pwd: ''
          },
          rules: {
            name: [
              { required: true, message: '请输入账户', trigger: 'blur'},
              { min: 6, max: 8, message: '长度在6-8个字符', trigger: 'blur' }
            ],
            pwd: [
              { required: true, message: '请输入密码', trigger: 'blur'},
              { min: 6, max: 8, message: '长度在6-8个字符', trigger: 'blur' }
            ]
          }
        }
    },
    methods: {
      submitForm: function(formName) {
        this.$store.commit(types.LOGIN, this.loginForm.name + this.loginForm.pwd)
        let redirect = decodeURIComponent(this.$route.query.redirect || '/');
        this.$router.push({
          path: redirect
        })
      },
      resetForm: function(formName) {
        this.$refs[formName].resetFields();
      }
    }
}

</script>

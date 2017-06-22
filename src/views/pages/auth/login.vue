<style lang="scss">
@import '../../../assets/styles/config.scss';
.auth-login {
    width: 100%;
    height: 100%;
    background-color: $auth-login;
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;
    .form {
        width: 300px;
        .title {
            color: #fff;
            margin-bottom: 40px;
        }
    }
}
</style>

<template>
<div id="login" class="auth-login">
  <el-form :model="loginForm" :rules="rules" ref="loginForm" class="form">
    <el-row type="flex" justify="center">
      <h2 class="title">阳毅智库-登录</h2>
    </el-row>
    <el-form-item prop="name">
      <el-input v-model="loginForm.name" auto-complete="off" placeholder="账号"></el-input>
    </el-form-item>
    <el-form-item prop="pwd">
      <el-input type="password" v-model="loginForm.pwd" auto-complete="off" placeholder="密码"></el-input>
    </el-form-item>
    <el-form-item>
      <el-row type="flex" justify="center">
        <el-button type="primary" @click="submitForm('loginForm')">提交</el-button>
        <el-button @click="resetForm('loginForm')">重置</el-button>
      </el-row>
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
        name: [{
            required: true,
            message: '请输入账户',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 8,
            message: '长度在6-8个字符',
            trigger: 'blur'
          }
        ],
        pwd: [{
            required: true,
            message: '请输入密码',
            trigger: 'blur'
          },
          {
            min: 6,
            max: 8,
            message: '长度在6-8个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  methods: {
    submitForm: function(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          this.$store.commit(types.LOGIN, this.loginForm.name + this.loginForm.pwd)
          let redirect = decodeURIComponent(this.$route.query.redirect || '/');
          this.$router.push({
            path: redirect
          })
        } else {
          console.log('未输入信息!')
        }
      })
    },
    resetForm: function(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>

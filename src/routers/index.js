import Vue from 'vue'
import Router from 'vue-router'
import store from '@/store'
import * as types from '@/store/types'
import Dashboard from '@/views/pages/dashboard/dashboard'
import Login from '@/views/pages/auth/login'

Vue.use(Router)

const routeMap = [
  {
    meta: {
      auth: true
    },
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  }, {
    path: '/login',
    name: 'Login',
    component: Login
  }
]

// 页面刷新时，重新赋值token
if (window.localStorage.getItem('token')) {
  store.commit(types.LOGIN, window.localStorage.getItem('token'))
  console.log(store.state.token)
}

const router = new Router({mode: 'history', routes: routeMap})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state 获取当前的 token 是否存在
      next()
    } else {
      next({
        path: '/login',
        query: {
          redirect: to.fullPath // 将跳转的路由path作为参数，登录成功后跳转到该路由
        }
      })
    }
  } else {
    next()
  }
})

export default router

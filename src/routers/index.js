import Vue from 'vue'
import Router from 'vue-router'
import Dashboard from '@/views/pages/dashboard/dashboard'
import Login from '@/views/pages/auth/login'

Vue.use(Router)

const loginPath = {
  {
    path: '/login',
    name: 'Login',
    component: Login
  }
}

const routeMap = [
  {
    meta: {
      auth: true
    },
    path: '/',
    name: 'Dashboard',
    component: Dashboard
  },
  loginPath
]

const router = new Router({
  mode: 'history',
  routes: routeMap
})

router.beforeEach((to, from, next) => {
  if (to.meta.auth) { // 判断该路由是否需要登录权限
    if (store.state.token) { // 通过vuex state 获取当前的 token 是否存在
      next()
    } else {
      next(loginPath)
    }
  } else {
    next()
  }
})

export default router

import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './store'
import Query from './configs/query'

Vue.config.productionTip = false

new Vue({
  el: '#app',
  Query,
  store,
  router,
  template: '<App/>',
  components: { App }
})

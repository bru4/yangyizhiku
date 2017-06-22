import 'normalize.css/normalize.css'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import 'font-awesome/css/font-awesome.min.css'
import Vue from 'vue'
import App from './App'
import router from './routers'
import store from './store'
import Query from './configs/query'

Vue.config.productionTip = false

Vue.use(ElementUI)

new Vue({
  el: '#app',
  Query,
  store,
  router,
  render: h => h(App)
})

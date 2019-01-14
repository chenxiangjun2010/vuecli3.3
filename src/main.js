import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../store'
import './registerServiceWorker'
import '../util/iview'
import axios from '../util/axios'

Vue.prototype.axios = axios

Vue.config.productionTip = false

// 打印当前所处的环境
console.log(process.env.VUE_APP_CURRENTMODE)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueCookies from 'vue-cookies'
import router from './router'
Vue.use(VueCookies)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

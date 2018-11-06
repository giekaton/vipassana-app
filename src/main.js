import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'

Vue.config.productionTip = false

import VueCookies from 'vue-cookies'
Vue.use(VueCookies)

new Vue({
  render: h => h(App)
}).$mount('#app')

import Vue from 'vue'
import App from './App.vue'
import action from './action/http'
Vue.prototype.$http = action

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

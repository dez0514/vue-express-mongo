import Vue from 'vue'
import App from './App.vue'
import action from './action/http'
import router from './router/index'
import store from './store/index'
import FastClick from 'fastclick'
import './utils/rem.js'
import mediator from './utils/mediator.js'
import isTest from './utils/istest';

FastClick.attach(document.body)

Vue.prototype.$mediator = mediator // 发布者订阅者模式引入
Vue.prototype.$isTest = isTest; // 是否为测试环境
Vue.prototype.$http = action

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')

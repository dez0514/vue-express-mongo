import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../pages/home/index.vue')), 'index')
const about = r => require.ensure([], () => r(require('../pages/about/index.vue')), 'about')
Vue.use(Router)

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      meta: {
        title: '首页'
      },
      component: index
    },
    {
      path: '/about',
      name: 'about',
      meta: {
        title: '关于'
      },
      component: about
    }
  ]
})
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

export default router

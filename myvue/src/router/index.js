import Vue from 'vue'
import Router from 'vue-router'
const index = r => require.ensure([], () => r(require('../pages/home/index.vue')), 'index')
const about = r => require.ensure([], () => r(require('../pages/about/index.vue')), 'about')
const group = r => require.ensure([], () => r(require('../pages/group/index.vue')), 'group')
const tags = r => require.ensure([], () => r(require('../pages/tags/index.vue')), 'tags')
const archive = r => require.ensure([], () => r(require('../pages/archive/index.vue')), 'archive')
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
    },
    {
      path: '/group',
      name: 'group',
      meta: {
        title: '分类'
      },
      component: group
    },
    {
      path: '/tags',
      name: 'tags',
      meta: {
        title: '标签'
      },
      component: tags
    },
    {
      path: '/archive',
      name: 'archive',
      meta: {
        title: '归档'
      },
      component: archive
    }
  ]
})
router.beforeEach(function (to, from, next) {
  document.title = to.meta.title
  next()
})

export default router

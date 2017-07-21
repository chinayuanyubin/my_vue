import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: require('../components/index/index'),
      meta: {
        title: 'ip'
      }
    },
    {
      path: '/index/iplist',
      name: 'iplist',
      component: require('../components/index/iplist'),
      meta: {
        title: 'iplist'
      }
    },
    {
      path: '/manga',
      name: 'manga',
      component: require('../components/manga/manga'),
      meta: {
        title: 'manga'
      }
    },
    {
      path: '/activity',
      name: 'activity',
      component: require('../components/activity/activity'),
      meta: {
        title: 'activity'
      }
    },
    {
      path: '/my',
      name: 'my',
      component: require('../components/my/my'),
      meta: {
        title: 'my'
      }
    }
  ],
  linkActiveClass: 'active'
})

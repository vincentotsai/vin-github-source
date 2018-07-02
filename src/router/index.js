import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import articles from '@/views/articles'
import detail from '@/views/detail'
import about from '@/views/about'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      component: home,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/articles',
      component: articles,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/articles/:id',
      component: detail
    },
    {
      path: '/about',
      component: about,
      meta: {
        keepAlive: true
      }
    },

  ]
})

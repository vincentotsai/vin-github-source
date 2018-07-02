import Vue from 'vue'
import Router from 'vue-router'
import home from '@/views/home'
import articles from '@/views/articles'
import detail from '@/views/detail'
import about from '@/views/about'

import Articles from '../articles/articles.json'

Vue.use(Router)

const ArticleComponents = Articles.map((item, index) => ({
  path: `/articles/${index}`,
  name: item.name,
  meta: {
    id: index,
    all: Articles.length,
    title: item.title,
    subTitle: item.subTitle,
    bac: item.bac
  },
  component: () => import(`../articles/${item.file}`)
}))

let routes = [
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
    component: articles
    // children: [
    //   {
    //     path: '/articles/0',
    //     component: () => import(`../articles/0.vue-markdown-loader.md`)
    //   }
    // ]
    // meta: {
    //   keepAlive: true
    // },
    // children: ArticleComponents
  },
  // {
  //   path: '/articles/0',
  //   component: () => import(`../articles/0.vue-markdown-loader.md`)
  // },
  // {
  //   path: '/articles/1',
  //   component: () => import(`../articles/1.readme.md`)
  // },

  // {
  //   path: '/articles/:id',
  //   component: detail
  // },
  {
    path: '/about',
    component: about,
    meta: {
      keepAlive: true
    }
  }
]
routes = routes.concat(ArticleComponents)

export default new Router({
  routes
})

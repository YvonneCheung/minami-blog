import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    component: () => import('@/views/layout/Home.vue'),
    children: [
      {
        path: '/',
        name: 'home',
        component: () => import('@/views/home/index.vue')
      }, {
        path: '/article',
        name: 'article',
        component: () => import('@/views/article/index.vue')
      }, {
        path: '/timeline',
        name: 'timeline',
        component: () => import('@/views/timeline/index.vue')
      }, {
        path: '/about',
        name: 'about',
        component: () => import('@/views/about/index.vue')
      }, {
        path: '/friendlink',
        name: 'friendlink',
        component: () => import('@/views/friend/index.vue')
      },{
        path: '/article/detail/:id',
        name: 'articleDetail',
        component: () => import('@/views/article/detail.vue')
      }

    ]
  }
]

const router = new VueRouter({
  routes
})

export default router

import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('@/views/layout/AppMain.vue')
  }
]

const router = new VueRouter({
  routes
})

export default router

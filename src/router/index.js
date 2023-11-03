import { createRouter, createWebHistory } from 'vue-router'
import ViewCatering from '../views/ViewCatering.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catering',
      name: 'home',
      component: () => import('../views/common/Home.vue')
    },
    {
      path:'/add',
      name:'addCatering',
      component: () => import('../views/AddCatering.vue')
    },
    {
      path:'/caterings',
      name:'viewAllCaterings',
      component: ViewCatering
    }
  ]
})

export default router

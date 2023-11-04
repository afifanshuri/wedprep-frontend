import { createRouter, createWebHistory } from 'vue-router'
import ViewCatering from '../views/catering/ViewCatering.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: () => import('../views/common/Home.vue')
    },
    {
      path:'/addCatering',
      name:'addCatering',
      component: () => import('../views/catering/AddCatering.vue')
    },
    {
      path:'/viewAll',
      name:'viewAllCaterings',
      component: ViewCatering
    }
  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import ViewCatering from '../views/ViewCatering.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/catering',
      name: 'home',
      component: ViewCatering
    },
    {
      path:'/add',
      name:'add',
      component: ()=>import('../views/AddCatering.vue')
    },
    {
      path:'/caterings',
      name:'viewAllCaterings',
      component: ()=>import('../views/ViewCatering.vue')
    }
  ]
})

export default router

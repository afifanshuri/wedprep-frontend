import { createRouter, createWebHistory } from 'vue-router'
import home from '../views/common/Home.vue'
import cateringrouter from './routes/catering.js'

const routes = [
  {
    path: '/home',
    name:'home',
    component: home
  },
  ...cateringrouter
]


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes
})

export default router
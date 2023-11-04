import { createRouter, createWebHistory } from 'vue-router';
import addCatering from '../../views/catering/AddCatering.vue';
import viewCatering from '../../views/catering/ViewCatering.vue';
import cateringPage from '../../views/catering/MainCatering.vue';

const cateringrouter =  [
    {
      path: '/addCatering',
      name: 'addCateringPage', // Enclose name in quotes as a string
      component: addCatering
    },
    {
      path: '/viewCatering',
      name: 'viewCateringPage', // Enclose name in quotes as a string
      component: viewCatering
    },
    {
      path:'/catering',
      name: 'cateringPage',
      component: cateringPage
    }
  ]

export default cateringrouter;

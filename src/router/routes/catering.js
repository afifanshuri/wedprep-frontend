import { createRouter, createWebHistory } from 'vue-router';
import addCatering from '../../views/catering/AddCatering.vue';
import viewCatering from '../../views/catering/ViewCatering.vue';
import cateringPage from '../../views/catering/MainCatering.vue';
import cateringDetails from '../../views/catering/CateringDetails.vue';

const cateringrouter =  [
    {
      path:'/catering',
      name: 'cateringPage',
      component: cateringPage,
      children: [
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
          path: '/viewSpecificCatering/:cateringName',
          name: 'cateringDetailsPage', // Enclose name in quotes as a string
          component: cateringDetails
        },
      ]
    }
  ]

export default cateringrouter;

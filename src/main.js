import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import tailwindcss from './assets/tailwind.css'

//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import "bootstrap-icons/font/bootstrap-icons.css";

const app = createApp(App)

router.beforeEach((to,from,next) => {
    if (to.path === '/') {
        // Redirect to /catering if the route is the root URL
        next('/catering');
      } else {
        // Proceed to the requested route 
        next();
      }
})

app.use(router)
app.mount('#app')

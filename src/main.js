import { createApp } from 'vue'
import App from './App.vue'
import router from './router'


const app = createApp(App)

router.beforeEach((to,from,next) => {
    if (to.path === '/') {
        // Redirect to /catering if the route is the root URL
        next('/home');
      } else {
        // Proceed to the requested route 
        next();
      }
})

app.use(router)
app.mount('#app')

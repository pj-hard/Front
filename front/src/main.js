import { createApp } from 'vue'
import { createPinia } from 'pinia'
import './assets/style/global.css'
import 'element-plus/dist/index.css'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

// 全局前置路由守卫
router.beforeEach((to, from, next) => {
  if (to.matched.some((auth) => auth.meta.requireAuth)) {
    let token = sessionStorage.getItem('token')
    if (token) {
      next()
    } else {
      next({
        path: '/login'
      })
    }
  } else {
    next()
  }
})

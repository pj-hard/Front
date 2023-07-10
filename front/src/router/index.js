import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: () => import('../views/Layout/index.vue'),
      meta: {
        title: '声振检测系统',
        requireAuth: true
      },
      children: [
        {
          path: '',
          name: 'Home',
          meta: {
            title: 'home',
            requireAuth: true
          },
          component: () => import('../views/Home/index.vue')
        },
        {
          path: '/sound/view',
          name: '声信号',
          meta: {
            title: '展示声信号',
            requireAuth: true
          },
          component: () => import('../views/Home/components/SoundView.vue')
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login/index.vue')
    }
  ]
})

export default router

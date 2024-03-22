import { createRouter, createWebHistory } from 'vue-router'
import HomeWelcome from '../views/HomeWelcome.vue'
import LoginForm from '../views/LoginForm.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeWelcome
    },
    {
      path: '/login',
      name: 'login',
      component: LoginForm
    },

  ]
})

export default router

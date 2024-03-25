import { createRouter, createWebHistory } from 'vue-router'
import HomeWelcome from '../views/HomeWelcome.vue'
import LoginForm from '../views/Users/LoginForm.vue'
import RegisterForm from '../views/Users/RegisterForm.vue'
import HomeInventory from '../views/Inventory/HomeInventory.vue'
import ListInventory from '../views/Inventory/ListInventory.vue'

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
    {
      path: '/register',
      name: 'register',
      component: RegisterForm
    },
    {
      path: '/inventory/home',
      name: 'inventory',
      component: HomeInventory
    },
    {
      path: '/inventory/list',
      name: 'inventory-list',
      component: ListInventory
    }

  ]
})

export default router

import { createRouter, createWebHistory } from 'vue-router'
import NotFound from '@/views/NotFound.vue'
import Home from '@/views/pages/Home.vue'
import LoginPage from '@/views/Account/loginPage.vue'
import SignUpPage from '@/views/Account/signUpPage.vue'
import Price from '@/views/pages/Price.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/:sx(.*)',
      name: 'NotForund',
      component: NotFound
    },
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/price',
      name: 'Price',
      component: Price
    },
    {
      path: '/member',
      name: 'Member',
      component: LoginPage
    },
    {
      path: '/signup',
      name: 'Signup',
      component: SignUpPage
    },
  ],
})

export default router

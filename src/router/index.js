import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
    
  },
  {
    path: '/about',
    name: 'AboutView',
    component: AboutView
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

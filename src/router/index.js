import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import NewsView from '../views/news/NewsView.vue'
import NewsAbout from '../views/news/NewsAbout.vue'

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
  },
  {
    path: '/news',
    name: 'NewsView',
    component: NewsView
  }, 
  {
    path: '/news/:id', 
    name: 'NewsAbout',
    component: NewsAbout,
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

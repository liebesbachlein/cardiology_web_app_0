import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import NewsView from '../views/news/NewsView.vue'
import NewsAbout from '../views/news/NewsAbout.vue'
import SpecialistsView from '../views/specialists/SpecialistsView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
    
  },
  {
    path: '/about/:id',
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
  }, 
  {
    path: '/about',
    redirect: '/about/1'
  }, 
  {
    path: '/specialists/:id',
    name: 'SpecialistsView',
    component: SpecialistsView
  },
  {
    path: '/specialists',
    redirect: '/specialists/1'
  }, 
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

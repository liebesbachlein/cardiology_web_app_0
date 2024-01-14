import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import NewsView from '../views/news/NewsView.vue'
import NewsAbout from '../views/news/NewsAbout.vue'
import SpecialistsView from '../views/specialists/SpecialistsView.vue'
import MembershipRequest from '../views/membership_request/MembershipRequest.vue'
import PatientsView from '../views/patients/PatientsView.vue'
import InfoAbout from '../views/patients/InfoAbout.vue'

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
  {
    path: '/membership-request',
    name: 'MembershipRequest',
    component: MembershipRequest
  }, 
  {
    path: '/patients/:id',
    name: 'PatientsView',
    component: PatientsView
  },
  {
    path: '/patients',
    redirect: '/patients/1'
  }, 

  {
    path: '/patients/1/:id',
    name: 'InfoAbout',
    component: InfoAbout
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

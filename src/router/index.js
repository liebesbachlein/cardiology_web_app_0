import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/home/HomeView.vue'
import AboutView from '../views/about/AboutView.vue'
import NewsView from '../views/news/NewsView.vue'
import NewsAbout from '../views/news/NewsAbout.vue'
import SpecialistsView from '../views/specialists/SpecialistsView.vue'
import MembershipRequest from '../views/specialists/MembershipRequest.vue'
import EducationRequest from '../views/specialists/EducationRequest.vue'
import PatientsView from '../views/patients/PatientsView.vue'

const routes = [
  {
    path: '/',
    name: 'HomeView',
    component: HomeView
    
  },
  {
    path: '/about/:id/',
    name: 'AboutView',
    component: AboutView
  },
  {
    path: '/news/',
    name: 'NewsView',
    component: NewsView
  }, 
  {
    path: '/news/:id/', 
    name: 'NewsAbout',
    component: NewsAbout,
  }, 
  {
    path: '/about/',
    redirect: '/about/1'
  }, 
  {
    path: '/specialists/:id/',
    name: 'SpecialistsView',
    component: SpecialistsView
  },
  {
    path: '/specialists/',
    redirect: '/specialists/1/'
  }, 
  {
    path: '/specialists/membership-request/',
    name: 'MembershipRequest',
    component: MembershipRequest
  }, 
  {
    path: '/specialists/education-request/',
    name: 'EducationRequest',
    component: EducationRequest
  }, 
  {
    path: '/patients/:id/',
    name: 'PatientsView',
    component: PatientsView
  },
  {
    path: '/patients/',
    redirect: '/patients/1'
  }, 

]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes, 
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }
  },
})

export default router

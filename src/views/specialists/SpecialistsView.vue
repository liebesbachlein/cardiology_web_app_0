<template>
    <div class="site-content">
      <div class="site-content-in">
        <div class="specialists">
          <div class="breadcrumbs-box">
                      <div class="breadcrumb-past">
                          <router-link to="/">Главная</router-link>
                      </div>
                      <ChevronRight color="blue"/>
                      <div class="breadcrumb-now">
                        <router-link :to="{name: 'SpecialistsView', params: {id: 1}}" @click="pageNum = 1">Специалистам</router-link>
                      </div>
                      <ChevronRight color="blue"/>
                  </div>
        </div>
  
        <div class="specialists-box">
          <div class="specialists-side">
            <div class="specialists-side-box">
              <router-link :to="{name: 'SpecialistsView', params: {id: 1}}">
                <SideBarHeadingsNoUrl heading="Членство" :isActive="pageNum == 1" @about-nav-click="pageNum = 1"/>
              </router-link>
              <router-link :to="{name: 'SpecialistsView', params: {id: 2}}">
                <SideBarHeadingsNoUrl heading="Ресурсы" :isActive="pageNum == 2" @about-nav-click="pageNum = 2"/>
              </router-link>
              <router-link :to="{name: 'SpecialistsView', params: {id: 3}}">
                <SideBarHeadingsNoUrl heading="Заяка на обучение" :isActive="pageNum == 3" @about-nav-click="pageNum = 3"/>
              </router-link>
            </div>
          </div>
  
          <div class="specialists-content">
  
            
            <div v-if="pageNum == 2">
              <SpecialistsResources/>
            </div>
            <div v-else-if="pageNum == 3">
              <SpecialistsEducation/>
            </div>
            <div v-else>
              <SpecialistsMembership/>
            </div>
  
  
          </div>
          
        </div>
  
  
      </div>
      <Footer/>
    </div>
  </template>
  
  <script>
  
  import SideBarHeadingsNoUrl from '@/components/SideBarHeadingsNoUrl.vue';
  import ChevronRight from '@/components/ChevronRight.vue';
  import SpecialistsMembership from './SpecialistsMembership.vue';
  import SpecialistsEducation from './SpecialistsEducation.vue';
  import SpecialistsResources from './SpecialistsResources.vue';
  import Footer from '@/components/Footer.vue';
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'AboutView',
    components: {Footer, SideBarHeadingsNoUrl, ChevronRight, SpecialistsMembership, SpecialistsEducation, SpecialistsResources},
    setup() {
      const route = useRoute()
    const pageNum = computed(() => route.params.id)

    return { pageNum }
    }
  }
  </script>
  
  <style>

@media only screen and (max-width: 768px) {
  
  .specialists {
      width: 100%;
      padding: 2rem 1rem 0 1rem;

  }
  
  .specialists-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 2.5rem;
  }
  
  .specialists-side {
    width: 0%;
    display: none;
  }
  
  .specialists-side-box {
    display: none;
    width: 0%;
    height: auto;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(170, 170, 170, 0.25);
  border-radius: 0.5rem;
    padding: 1.5rem 1rem 1rem 1.25rem;
  }
  
  .specialists-content {
    width: 100%;
    margin-bottom: 8.5rem;
    padding: 0 1rem;
  }
}

@media only screen and (min-width: 1024px) {
  
  .specialists {
      width: 100%;
      margin-top: 100px;
  }
  
  .specialists-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 4rem;
  }
  
  .specialists-side {
    width: 23%;
  }
  
  .specialists-side-box {
    display: inline-block;
    width: 100%;
    height: auto;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(170, 170, 170, 0.35);
  border-radius: 0.5rem;
    padding: 1.5rem 1rem 1rem 1.25rem;
  }
  
  .specialists-content {
    width: 70%;
    margin-bottom: 8.5rem;
  }
}
  
  </style>
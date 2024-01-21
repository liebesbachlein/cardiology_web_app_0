<template>
    <div class="site-content">
      <div class="site-content-in">
        <div class="patients">
          <div class="breadcrumbs-box">
                      <div class="breadcrumb-past">
                          <router-link to="/">Главная</router-link>
                      </div>
                      <ChevronRight color="blue"/>
                      <div class="breadcrumb-now">
                        <router-link :to="{name: 'PatientsView', params: {id: 1}}" @click="pageNum = 1">Пациентам</router-link>
                      </div>
                      <ChevronRight color="blue"/>
                  </div>
        </div>
  
        <div class="patients-box">
          <div class="patients-side">
            <div class="patients-side-box">
              <router-link :to="{name: 'PatientsView', params: {id: 1}}">
                <SideBarHeadingsNoUrl heading="Полезная информация" :isActive="pageNum == 1" @about-nav-click="pageNum = 1"/>
              </router-link>
              <router-link :to="{name: 'PatientsView', params: {id: 2}}">
                <SideBarHeadingsNoUrl heading="Частные вопросы" :isActive="pageNum == 2" @about-nav-click="pageNum = 2"/>
              </router-link>
              <router-link :to="{name: 'PatientsView', params: {id: 3}}">
                <SideBarHeadingsNoUrl heading="Обратиться к специалисту" :isActive="pageNum == 3" @about-nav-click="pageNum = 3"/>
              </router-link>
            </div>
          </div>
  
          <div class="patients-content">
            
            <div v-if="pageNum == 2 ">
              <PatientsQA/>
            </div>
            <div v-else-if="pageNum == 3">
              <PatientsAsk/>
            </div>
            <div v-else>
              <PatientsInfo/>
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
  import PatientsAsk from './PatientsAsk.vue';
  import PatientsQA from './PatientsQA.vue';
  import PatientsInfo from './PatientsInfo.vue';
  import Footer from '@/components/Footer.vue';
  import { ref, computed } from 'vue';
  import { useRoute } from 'vue-router';
  
  export default {
    name: 'PatientsView',
    components: {Footer, SideBarHeadingsNoUrl, ChevronRight, PatientsQA, PatientsAsk, PatientsInfo},
    setup() {
      const route = useRoute()
    const pageNum = computed(() => route.params.id)

    return { pageNum }
    }
  }
  </script>
  
  <style>

@media only screen and (max-width: 768px) {
  
  .patients {
      width: 100%;
      margin-top: 3rem;
      padding: 0 1rem;
  }
  
  .patients-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 2rem;
  }
  
  .patients-side {
    width: 0%;
    display: none;
  }
  
  .patients-side-box {
    width: 0%;
    display: none;
    height: auto;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(170, 170, 170, 0.25);
  border-radius: 0.5rem;
    padding: 1.5rem 1rem 1rem 1.25rem;
  }
  
  .patients-content {
    width: 100%;
    margin-bottom: 8.5rem;
    padding: 0 1rem;
  }
  
}
  
  
@media only screen and (min-width: 1024px) {
  
  .patients {
      width: 100%;
      margin-top: 100px;
  }
  
  .patients-box {
      display: flex;
      width: 100%;
      justify-content: space-between;
      margin-top: 4rem;
  }
  
  .patients-side {
    width: 23%;
  }
  
  .patients-side-box {
    display: inline-block;
    width: 100%;
    height: auto;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(170, 170, 170, 0.25);
  border-radius: 0.5rem;
    padding: 1.5rem 1rem 1rem 1.25rem;
  }
  
  .patients-content {
    width: 70%;
    margin-bottom: 8.5rem;
  }
  
}
  
  </style>
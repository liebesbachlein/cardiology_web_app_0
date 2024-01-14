<template>
  <div class="site-content">
    <div class="site-content-in">
      <div class="about">
        <div class="breadcrumbs-box">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="blue"/>
                    <div class="breadcrumb-now">
                      <router-link :to="{name: 'AboutView', params: {id: 1}}" @click="pageNum = 1">О нас</router-link>
                    </div>
                    <ChevronRight color="blue"/>
                </div>
      </div>

      <div class="about-box">
        <div class="about-side">
          <div class="about-side-box">
            <router-link :to="{name: 'AboutView', params: {id: 1}}">
              <SideBarHeadingsNoUrl heading="Об обществе" :isActive="pageNum == 1" @about-nav-click="pageNum = 1"/>
            </router-link>
            <router-link :to="{name: 'AboutView', params: {id: 2}}">
              <SideBarHeadingsNoUrl heading="Руководство" :isActive="pageNum == 2" @about-nav-click="pageNum = 2"/>
            </router-link>
            <router-link :to="{name: 'AboutView', params: {id: 3}}">
              <SideBarHeadingsNoUrl heading="Галерея" :isActive="pageNum == 3" @about-nav-click="pageNum = 3"/>
            </router-link>
            <router-link :to="{name: 'AboutView', params: {id: 4}}">
              <SideBarHeadingsNoUrl heading="Контакты" :isActive="pageNum == 4" @about-nav-click="pageNum = 4"/>
            </router-link>
          </div>
        </div>

        <div class="about-content">

          
          <div v-if="pageNum == 2">
            <AboutHead/>
          </div>
          <div v-else-if="pageNum == 3">
            <AboutGallery/>
          </div>
          <div v-else-if="pageNum == 4">
            <AboutContacts/>
          </div>
          <div v-else>
            <AboutSociety/>
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
import AboutContacts from './AboutContacts.vue';
import AboutGallery from './AboutGallery.vue';
import AboutHead from './AboutHead.vue';
import AboutSociety from './AboutSociety.vue';
import Footer from '@/components/Footer.vue';
import { ref, computed } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AboutView',
  components: {Footer, SideBarHeadingsNoUrl, ChevronRight, AboutSociety, AboutHead, AboutGallery, AboutContacts},
  setup() {
    const route = useRoute()
    const pageNum = computed(() => route.params.id)

    return { pageNum }
  }
}
</script>

<style>

.about {
    width: 100%;
    margin-top: 100px;
}

.about-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-top: 4rem;
}

.about-side {
  width: 23%;
}

.about-side-box {
  display: inline-block;
  width: 100%;
  height: auto;
  border: 1px solid var(--component-accent-color2);
  padding: 1.5rem 1rem 1rem 1.25rem;
  border-radius: 1.5rem;
}

.about-content {
  width: 70%;
  margin-bottom: 8.5rem;
}




</style>
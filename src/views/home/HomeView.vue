<template>
  <div class="site-content" style="background-color: #FDFAFF;">
    <Cover/>
    <div class="site-content-in">
      <Stats/>
      <NewsTimeline/>
      <Partners/>
      <Mission/>
    </div>
    <Footer/>
  </div>
</template>

<script>
import Cover from './Cover.vue';
import NewsTimeline from './NewsTimeline.vue';
import Partners from './Partners.vue';
import Mission from './Mission.vue';
import Footer from '@/components/Footer.vue';
import Stats from './Stats.vue';

export default {
  name: 'HomeView',
  components: {Cover, NewsTimeline, Partners, Mission, Footer, Stats},
  setup() {
    
  }
}
</script>

<style>
  .site-content {
    position: absolute;
    width: 100%;
    top: 80px;
    right: 0;
    left: 0;
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .site-content-in {
    width: 84%;
    /*width: 1080px;*/
    margin: 0 auto; 
  }
</style>

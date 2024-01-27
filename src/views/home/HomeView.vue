<template>
  <div class="site-content"> <!--#FDFAFF-->
    <Cover/>
    <div class="site-content-in">
      <Stats/>
    </div>
      <NewsTimeline/>
    <div class="site-content-in">
      <Partners/>
    </div>
    <Mission/>
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



@media only screen and (max-width: 768px) {
  .site-content {
    position: absolute;
    width: 100%;
    top: 4.75rem;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .site-content-in {
    width: 100%;
    padding: 1rem 0; 
  }
}

@media only screen and (min-width: 1024px) {
  .site-content {
    position: absolute;
    width: 100%;
    top: 5rem;
    right: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .site-content-in {
    width: 84%;
    margin: 0 auto; 
  }
}

</style>

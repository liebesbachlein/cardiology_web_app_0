<template>
    <div class="site-content">
        <div class="site-content-in">
            <div class="newsabout">
                <div class="breadcrumbs-box">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                    <div class="breadcrumb-now">
                        <router-link to="/patients/1">Пациентам</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                </div>

                <div class="newsfeed-box">                   
                    <div  class="newsfeed-timeline">

                            <div class="news-content">
                                <div v-if="newsItem">
                                    <div class="newsshort-info-phrase-date">
                                        <div class="newsshort-phrase">
                                            <h4 style="{font-size: 1.0625rem;}">{{ newsItem.phrase }}</h4>
                                        </div>
                                        <div class="newsshort-date">
                                            <h4 style="{font-size: 1.0625rem;}">{{ newsItem.date }}</h4>
                                        </div>
                                    </div>
                                    <div class="news-about-title">
                                        <h1>{{ newsItem.title }}</h1>
                                    </div>
                                    <div class="news-about-summary">
                                        <p>{{ newsItem.summary }}</p>
                                    </div>

                                    <div class="news-about-image">
                                        <img :src="'/info_posters/' + newsItem.imgSrc">
                                    </div> 
                                    
                                    <div class="news-about-content">
                                        <p v-html="newsItem.content"></p>
                                    </div>
                                </div>
                            </div>
                    </div>
                    <div class="page-side">
                        <div class="page-side-box">
                            <router-link to="/specialists/education-request/">
                                <SideBarHeadingsNoUrl  check="true" heading="Записаться на обучение" isActive="false"/>
                            </router-link>
                            <router-link to="/specialists/membership-request/">
                                <SideBarHeadingsNoUrl  check="true" heading="Стать членом Общества" isActive="false"/>
                            </router-link>
                        </div> 
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import ChevronRight from '@/components/ChevronRight.vue';
import SideBarHeadingsNoUrl from '@/components/SideBarHeadingsNoUrl.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { loadInfoId } from '@/firebase/config';

export default {
    name: "NewsAbout",
    components: {ChevronRight,  SideBarHeadingsNoUrl, Footer},
    setup() { 
    const newsItem = ref(null)
    const error = ref(null)    
    const route = useRoute()

    const load = async () => {
      try {
        const id = route.params.id
        newsItem.value = await loadInfoId(id)
        /*
        if(!data.ok) {
          throw Error('no available data')
        } 
        newsItem.value = await data.json()*/
        console.log(newsItem.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }
    
    load()

    return { newsItem, error }
  }
}

</script>

<style>

</style>
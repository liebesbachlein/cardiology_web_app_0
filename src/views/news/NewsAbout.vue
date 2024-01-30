<template>
    <div class="site-content">
        <div class="site-content-in">
            <div class="newsabout multi-page">
                <div class="breadcrumbs-box">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                    <div class="breadcrumb-now">
                        <router-link to="/news">Новости</router-link>
                    </div>
                    <ChevronRight color="grey"/>
                </div>

                <div class="multi-page-box">                   
                    <div class="multi-page-content">
                        <div v-if="error">{{ error }}</div>
                        <div v-else-if="newsItem" class="newsabout-content">
                                
                            <div class="newsabout-info-phrase-date">
                                <div class="newsabout-phrase">
                                    {{ newsItem.phrase }}
                                </div>
                                <div class="newsabout-date">
                                    {{ newsItem.date }}
                                </div>
                            </div>
                            <div class="newsabout-title">
                                    {{ newsItem.title }}
                            </div>
                            <div class="newsabout-summary">
                                <p>{{ newsItem.summary }}</p>
                            </div>

                            <div class="newsabout-image">
                                <img :src="'/news_posters/' + newsItem.imgSrc">
                            </div> 
                            
                            <div class="newsabout-content">
                                <p v-html="newsItem.content"></p>
                            </div>
                        </div>
                        <Loader v-else/>
                    </div>
                    <div class="page-side">
                        <div class="page-side-box">
                            <router-link to="/specialists/education-request/">
                                <SideBarHeadingsNoUrl  check="true" heading="Записаться на обучение"/>
                            </router-link>
                            <router-link to="/specialists/membership-request/">
                                <SideBarHeadingsNoUrl  check="true" heading="Стать членом Общества"/>
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
import { loadNews } from '@/firebase/config';
import { loadNewsId } from '@/firebase/config';
import Loader from '@/components/Loader.vue';
export default {
    name: "InfoAbout",
    components: {ChevronRight,  SideBarHeadingsNoUrl, Footer, Loader},
    setup() { 
    const newsItem = ref(null)
    const error = ref(null)    
    const route = useRoute()

    const load = async () => {
      try {
        const id = route.params.id
        newsItem.value = await loadNewsId(id)
        /*if(!data.ok) {
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

.newsabout {
    min-height: 100vh; 
}

.newsabout-title {
    display: block;
    margin-top: 1rem;
    font-size: 2rem;
    font-family: var(--news-title-font);
    font-weight: 400;
}

.newsabout-summary {
    display: block;
    margin-top: 2rem;
    font-family: var(--cursive-font);
    font-style: italic;
}

.newsabout-image {
    width: 93%;
    display: inline-block;
    margin: 2rem 0 3rem 0;
}

.newsabout-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
}

.newsabout-info-phrase-date {
    display: flex;
    justify-content: space-between;
    
}

.newsabout-info-phrase-date>div {
    color: #98abcf;
    font-size: 1.125rem;
    font-weight: 300;
}

.newsabout-phrase {
    text-transform: uppercase;
}

@media only screen and (max-width: 768px) {

.newsabout {
    display: block;
    width: 100%;
    margin-top: 3rem;
    padding: 0 1rem;
    min-height: calc(100vh - 5rem);
}

.newsabout-image {
    margin: 1rem 0;
    padding: 0;
    width: 100%;
    height: calc(( 100vw - 2rem) * 9 / 16 );
    display: inline-block; 
}

.newsabout-image img {
    display: block;
    max-width: 100%;
    height: auto;
}

.newsabout-info-phrase-date>div {
    font-size: 1rem;
    font-weight: 300;
    margin: 0;
}

.newsabout-summary {
    margin-top: 3rem;
}


}

</style>
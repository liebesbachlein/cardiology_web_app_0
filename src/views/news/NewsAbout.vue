<template>
    <div class="site-content">
        <div class="site-content-in">
            <div class="newsabout">
                <div class="breadcrumbs-box">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="blue"/>
                    <div class="breadcrumb-now">
                        <router-link to="/news">Новости</router-link>
                    </div>
                    <ChevronRight color="blue"/>
                </div>

                <div class="newsfeed-box">                   
                    <div  class="newsfeed-timeline">
                            <div v-if="error">{{ error }}</div>
                            <div v-else-if="newsItem" class="newsabout-content">
                                
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
                                        <img :src="'/news_posters/' + newsItem.imgSrc">
                                    </div> 
                                    
                                    <div class="news-about-content">
                                        <p v-html="newsItem.content"></p>
                                    </div>
                            </div>
                            <Loader v-else/>
                    </div>
                    <div class="newsfeed-side">
                        <div class="newsfeed-side-box">
                            <SideBarHeadings heading="Подписаться на рассылку" url="/about"/>
                            <SideBarHeadings heading="Стать членом Общества" url="/about"/>
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
import SideBarHeadings from '@/components/SideBarHeadings.vue';
import Footer from '@/components/Footer.vue';
import { ref, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { loadNews } from '@/firebase/config';
import { loadNewsId } from '@/firebase/config';
import Loader from '@/components/Loader.vue';
export default {
    name: "InfoAbout",
    components: {ChevronRight,  SideBarHeadings, Footer, Loader},
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
@media only screen and (max-width: 768px) {

.newsabout {
    display: block;
    width: 100%;
    margin-top: 3rem;
    padding: 0 1rem;
    min-height: calc(100vh - 5rem);
}

.newsfeed-side {
    width: 0%;
    display: none;
}

.breadcrumb-past a {
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}

.breadcrumb-past a.router-link-active {
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}


.breadcrumb-now a {
    font-weight: 600;
    color: var(--text-accent-color1);
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    text-decoration: none;
}

.breadcrumb-now a.router-link-active {
    font-weight: 600;
    color: var(--text-accent-color1);
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    text-decoration: none;
}

.news-about-title {
    display: block;
    padding-top: 0;
}

.news-about-title h1 {
    font-size: 2rem;
    font-family: var(--news-title-font);
    font-weight: 400;
}

.news-about-summary {
    display: block;
    margin: 1rem 0 2rem 0;
}

.news-about-summary p {
    font-family: var(--cursive-font);
    font-style: italic;
}

.newsabout .news-about-image {
    margin: 1rem 0;
    padding: 0;
    width: 100%;
    height: calc(( 100vw - 2rem) * 9 / 16 );
    display: inline-block; 
}

.news-about-image img {
    display: block;
    max-width: 100%;
    height: auto;
}

.newsabout .newsshort-info-phrase-date {
    padding-top: 0rem;
}

.newsabout-content {
    margin-bottom: 7rem;
}
}

@media only screen and (min-width: 1024px) {
.newsabout {
    width: 100%;
    margin-top: 100px;
}

.breadcrumb-past a {
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}

.breadcrumb-past a.router-link-active {
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}


.breadcrumb-now a {
    font-weight: 600;
    color: var(--text-accent-color1);
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    text-decoration: none;
}

.breadcrumb-now a.router-link-active {
    font-weight: 600;
    color: var(--text-accent-color1);
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    text-decoration: none;
}

.news-about-title {
    display: block;
    margin-top: 2rem;
}

.news-about-title h1 {
    font-size: 2rem;
    font-family: var(--news-title-font);
    font-weight: 400;
}

.news-about-summary {
    display: block;
    margin-top: 3rem;
}

.news-about-summary p {
    font-family: var(--cursive-font);
    font-style: italic;
}

.news-about-image {
    width: 93%;
    display: inline-block;
    margin: 3rem 0;
}

.news-about-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
}

.newsabout .newsshort-info-phrase-date {
    margin-top: 2.5rem;
}

.news-about-content {
    margin-bottom: 7rem;
}
}

</style>
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
                        <router-link to="/patients/1">Пациентам</router-link>
                    </div>
                    <ChevronRight color="blue"/>
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
                                        <img :src="'info_posters/' + newsItem.imgSrc">
                                    </div> 
                                    
                                    <div class="news-about-content">
                                        <p v-html="newsItem.content"></p>
                                    </div>
                                </div>
                            </div>
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

export default {
    name: "NewsAbout",
    components: {ChevronRight,  SideBarHeadings, Footer},
    setup() { 
    const newsItem = ref(null)
    const error = ref(null)    
    const route = useRoute()

    const load = async () => {
      try {
        const id = route.params.id
        let data = await fetch('http://localhost:3000/info-posts/' + id)
        if(!data.ok) {
          throw Error('no available data')
        } 
        newsItem.value = await data.json()
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

</style>
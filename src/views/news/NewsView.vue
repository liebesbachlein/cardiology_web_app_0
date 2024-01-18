<template>
    <div class="site-content">
        <div class="site-content-in">
            <div class="newsfeed">
                <div class="breadcrumbs-box">
                    <div class="breadcrumb-past">
                        <router-link to="/">Главная</router-link>
                    </div>
                    <ChevronRight color="blue"/>
                    <div class="breadcrumb-now">
                        <router-link to="/news/">Новости</router-link>
                    </div>
                </div>

                <div class="newsfeed-box">
                    <div  class="newsfeed-timeline">
                        <div v-if="error">{{ error }}</div>
                        <div v-else-if="newsFeed.length > 1">
                            <div v-for="newsItem in displayNewsList" :key="newsItem.id">
                                <div v-if="newsItem.id">
                                <router-link :to="{name: 'NewsAbout', params: {id: newsItem.id}}">
                                    <NewsShort :newsItem="newsItem"/>
                                </router-link>
                                </div>
                            </div>
                        </div>
                        <div v-else><Loader/></div>
                    </div>
                    <div class="newsfeed-side">
                        <div class="newsfeed-side-box">
                            <SideBarHeadings heading="Записаться на обучение" url="/specialists/education"/>
                            <SideBarHeadings heading="Стать членом Общества" url="/membership-request"/>
                        </div> 
                    </div>
                    
                </div>
            </div>
            <div class="blue-button-box" style="margin-bottom: 6rem">
                <div v-if="isLoadMore" class="blue-button" @click="loadMore">
                    <h4>Загрузить еще</h4>
                </div>
            </div>
        </div>
        <Footer/>
    </div>
</template>

<script>
import ChevronRight from '@/components/ChevronRight.vue';
import NewsShort from './NewsShort.vue';
import SideBarHeadings from '@/components/SideBarHeadings.vue';
import Footer from '@/components/Footer.vue';
import Loader from '@/components/Loader.vue';
import NewsAbout from './NewsAbout.vue';
import { ref, computed } from 'vue';
import { loadNews  } from '@/firebase/config';

export default {
    name: "NewsView",
    components: {NewsAbout, ChevronRight, NewsShort, SideBarHeadings, Footer, Loader},
    setup() { 
    const newsLimit = 8
    let loadIndex = 1
    const newsFeed = ref([''])
    const error = ref('')
    const isLoadMore = ref(false)
    const displayNewsList = ref([''])
    
    const load = async () => {
      try {
        newsFeed.value = await loadNews() // let data
        //if(!data.ok) {
          //throw Error('no available data')
        //} 
        //newsFeed.value = await data.json()
        console.log(newsFeed.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    const displayNews = () => {
            if(newsFeed.value) {
                if(newsFeed.value.length) {
                    if(newsFeed.value.length > loadIndex * newsLimit) {
                        displayNewsList.value = newsFeed.value.slice(0, loadIndex * newsLimit)
                        isLoadMore.value = true
                    } else {
                        displayNewsList.value = newsFeed.value
                        isLoadMore.value = false
                    }
                } else {
                    displayNewsList.value = []
                    isLoadMore.value = false
                }
            } else {
                displayNewsList.value = []
                isLoadMore.value = false
            }
        }

    const loadMore = () => {
            if(newsFeed.value.length) {
                if(loadIndex < (newsFeed.value.length / newsLimit)) {
                    loadIndex = loadIndex + 1
                    displayNews()
                } 
            } else
            isLoadMore.value = false
    }

    load().then(() => { displayNews() })

    
    return { newsFeed, error, displayNewsList, loadMore, isLoadMore }
  },
}

</script>

<style>
.newsfeed {
    width: 100%;
    margin-top: 100px;
}

.breadcrumbs-box {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1rem 0;
}

.breadcrumb-past {
    display: inline-block;
    padding-right: 2rem;
}

.breadcrumb-now {
    display: inline-block;
    padding-left: 2rem;
    padding-right: 2rem;
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


.newsfeed-box {
    display: flex;
    width: 100%;
    justify-content: space-between;
}

.newsfeed-timeline {
    width: 70%;
    display: flex;
    flex-direction: column;
}

.newsfeed-timeline a {
    text-decoration: none;
}

.newsfeed-timeline a.router-link-active {
    text-decoration: none;
}

.newsfeed-side {
    width: 22%;
    margin: 3rem 0;
}

.newsfeed-side-box {
    display: inline-block;
    width: 100%;
    height: auto;
    background-color: #FFF;
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
  border-radius: 0.5rem;
    padding: 3rem 1rem 0.5rem 1.25rem;
}

.blue-button-box {
    display: block;
    margin-bottom: 6rem;
    height: 3.76rem;
    width: 100%;
}

.blue-button {
    cursor: pointer;
    margin: 0 auto;
    display: flex;
    height: 3.76rem;
    width: 17rem;
    border-radius: 1.88rem;
    background-color: var(--component-accent-color2);
    align-items: center;
    justify-content: center;
}

.blue-button h4 {
    color: #FFF;
    font-weight: 400;
}

.blue-button h3 {
    color: #FFF;
    font-weight: 400;
}

</style>
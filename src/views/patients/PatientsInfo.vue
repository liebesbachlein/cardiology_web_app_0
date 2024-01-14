<template>
    <div class="infoFeed">
        <div  class="infoFeed-timeline">
            <div v-if="error">{{ error }}</div>
            <div v-if="infoFeed.length">
                <div v-for="newsItem in displayInfoList" :key="newsItem.id">
                    <div v-if="newsItem.id">
                    <router-link :to="{name: 'InfoAbout', params: {id: newsItem.id}}">
                        <NewsShort :newsItem="newsItem"/>
                    </router-link>
                    </div>
                </div>
            </div>
            <div v-else><h3>Loading ... </h3></div>
        </div>

        <div class="blue-button-box">
            <div v-if="isLoadMore" class="blue-button" @click="loadMore">
                <h4>Загрузить еще</h4>
            </div>
        </div>
    </div>
</template>

<script>
import NewsShort from '@/views/news/NewsShort.vue';
import NewsAbout from '@/views/news/NewsAbout.vue';
import { ref} from 'vue';

export default {
    components: {NewsAbout, NewsShort},
    setup() { 
    const newsLimit = 8
    let loadIndex = 1
    const infoFeed = ref([''])
    const error = ref('')
    const isLoadMore = ref(false)
    const displayInfoList = ref([''])
    

    const load = async () => {
      try {
        let data = await fetch('http://localhost:3000/info-posts')
        if(!data.ok) {
          throw Error('no available data')
        } 
        infoFeed
.value = await data.json()
        console.log(infoFeed
.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    const displayNews = () => {
            if(infoFeed
    .value) {
                if(infoFeed
        .value.length) {
                    if(infoFeed
            .value.length > loadIndex * newsLimit) {
                        displayInfoList
                .value = infoFeed
                .value.slice(0, loadIndex * newsLimit)
                        isLoadMore.value = true
                    } else {
                        displayInfoList
                .value = infoFeed
                .value
                        isLoadMore.value = false
                    }
                } else {
                    displayInfoList
            .value = []
                    isLoadMore.value = false
                }
            } else {
                displayInfoList
        .value = []
                isLoadMore.value = false
            }
        }

    const loadMore = () => {
            if(infoFeed
    .value.length) {
                if(loadIndex < (infoFeed
        .value.length / newsLimit)) {
                    loadIndex = loadIndex + 1
                    displayNews()
                } 
            } else
            isLoadMore.value = false
    }

    load().then(() => { displayNews() })

    
    return { infoFeed, error, displayInfoList, loadMore, isLoadMore }
  },
}


</script>

<style>


.infofeed-timeline {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.newsfeed-timeline a {
    text-decoration: none;
}

.newsfeed-timeline a.router-link-active {
    text-decoration: none;
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
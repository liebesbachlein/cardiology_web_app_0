<template>
    <div class="infofeed">
        <div class="subpage-title">
            Полезная информация
        </div>
        <div  class="infofeed-timeline">
            <div v-if="error">{{ error }}</div>
            <div v-else-if="infoFeed.length > 1">
                <div v-for="newsItem in displayInfoList" :key="newsItem.id">
                    <div v-if="newsItem.id">
                    <router-link :to="{name: 'InfoAbout', params: {id: newsItem.id}}">
                        <InfoShort :newsItem="newsItem"/>
                    </router-link>
                    </div>
                </div>
            </div>
            <div v-else><Loader/></div>
        </div>

        <div class="blue-button-box">
            <div v-if="isLoadMore" class="blue-button" @click="loadMore">
                <h4>Загрузить еще</h4>
            </div>
        </div>
    </div>
</template>

<script>
import InfoShort from './InfoShort.vue';
import InfoAbout from './InfoAbout.vue';
import { ref} from 'vue';
import { loadInfo } from '@/firebase/config';
import Loader from '@/components/Loader.vue';

export default {
    components: {InfoAbout, InfoShort, Loader},
    setup() { 
    const newsLimit = 8
    let loadIndex = 1
    const infoFeed = ref([''])
    const error = ref('')
    const isLoadMore = ref(false)
    const displayInfoList = ref([''])
    

    const load = async () => {
      try {
        infoFeed.value = await loadInfo()
        /*
        let data = await loadInfo()
        if(!data.ok) {
          throw Error('no available data')
        } 
        infoFeed.value = await data.json()*/
        console.log(infoFeed.value)
      }
      catch(err) {
        error.value = err.message
        console.log(error.value)
      }
    }

    const displayNews = () => {
            if(infoFeed.value) {
                if(infoFeed.value.length) {
                    if(infoFeed.value.length > loadIndex * newsLimit) {
                        displayInfoList.value = infoFeed.value.slice(0, loadIndex * newsLimit)
                        isLoadMore.value = true
                    } else {
                        displayInfoList.value = infoFeed.value
                        isLoadMore.value = false
                    }
                } else {
                    displayInfoList.value = []
                    isLoadMore.value = false
                }
            } else {
                displayInfoList.value = []
                isLoadMore.value = false
            }
        }

    const loadMore = () => {
            if(infoFeed.value.length) {
                if(loadIndex < (infoFeed.value.length / newsLimit)) {
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

.infofeed-timeline a {
    text-decoration: none;
}

.infofeed-timeline a.router-link-active {
    text-decoration: none;
}

</style>
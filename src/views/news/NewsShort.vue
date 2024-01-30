<template>
    
     <div class="newsshort">
        <div v-if="newsItem.imgSrc && !mobile" class="newsshort-image">
            <img :src="'/news_posters/' + newsItem.imgSrc">
        </div>
        

        <div class="newsshort-info">
            <div class="newsshort-info-phrase-date">
                <div class="newsshort-phrase">
                    {{ newsItem.phrase }}
                </div>
                <div class="newsshort-date">
                    {{ newsItem.date }}
                </div>
            </div>
            <div v-if="newsItem.imgSrc && mobile" class="newsshort-image">
                    <img :src="'/news_posters/' + newsItem.imgSrc">
            </div>
            <div class="newsshort-title">
                <router-link :to="{name: 'NewsAbout', params: {id: newsItem.id}}">
                    {{ newsItem.title }}
                </router-link>
            </div>
            <div class="newsshort-summary">
                {{ newsItem.summary }}
            </div>
        </div>
    </div>
     
</template>

<script>
import NewsAbout from './NewsAbout.vue';

export default {
    props: ['newsItem'], 
    components: {NewsAbout}, 
    data: function() {
    return {
      mobile: null
    }
  },
    mounted() {
    this.mobile = window.matchMedia("(max-width: 768px)").matches
  },
}

</script>

<style>


.newsshort {
    width: 100%;
    display: flex;
    margin-bottom: 2rem;
}

.newsshort-title {
    text-decoration: underline;
    font-size: 1.375rem;
    font-family: var(--news-title-font);
    cursor: pointer;
    color: var(--component-accent-color2);
}

.newsshort-title a {
    color: #454545;
}

.newsshort-title a:hover {
    color: var(--component-accent-color1);
}

.newsshort-summary {
    display: block;
    font-size: 0.9375rem;
}

.newsshort-image {
    width: 40%;
    display: inline-block;
}

.newsshort-image img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-width: 100%;
    height: auto;
}

.newsshort-info {
    width: 60%;
    display: inline-flex;
    flex-direction: column;
    margin-left: 4%;
}

.newsshort-info-phrase-date {
    display: flex;
    justify-content: space-between;
    
}

.newsshort-info-phrase-date>div {
    color: #98abcf;
    font-size: 0.8125rem;
    font-weight: 300;
}

.newsshort-phrase {
    text-transform: uppercase;
    
}

@media only screen and (max-width: 768px) {

.newsshort {

    margin-bottom: 3rem;
}

.newsshort-image {
    width: 100%;
    height: calc(( 100vw - 2rem) * 9 / 16 );
    display: inline-block; 
}

.newsshort-image img {
    display: block;
    max-width: 100%;
    height: auto;
}

.newsshort-info {
    width: 100%;
    margin: 0;
}

.newsshort-info-phrase-date>div {
    font-size: 0.875rem;
    font-weight: 400;
    margin-bottom: 0.25rem;
}

.newsshort-title a:hover {
    color: #454545;
}
}

</style>
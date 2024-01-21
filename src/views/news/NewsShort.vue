<template>
    
     <div class="newsshort">
        <div v-if="newsItem.imgSrc && !mobile" class="newsshort-image">
            <img :src="'/news_posters/' + newsItem.imgSrc">
        </div>

        <div class="newsshort-info">
            <div class="newsshort-info-upper">
                <div class="newsshort-info-phrase-date">
                    <div class="newsshort-phrase">
                        <h4>{{ newsItem.phrase }}</h4>
                    </div>
                    <div class="newsshort-date">
                        <h4>{{ newsItem.date }}</h4>
                    </div>
                </div>
                <div v-if="newsItem.imgSrc && mobile" class="newsshort-image">
                        <img :src="'/news_posters/' + newsItem.imgSrc">
                    </div>
                <div class="newsshort-title">
                    <h3>{{ newsItem.title }}</h3>
                </div>
            </div>
            <div class="newsshort-info-lower">
                <div class="newsshort-title">
                    <p>{{ newsItem.summary }}</p>
                </div>
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

@media only screen and (max-width: 768px) {

.newsshort {
    width: 100%;
    display: flex;
    margin-bottom: 3rem;
    cursor: pointer;
}

.newsshort-title h3 {
    font-size: 1.18rem;
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
    display: inline-flex;
    flex-direction: column;
    justify-content: space-between;
}

.newsshort-info-upper {
    width: 100%;
}

.newsshort-info-phrase-date {
    display: flex;
    justify-content: space-between;
}

.newsshort-info-phrase-date h4 {
    color: #969696
}

.newsshort-phrase {
    text-transform: uppercase;
}

.newsshort-info-lower {
    display: inline;
    margin-top: 1rem;
}
}

@media only screen and (min-width: 1024px) {

.newsshort {
    width: 100%;
    display: flex;
    margin: 3rem 0;
    cursor: pointer;
}

.newsshort-title h3 {
    font-size: 1.18rem;
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
    justify-content: space-between;
    margin-left: 4%;
}

.newsshort-info-upper {
    width: 100%;
}

.newsshort-info-phrase-date {
    display: flex;
    justify-content: space-between;
}

.newsshort-info-phrase-date h4 {
    color: #969696
}

.newsshort-phrase {
    text-transform: uppercase;
}

.newsshort-info-lower {
    display: inline;
}
}

</style>
<template>
<div class="newsmini-left" >
    <LineCircle class="newsmini-line" />
    <div class="news-box">
        <div class="newsmini-upper">
            <div class="news-format">
                <h4>{{ news.format }}</h4>
            </div>
            <div class="news-date">
                <h4>{{ news.date }}</h4>
            </div>
            
        </div>

        <div class="news-title-city">
        <div class="news-title">
            <h3>{{ news.title }}</h3>
        </div>

        <div class="news-city">
            <h4>{{ news.city }}</h4>
        </div>
        </div>

        <div class="news-chev-details">
            <div class="news-detail">
                <h4>{{ news.details }}</h4>
            </div>
            <ChevronLeft color="red" v-if="!mobile"/>
        </div>
    </div>
    <div v-if="!mobile" class="newsmini-img">
        <img :src="news.url">
    </div>
</div>

</template>

<script>
import LineCircle from './LineCircle.vue';
import ChevronLeft from '@/components/ChevronLeft.vue';

export default {
    props: ['news'],
    components: {LineCircle, ChevronLeft}, 
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

.news-format {
    grid-column: 2;
}

.newsmini-left .newsmini-img {
    height: 100%;
    width: auto;
    object-fit: cover;
    display: hidden;
    justify-content: flex-start;
    align-items: flex-start;
}

.newsmini-left .newsmini-img img {
    max-height: 10rem;
    width: auto;
    object-fit: contain;
    display: hidden;
}

.newsmini-left {
    display: grid;
    grid-template-columns: calc(100vw - 52px) 52px;
    justify-content: space-between;
    align-items: flex-start;
}

.newsmini-left .newsmini-line {
    grid-column: 2;
    grid-row: 1;
}

.newsmini-left .news-box {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    text-align: left;
    padding-left: 1rem;
}

.newsmini-left .news-date {
    display: grid;
    width: 12.5rem;
    height: 2.5rem;
    background-color: var(--component-accent-color1);
    border-radius: 0 0.75rem 0.75rem 0;
    padding-left: 1.5rem;
    justify-content: left;
    align-items: center;
    grid-column: 1;
}

.newsmini-left .news-date h4 {
    grid-row: 1;
    grid-column: 1;
    color: #FFF;
}

.newsmini-left .news-chev-details {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: right;
    
}


.newsmini-left .news-city h4 {
    font-style: italic;
    line-height: 1rem;
}

.newsmini-left .news-detail {
    margin-right: 1rem;
    display: inline;
}

.news-detail h4 {
    line-height: 1.25rem;
    color: #000;
}

}

@media only screen and (min-width: 1024px) {

.newsmini-left .news-format {
    padding-left: 2rem;
}

.newsmini-left .newsmini-img {
    height: 100%;
    width: auto;
    object-fit: cover;
    grid-column: 3;
    grid-row: 1;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
}

.newsmini-left .newsmini-img img {
    max-height: 10rem;
    width: auto;
    object-fit: contain;
}

.newsmini-left {
    display: grid;
    grid-template-columns: 46.25% 7.5% 46.25%;
    justify-content: center;
}

.newsmini-left .newsmini-line {
    grid-column: 2;
    grid-row: 1;
}

.newsmini-left .news-box {
    grid-column: 1;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    text-align: right;
}

.newsmini-left .news-date {
    margin-left: auto;
    display: grid;
    width: 12.5rem;
    height: 2.5rem;
    background-color: var(--component-accent-color1);
    border-radius: 0.75rem 0 0 0.75rem;
    padding-right: 1.5rem;
    justify-content: right;
    align-items: center;
}

.newsmini-left .news-date h4 {
    text-align: right;
    grid-row: 1;
    grid-column: 1;
    color: #FFF;
}

.newsmini-left .news-chev-details {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: right;
    
}


.newsmini-left .news-city h4 {
    font-style: italic;
    line-height: 1rem;
}

.newsmini-left .news-detail {
    margin-right: 1rem;
    display: inline;
}

.news-detail h4 {
    line-height: 1.25rem;
    color: #000;
}

}

</style>
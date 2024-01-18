<template>
    
<div class="newsmini-right">
    

    <div class="newsmini-img">
        <img :src="news.url">
    </div>
    
    <LineCircle class="newsmini-line"/>
    <div class="news-box">
        <div class="newsmini-upper">
            <div class="news-date">
                <h4>{{ news.date }}</h4>
            </div>
            <div class="news-format">
                <h4>{{ news.format }}</h4>
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
            <ChevronRight color="red"/>
            <div class="news-detail">
                <h4>{{ news.details }}</h4>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import LineCircle from './LineCircle.vue';
import ChevronRight from '@/components/ChevronRight.vue';

export default {
    props: ['news'],
    components: {LineCircle, ChevronRight}
}

</script>

<style>

.newsmini-right .newsmini-img {
    height: 100%;
    width: auto;
    object-fit: cover;
    grid-column: 1;
    grid-row: 1;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.newsmini-img img {
    max-height: 10rem;
    width: auto;
    object-fit: contain;
}

.news-title-city {
    margin-bottom: 1rem;
}
.newsmini-upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
}

.newsmini-right .news-format {
    padding-right: 2rem;
}

.news-format h4 {
    font-size: 1rem;
    text-transform: uppercase;
    color: #454343;
    text-decoration: none;
}

.newsmini-right {
    display: grid;
    grid-template-columns: 46.25% 7.5% 46.25%;
    justify-content: center;
}

.newsmini-right .newsmini-line {
    grid-column: 2;
    grid-row: 1;
}

.newsmini-right .news-box {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.newsmini-right .news-date {
    display: grid;
    width: 12.5rem;
    height: 2.5rem;
    background-color: var(--component-accent-color1);
    border-radius: 0 0.75rem 0.75rem 0;
    padding-left: 1.5rem;
    justify-content: left;
    align-items: center;
}

.newsmini-right .news-date h4 {
    grid-row: 1;
    grid-column: 1;
    color: #FFF;
}

.newsmini-right .news-chev-details {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
   
}

.newsmini-right .news-city h4 {
    font-style: italic;
    line-height: 1rem;
}
.news-chev-details h4 {
    color: #858585;
}

.newsmini-right .news-detail {
    margin-left: 1rem;
    display: inline;
    
}

.news-title h3 {
    color: var(--component-accent-color2)
}


</style>
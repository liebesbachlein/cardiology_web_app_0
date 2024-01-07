<template>
<div class="newsmini-left">
    <LineCircle class="newsmini-line"/>
    <div class="news-box">
        <div class="news-date">
            <h4>{{ news.date }}</h4>
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
            <ChevronLeft color="red"/>
        </div>
    </div>
</div>

</template>

<script>
import LineCircle from './LineCircle.vue';
import ChevronLeft from '@/components/ChevronLeft.vue';

export default {
    props: ['news'],
    components: {LineCircle, ChevronLeft}
}

</script>

<style>

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
    padding-right: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    text-align: right;
}

.newsmini-left .news-date {
    margin-left: auto;
    display: grid;
    width: 200px;
    height: 40px;
    background-color: var(--component-accent-color1);
    border-radius: 20px 0 0 20px;
    padding-right: 22px;
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
}

.newsmini-left .news-detail {
    margin-right: 16px;
    display: inline;
}


</style>
<template>
<div class="newsmini-right">
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
    padding-left: 45px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.newsmini-right .news-date {
    display: grid;
    width: 200px;
    height: 40px;
    background-color: var(--component-accent-color1);
    border-radius: 0 20px 20px 0;
    padding-left: 22px;
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
}

.newsmini-right .news-detail {
    margin-left: 8px;
    display: inline;
}


</style>
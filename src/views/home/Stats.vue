<template>
    <div v-if="mobile != null" class="stats-img">
        <img src="@/assets/heart.svg">
    </div>
    <HomeHeader title="Глобальная статистика"/>
    <StatsSwipeMobile v-if="mobile"/>
    <div class="stats" v-else>

<div class="stats-item">
    <div class="stats-header">
        <h1>1 МЛРД</h1>
    </div>
    <div class="stats-bottom">
        <p>— людей на земле страдает от гипертонии</p>
    </div>
</div>


<div class="stats-item">
    <div class="stats-header">
        <h1>9,4 МЛН</h1>
    </div>
    <div class="stats-bottom">
        <p>— случаев смерти в мире ежегодно из-за осложнения гипертонии</p>
    </div>
</div>

<div class="stats-item">
    <div class="stats-header">
        <h1>40%</h1>
    </div>
    <div class="stats-bottom">
        <p>— которой среди взрослого населения</p>
    </div>
</div>

<div class="stats-item">
    <div class="stats-header">
        <h1>45%</h1>
    </div>
    <div class="stats-bottom">
        <p>— смертных случаев приходится на долю гипертонии</p>
    </div>
</div>

</div>


</template>

<script>
import StatsSwipeMobile from './StatsSwipeMobile.vue'
import HomeHeader from './HomeHeader.vue'

export default {
    data: function() {
        return {
            mobile: null
        }
    },
    mounted() {
        this.mobile = window.matchMedia("(max-width: 768px)").matches
    },
    components: {StatsSwipeMobile, HomeHeader}
}

</script>

<style>

@media only screen and (max-width: 768px) {

.header-top h1 {
    font-size: 1rem;
}

.stats-img {
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: -5;
    left: 0;
}

.stats-img img {
    width: 100%;
    height: auto;
    object-fit: contain;
}


.stats {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 8rem 0 4rem 0;
}

}


@media only screen and (min-width: 1024px) {
.stats-img {
    max-width: 20rem;
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: 1;
    left: 0;
}

.stats-img img {
    object-fit: contain;
}


.stats {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
    flex-direction: row;
}

.stats-item {
    width: 20%;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
    border-radius: 0.5rem;
    height: 16.4rem;
    padding: 2rem 1rem 1rem 1rem;
    z-index: 1;
}


.stats-item:hover {
    box-shadow: -2px 2px 10px 0px rgba(171, 183, 208, 0.7);
}

.stats-item h1 {
    font-size: 2rem;
    color: var(--component-accent-color2);
    font-weight: 700;
}

.stats-item p {
    font-size: 1rem;
    color: #6C6C6C;
    font-weight: 400;
}

.stats-header {
    margin-bottom: 1rem;
}

.stats-header h1 {
    font-family: var(--news-title-font);
    font-weight: 500;
}
}
</style>
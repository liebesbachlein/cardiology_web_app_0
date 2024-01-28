<template>
    <div v-if="mobile != null" class="stats-img" v-show="false">
        <img src="@/assets/heart.svg">
    </div>
    <HomeHeader title="Глобальная статистика"/>
    <StatsSwipeMobile v-if="mobile"/>
    <div class="stats" v-else>

<div class="stats-item">
    <div class="stats-header">1 МЛРД</div>
    <div class="stats-bottom">— людей на земле страдает от гипертонии</div>
</div>

<div class="stats-item">
    <div class="stats-header">9,4 МЛН</div>
    <div class="stats-bottom">— случаев смерти в мире ежегодно из-за осложнения гипертонии</div>
</div>

<div class="stats-item">
    <div class="stats-header">40%</div>
    <div class="stats-bottom">— которой среди взрослого населения</div>
</div>

<div class="stats-item">
    <div class="stats-header">45%</div>
    <div class="stats-bottom">— смертных случаев приходится на долю гипертонии</div>
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
    margin: 3rem 0 6rem 0;
    flex-direction: row;
}

.stats-item {
    width: 20%;
    background-color: #F7F9FA;
    box-shadow: 0px 16px 20px rgba(15, 30, 104, 0.08), 0px 0px 6px rgba(15, 30, 104, 0.06);
    border-radius: 0.5rem;
    height: 16.4rem;
    padding: 2rem 1rem 1rem 1rem;
    z-index: 1;
}

/*
.stats-item:hover {
    box-shadow: 0px 16px 20px rgba(15, 30, 104, 0.08), 0px 0px 6px rgba(15, 30, 104, 0.06);
}
*/
.stats-bottom {
    font-size: 1rem;
    color: #454545;
    font-weight: 400;
}

.stats-header {
    margin-bottom: 1rem;
    font-size: 2rem;
    color: var(--component-accent-color2);
    font-family: var(--news-title-font);
    font-weight: 400;
}
}
</style>
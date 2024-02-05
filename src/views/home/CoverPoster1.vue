<template>
<div class="poster poster1">
        <div class="box">
           
            <div class="header1">
                <div>Региональный тур</div>
                <div>Академия</div>
                <div>Kардио-терапевта</div>
            </div> 
            <div class="header2">
                <div class="poster-details-box"><div class="poster-details-name">Когда начинать лечение, какую терапию предпочесть в той или иной ситуации?</div></div>
                <div class="poster-details-box"><div class="poster-details-name">Какие методы диагностики актуальны?</div></div>
                <div class="poster-details-box"><div class="poster-details-name">Алгоритмы, чёткие планы ведения, реальные клинические ситуации</div></div>
                <div class="poster-city"><img src="@/assets/address-white.svg">Шымкент, Aidana Plaza Hotel</div>
                <div class="poster-date"><img src="@/assets/time.svg">8 — 9 февраля</div>
                
                <a class="cover-button" tag="div" href="https://www.instagram.com/p/C2INfZlCciy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">
                    Подробнее →</a>
                
            </div>    
        </div>
    
</div>

</template>

<script>
import DateBox from './DateBox.vue';

export default {
    mounted() {
        this.$emit('light');
    },
    components: { DateBox }
}

</script>

<style>

.cover-button {
    height: 3.125rem;
    width: 11rem;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--plain-text-font);
    font-weight: 500;
    font-size: 1rem;
    color: var(--component-accent-color1);
    background-color: #FFF;
    margin-top: 0.5rem;
}

.poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 1rem;
}

.poster1 {
    background-image: url('/covers/cover11-mobile.png');
}

.poster1 .box {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.poster1 .header1 {
    text-align: left;
    width: 100%;
    margin-bottom: 2rem;
}

.poster1 .header2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    justify-content: center;
    height: 100%;
}

.poster1 .header1 div:nth-child(1) {
    font-family: var(--plain-text-font);
    font-size: 1.25rem;
    font-weight: 400;
    color: rgb(158, 198, 234, 0.8);
}

.poster1 .header1 div:nth-child(2) {
    font-family: var(--tenor-font);
    font-size: 3.5rem;
    font-weight: 500;
    color: var(--component-accent-color1)
}

.poster1 .header1 div:nth-child(3) {
    font-family: var(--tenor-font);
    font-size: 1.5rem;
    font-weight: 400;
    color: #FFF;
}

.header2 .poster-details-box {
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    border-radius: 0.5rem;
    background-color: rgb(158, 198, 234, 0.8);
    padding: 0.25rem 0.5rem;
    max-width: auto;
}

.poster-details-name {
    display: inline-block;
    height: 100%;
    text-wrap: wrap;
    font-size: 1rem;
    color: #FFF;
}

.poster-city, .poster-date {
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.325rem;
    font-family: var(--plain-text-font);
    color: #FFF;
    align-items: center;
}

.poster-city {
    margin-top: 1rem;
}

.poster-date {
    margin-bottom: 1rem;
}

.poster img {
    display: inline-block;
    width: 2rem;
    height: 2rem;
    margin-right: 0.25rem;
}

@media only screen and (min-width: 1024px) {

.cover-button:hover {
    color: var(--component-accent-color2)
}

.poster {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    
}

.poster1 {
    background-image: url('/covers/cover11.png');
}

.poster1 .box {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

.poster1 .header1 {
    width: 50%;
    padding-left: 5%;
    margin: 0;
}

.poster1 .header2 {
    width: 50%;
    text-align: left;
    justify-content: center;
    height: 100%;

}

.poster1 .header1 div:nth-child(1) {
    font-size: 1.25rem;
    font-weight: 400;
}

.poster1 .header1 div:nth-child(2) {
    font-size: 5rem;
    font-weight: 400;
}

.poster1 .header1 div:nth-child(3) {
    font-size: 2.5rem;
    font-weight: 400;
}




}

</style>
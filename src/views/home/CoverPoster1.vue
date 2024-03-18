<template>
<div class="poster poster1">
    <div class="box">
    
    <div class="header1">
        <div>Научно-практическая конференция</div>
        <div>Многогранная гипертония</div>
        <div class="poster-city"><img src="@/assets/address-white.svg">              
            Отель "Kazzhol Park Almaty", ул. Наурызбай батыра, 108, Алматы</div>
        <div class="poster-date"><img src="@/assets/time.svg">17 мая</div>
        <router-link class="cover-button" tag="div" to="/news/mnogogrannaya-hypertoniya-may-2024/">
            Читать →</router-link>
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

.header2 .poster-details-box {
    margin-bottom: 0.5rem;
    display: inline-flex;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #AD78D8bc;
    padding: 0.25rem 0.5rem;
    max-width: auto;
}

.poster-details-name {
    display: inline-block;
    height: 100%;
    text-wrap: wrap;
    font-size: 0.875rem;
    color: #FFF;
}

.poster-city, .poster-date {
    display: flex;
    flex-wrap: nowrap;
    font-size: 1.125rem;
    font-family: var(--plain-text-font);
    color: #FFF;
    align-items: center;
}

.poster-city {
    margin: 0.5rem 0;
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


.poster1 {
    background-image: url('/covers/cover25-mobile.jpg');
    padding: 0 1rem;
}

.poster1 .box {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
}

.poster1 .header1 {
    width: 90%;
    display: flex;
    text-align: left;
    flex-direction: column;
}
.poster1 .header1 div:nth-child(1) {
    font-family: var(--plain-text-font);
    font-size: 1.125rem;
    font-weight: 400;
    color: #FFFF;
}

.poster1 .header1 div:nth-child(2){
    font-family: var(--tenor-font);
    font-size: 2.5rem;
    font-weight: 400;
    color: #FFFF;
    margin-bottom: 1rem;
    
}



.poster1 .cover-button {
    margin-top: 1rem;
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


.poster-details-name {
    font-size: 1rem;
}

.poster-city, .poster-date {
    font-size: 1.25rem;
}
.poster-city {
    margin-top: 1rem;
    margin-bottom: 0.5rem;
}


.poster1 {
    background-image: url('/covers/cover25.jpg');
}
.poster1 .box {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
}

.poster1 .header1 {
    width: 50%;
}

.poster1 .header1 div:nth-child(1){
    margin-bottom: 1rem;
    font-size: 1.5rem;
}

.poster1 .header1 div:nth-child(2){
    margin: 0;
    font-size: 4rem;
}



}

</style>


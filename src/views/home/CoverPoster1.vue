<template>
<div class="poster poster1">
        <div class="box">
           
            <div class="header1">
                <div>VI Республиканская научно-практическая конференциия
                    с международным участием</div>
                <div>Секреты женского сердца – 2024</div>
            </div> 
            <div class="header2">
                <div class="poster-details-box"><div class="poster-details-name">Гибридный формат: онлайн и оффлайн</div></div>
                <div class="poster-details-box"><div class="poster-details-name">Актуальные вопросы в области ССЗ у женщин</div></div>
                <div class="poster-details-box"><div class="poster-details-name">Oбмен опытом с ведущими специалистами</div></div>
                <div class="poster-city"><img src="@/assets/address-white.svg">Отель «Kazzhol Park Almaty», Алматы</div>
                <div class="poster-date"><img src="@/assets/time.svg">29 февраля</div>
                
                <a class="cover-button" tag="div" href="https://whs2024.online/">
                    Зарегистрироваться →</a>
                
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

.poster1 .cover-button {
    width: 13rem;
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
    background-image: url('/covers/cover24-mobile.png');
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
    margin-bottom: 1rem;
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
    font-size: 1rem;
    font-weight: 400;
    color: #322957d2;
    margin-bottom: 1rem;
}

.poster1 .header1 div:nth-child(2) {
    font-family: var(--tenor-font);
    font-size: 2.5rem;
    font-weight: 500;
    color: #3E3561;
    margin-bottom: 1.5rem;
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
    background-color: rgba(144, 82, 155, 0.676);
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
    margin-top: 0.5rem;
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
    background-image: url('/covers/cover24.png');
}

.poster1 .box {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: row;
    padding-bottom: 4rem;
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
    margin-left: 5rem;
    margin-top: 0.5rem;
}

.poster1 .header1 div:nth-child(1) {
    font-size: 1.125rem;
    margin-bottom: 2rem;
    font-weight: 500;
}

.poster1 .header1 div:nth-child(2) {
    font-size: 3.5rem;
    font-weight: 400;
}

.poster1 .header1 div:nth-child(3) {
    font-size: 2.5rem;
    font-weight: 400;
}
.poster-details-name {
    font-size: 1rem;
}

.poster-city, .poster-date {
    font-size: 1.25rem;
}
.poster-city {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
}

.poster-date {
    margin-bottom: 3rem;
}


}

</style>
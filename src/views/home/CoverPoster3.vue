<template>

<div class="poster poster3">
    
    <div class="poster-contents3">
        <div class="header1" style="background-color: transparent">
            <h1 style="line-height: 2.5rem; font-size: 2.5rem; font-weight: 400; color: #FFF; margin-bottom: 1rem">Измерьте свое давление </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: #2D2D2D; margin-bottom: 1rem">Ежегодно 17 мая во всем мире по инициативе Международного общества гипертонии и Всемирной антигипертензивной лиги отмечается Международный день борьбы с артериальной гипертензией</h3>            
            <router-link to="/about">
                <div class="cover-button" >Подробнее</div>
            </router-link>
        </div>
    </div>

    <div class="poster-contents3" style="mix-blend-mode: hard-light; z-index: 4;">
        <div class="header1" style="background-color: #C2C2C2;">
            <h1 style="line-height: 2.5rem; font-size: 2.5rem; font-weight: 400; color: transparent; margin-bottom: 1rem">Измерьте свое давление </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: transparent; margin-bottom: 1rem">Ежегодно 17 мая во всем мире по инициативе Международного общества гипертонии и Всемирной антигипертензивной лиги отмечается Международный день борьбы с артериальной гипертензией</h3>            
            <router-link to="/about" style="visibility:hidden;">
                <div class="cover-button">Подробнее</div>
            </router-link>

        </div>
    </div>
</div>

</template>

<script>

export default {
    mounted() {
        this.$emit('dark')
    },
}

</script>

<style>

.poster-contents3 {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
}

@media only screen and (max-width: 768px) {

.poster3 {
    background-image: url('/covers/image-cover3-mobile.png');
}

.poster-contents3 {
    padding: 0 1rem;
}

.poster-contents3 .header1 {
    max-height: 100%;
    width: 100%;
    border-radius: 16px;
    display: inline-flex;
    text-align: left;
    padding: 1rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {

.poster-contents3 {
    padding: 0 1rem;
}

.poster3 {
    background-image: url('/covers/image-cover3-mobile.png');
}

.poster-contents3 .header1 {
    max-height: 100%;
    width: 100%;
    border-radius: 16px;
    display: inline-flex;
    text-align: left;
    padding: 1rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}
}

@media only screen and (min-width: 1024px) {

    
.poster-contents3 {
    padding-right: 5%;
}

.poster3 {
    background-image: url('/covers/image-cover3.png');
}

.poster-contents3 .header1 {
    width: 40%;
    border-radius: 16px;
    display: inline-flex;
    text-align: left;
    padding: 2rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}

.poster3 .cover-button {
    margin-top: 2rem;
}
}
</style>
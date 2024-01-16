<template>

<div class="cover">

    <div class="cover-box">
        <router-link to="/about" v-if="showCover1">
            <CoverPoster1/>
        </router-link>
        <router-link to="/about" v-if="showCover2">
            <img src="@/assets/covers/image-cover2.png">
        </router-link>
        <router-link to="/about" v-if="showCover3">
            <img src="@/assets/covers/image-cover3.png">
        </router-link>
        
    </div>

    <div class="carousel">
        <div class="carousel-box">
            <div class="indicator" @click="changeCover(1)" :class="{'indicator-active': showCover1}"></div>
            <div class="indicator" @click="changeCover(2)" :class="{'indicator-active': showCover2}"></div>
            <div class="indicator" @click="changeCover(3)" :class="{'indicator-active': showCover3}"></div>
        </div>
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import CoverPoster1 from './CoverPoster1.vue'

export default {
    components: {CoverPoster1},
    setup() {
        const showCover1 = ref(true)
        const showCover2 = ref(false)
        const showCover3 = ref(false)

        const autoCarousel = () => {}

        const changeCover = (currentCover) => {
            if (currentCover === 1) {
                showCover1.value = true
                showCover2.value = false
                showCover3.value = false
            } else if (currentCover === 2) {
                showCover1.value = false
                showCover2.value = true
                showCover3.value = false
            } else {
                showCover1.value = false
                showCover2.value = false
                showCover3.value = true
            }
        }

        return {showCover1, showCover2, showCover3, changeCover, autoCarousel}
    }
}

</script>

<style>

.cover {
    width: 100%;
    display: block;
    /*margin-top: 2rem;*/
    margin-bottom: 3rem;
}

.cover-box {
    display: block;
    text-align: center;
}

.cover-box img {
    object-fit: cover;
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
}

.carousel {
    display: flex;
    padding: 1rem;
    width: 100%;
    justify-content: center;
}

.carousel-box {
    display: inline-flex;
    align-items: space-between;
    justify-content: center;
}

.indicator {
    display: inline-block;
    margin: 0 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: #C4C4C4;
    cursor: pointer;
}

.indicator-active {
    display: inline-block;
    margin: 0 0.5rem;
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 0.25rem;
    background-color: var(--component-accent-color1);
    cursor: pointer;
}


</style>
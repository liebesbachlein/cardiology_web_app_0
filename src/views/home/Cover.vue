<template>

<div class="cover">

    <div class="cover-box">


        <Transition name="slider" mode="in-out">
            <div v-if="showCover1">
                <CoverPoster1 :is="showCover1"/>
            </div>
        </Transition>
        <Transition name="slider" mode="in-out">
            <div v-if="showCover2">
                <CoverPoster2  :is="showCover2"/>
            </div>
        </Transition>
        <Transition name="slider" mode="in-out">
            <div v-if="showCover3">
                <CoverPoster3  :is="showCover3"/>
                </div>
        </Transition>  

        <div class="carousel">
            <div class="carousel-box">
                <div class="indicator" @click="changeCover(1)" :class="{'indicator-active': showCover1}"></div>
                <div class="indicator" @click="changeCover(2)" :class="{'indicator-active': showCover2}"></div>
                <div class="indicator" @click="changeCover(3)" :class="{'indicator-active': showCover3}"></div>
            </div>
        </div> 
    </div>
</div>
</template>

<script>
import { ref } from 'vue'
import CoverPoster1 from './CoverPoster1.vue'
import CoverPoster2 from './CoverPoster2.vue'
import CoverPoster3 from './CoverPoster3.vue'


export default {
    components: {CoverPoster1, CoverPoster2, CoverPoster3},

    setup() {
        const showCover1 = ref(true)
        const showCover2 = ref(false)
        const showCover3 = ref(false)
        let index = 1

        const changeCover = (currentCover) => {
            if (currentCover === 1) {
                index = 1
                showCover1.value = true
                showCover2.value = false
                showCover3.value = false
            } else if (currentCover === 2) {
                index = 2
                showCover1.value = false
                showCover2.value = true
                showCover3.value = false
                
            } else if (currentCover === 3){
                index = 3
                showCover1.value = false
                showCover2.value = false
                showCover3.value = true
            }
        }

        
window.onload = function () { 
    setInterval(function () { 
            
            for (let i = 1; i <= 10; i++) { 
                
                if (index === 1) {
                
                setTimeout(() => changeCover(index), 380); 
                index = 2

            } else if (index === 2) {
                setTimeout(() => changeCover(index), 380); 
                index = 3

                
            } else if (index === 3){                
                setTimeout(() => changeCover(index), 380); 
                index = 1

            }
            }
            
        }, 5000); 
    }

        return {showCover1, showCover2, showCover3, changeCover}
    }

}

</script>

<style>

.slider-enter-active,
.slider-leave-active {
  transition: all 0.5s ease-in-out;
  max-width: 100%;
}

.slider-enter-from,
.slider-leave-to {
    opacity: 0;
  width: 0;
}

.cover {
    width: 100%;
    display: block;
    /*margin-top: 2rem;*/
    margin-bottom: 3rem;
}

.cover-box {
    display: block;
    text-align: center;
    height: calc(100vw * 16 / 9 * 0.9);
    position: relative;
    width: 100%;
    right: 0;
}

.carousel {
    display: block;
    max-height: 4rem;
    justify-content: center;
    position: absolute;
    bottom: 5%;
    width: 100%;

}

.carousel-box {
    display: inline-flex;
    align-items: center;
    justify-content: center;
}

.indicator, .indicator-active {
    display: inline-block;
    margin: 0 1rem;
    width: 10px;
    height: 10px;
    border-radius: 5px;
    background-color: #8198bc;
    cursor: pointer;
}

.indicator-active {
    background-color: var(--component-accent-color1);
}

@media only screen and (min-width: 768px) {
    .cover-box {
        height: calc(100vw * 4 / 3);
    }
}

@media only screen and (min-width: 1024px) {

.cover-box {
    height: calc(100vw * 9 / 16);
}

.carousel {
    bottom: 10%;

}

}
</style>
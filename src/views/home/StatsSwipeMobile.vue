<template>
<div class="stats-carousel">

<div class="chevron-tap" @click="clickBackward">
    <ChevronLeft color="blue" />
    </div>    

<Transition mode="out-in" name="slider-quick">
<div class="stats-item" v-if="pageNum == 1">
    <div class="stats-header">
        <h1>1 МЛРД</h1>
    </div>
    <div class="stats-bottom">
        <p>— людей на земле страдает от гипертонии</p>
    </div>
</div>


<div class="stats-item" v-else-if="pageNum == 2">
    <div class="stats-header">
        <h1>9,4 МЛН</h1>
    </div>
    <div class="stats-bottom">
        <p>— случаев смерти в мире ежегодно из-за осложнения гипертонии</p>
    </div>
</div>

<div class="stats-item" v-else-if="pageNum == 3">
    <div class="stats-header">
        <h1>40%</h1>
    </div>
    <div class="stats-bottom">
        <p>— которой среди взрослого населения</p>
    </div>
</div>

<div class="stats-item" v-else-if="pageNum == 4">
    <div class="stats-header">
        <h1>45%</h1>
    </div>
    <div class="stats-bottom">
        <p>— смертных случаев приходится на долю гипертонии</p>
    </div>
</div>
</Transition>
<div class="chevron-tap"  @click="clickForward">
<ChevronRight color="blue"/>
</div>
</div>
</template>

<script>
import ChevronLeft from '@/components/ChevronLeft.vue';
import ChevronRight from '@/components/ChevronRight.vue';
import { ref } from 'vue';

export default {
    components: {ChevronLeft, ChevronRight},
    setup() {
        const factsNum = 4
        const pageNum = ref(1)

        const clickForward = () => {
            if (pageNum.value == factsNum) {
                pageNum.value = 1
            } else {
                pageNum.value++
            }
        }

        const clickBackward = () => {
            if (pageNum.value == 1) {
                pageNum.value = factsNum
            } else {
                pageNum.value--
            }
        }

        return {pageNum, clickBackward, clickForward}

    }
}

</script>

<style>

@media only screen and (max-width: 768px) {


    .chevron-tap {
        padding: 4%;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
    }

    .chevron-tap:active {
        background-color: rgba(33, 156, 196, 0.17);
    }

    .slider-quick-enter-active,
.slider-quick-leave-active {
  transition: opacity 0.2s ease-in-out;
}

.slider-quick-enter-from,
.slider-quick-leave-to {
  opacity: 10%;
}

.stats-carousel {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 3rem 0;

}

.stats-item {
    width: 17rem;
    max-width: 90%; /*!!!!!!!!!!!*/
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
    border-radius: 0.5rem;
    height: 16.4rem;
    padding: 1rem 1.5rem;
}

.stats-item h1 {
    font-size: 2.5rem;
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
}

</style>
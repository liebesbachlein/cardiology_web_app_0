<template>

    <div v-if="isActiveP" class="sidebarheading-no-url">
        <ChevronLeft color="blue"/>
        <div class="side-word-active" @click="handle">
            <h4>{{ heading }}</h4>
        </div>
    </div>

    <div v-else class="sidebarheading-no-url">
        <ChevronRight color="red"/>
        <div class="side-word" @click="handle">
            <h4>{{ heading }}</h4>
        </div>
        
    </div>

</template>

<script>
import ChevronRight from '@/components/ChevronRight.vue';
import ChevronLeft from '@/components/ChevronLeft.vue';
import { computed } from 'vue';

export default {
    components: { ChevronRight, ChevronLeft },
    props: ['heading', 'isActive'], 
    setup(props, {emit}) {
        const isActiveP = computed(() => {return props.isActive})
        const handle = () => {
            emit('about-nav-click')
        }
        return {handle, isActiveP}
    }
}

</script>

<style>

.sidebarheading-no-url {
    display: flex;
    margin: 1.5rem 0;
    align-items: center;
    cursor: pointer;
}

.sidebarheading-no-url .side-word {
    display: inline-block;
    margin-left: 1rem;
}

.sidebarheading-no-url .side-word-active {
    display: inline-block;
    margin-left: 1rem;
}

.sidebarheading-no-url .side-word h4 {
    font-weight: 400;
}

.sidebarheading-no-url .side-word-active h4 {
    font-weight: 600;
    color: var(--component-accent-color2)
}

</style>
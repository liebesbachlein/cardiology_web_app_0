<template>

    <div class="sidebarheading">
        <ChevronRight color="red"/>
        <div class="side-word">
            <router-link :to="url">{{ heading }}</router-link>
        </div>
        
    </div>

</template>

<script>
import ChevronRight from '@/components/ChevronRight.vue';

export default {
    components: { ChevronRight },
    props: ['heading', 'url']
}

</script>

<style>

.sidebarheading {
    display: inline-flex;
    margin-bottom: 1.5rem;
}

.sidebarheading .side-word {
    display: inline-block;
    position: relative;
    bottom: 0.5rem;
    margin-left: 1rem;
}

.sidebarheading a {
    font-size: 1.0625rem;
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}

.sidebarheading a:hover {
    text-decoration: underline;
}

.sidebarheading a.router-link-active {
    font-size: var(--subheading-font-size);
    font-family: var(--subheading-font);
    font-weight: 400;
    color: #000;
    text-decoration: none;
}

</style>
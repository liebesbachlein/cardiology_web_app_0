<template>
    <div class="chevron-header-box">
        <ChevronLeft color="red"/>
        <div class="head-name">
            <h3>{{ text }}</h3>
        </div>
    </div>

</template>

<script>

import ChevronLeft from './ChevronLeft.vue';

export default {
    props: ['text'],
    components: {ChevronLeft}
}

</script>

<style>
.chevron-header-box {
    width: 100%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 2rem 0 1rem 0;
}

.chevron-header-box .head-name {
    display: inline-block;
    padding-left: 2rem;
}

.chevron-header-box .head-name h3 {
    color: var(--text-accent-color2);
    font-weight: 600;
}

</style>
<template>
<div class="home-header-box">
    <div class="home-header">
        <h1>{{ title }}</h1>
    </div>
</div>

</template>


<script>

export default {
    props: ['title']
}

</script>

<style>

.home-header h1 {
    font-family: var(--news-title-font);
    text-transform: uppercase;
    font-size: 1.2rem;
    font-weight: 500;
    color: #2D2D2D;
    font-style: normal;
    letter-spacing: 1px;
}

.home-header-box {
    display: flex;
    justify-content: center;
}

.home-header {
    display: inline-block;
    text-align: center;
    border-top: 2px solid var(--component-accent-color1);
    padding: 12px;
}

</style>
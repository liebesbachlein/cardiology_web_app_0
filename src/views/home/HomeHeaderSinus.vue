<template>
<div class="home-header-box-sinus">
    <div class="rhythm-img-sinus" style="grid-column: 1; visibility: hidden;">
        <img src="@/assets/sinus_rhythm.svg">
    </div>
    <div class="home-header">
        <h1>{{ title }}</h1>
    </div>
    <div class="rhythm-img-sinus">
        <img src="@/assets/sinus_rhythm.svg">
    </div>
</div>

</template>


<script>

export default {
    props: ['title']
}

</script>

<style>

.rhythm-img-sinus {
    grid-column: 3;
    display: flex;
    justify-content: flex-end;
    position: relative;
    bottom: 68px;
    left: 0px;
}

.home-header-box-sinus {
    display: grid;
    grid-template-columns: auto auto auto;
    justify-content: center;
}

home-header-box-sinus .home-header {
    grid-column: 2;
}

</style>
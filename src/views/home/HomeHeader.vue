<template>
<div class="home-header-box">
    <div class="home-header">{{ title }}</div>
</div>

</template>


<script>

export default {
    props: ['title']
}

</script>

<style>


.home-header-box {
    display: flex;
    justify-content: flex-start;
}

.home-header {
    display: inline-block;
    /*border-top: 2px solid var(--component-accent-color1);*/
    font-family: var(--messiri-font);
    font-size: 2.5rem;
    font-weight: 500;
    color: #2D2D2D;
    font-style: normal;
}

@media only screen and (max-width: 768px) {
    .home-header {
        font-size: 1.75rem;
        margin-left: 1.5rem;
        font-weight: 600;
    }

}


</style>
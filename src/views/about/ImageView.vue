<template>
    <div class="image-view-backdrop">
        <div class="image-view"  @click.self="closeImageView">
            <div class="left" @click.self="closeImageView"><img src="@/assets/chevron-left.svg" @click="leftIndex"></div>
            <div class="image-box" :style="{backgroundImage: url}"></div>
            <div class="right" @click.self="closeImageView"><img src="@/assets/chevron-right.svg" @click="rightIndex"></div>
            <div class="cross" @click.self="closeImageView"><img src="@/assets/cross-thick.svg" @click="closeImageView"></div>
        </div>

    </div>
</template>


<script>

export default {
    props: ['url'],
    methods: {
        closeImageView() {
            this.$emit('closeImageView');
        },
        rightIndex() {
            this.$emit('rightIndex')
        }, 
        leftIndex() {
            this.$emit('leftIndex')
        }
    }
}

</script>

<style>


.image-view {
    height: 100%;
    width: 100%;
    display: grid;
    grid-template-columns: 10% auto 10%;
    grid-template-rows: 10% auto 10%;
    
}

.image-view .cross {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-view .right {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: center;
}

.image-view .left {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: center;

}

.left img {
    padding: 3rem 1rem;
    border-radius: 1rem;
}

.right img {
    padding: 3rem 1rem;
    border-radius: 1rem;
}

.image-view img:active {
    background-color: rgba(33,156,196,0.1);;
}

.image-view .image-box {
    grid-row: 2;
    grid-column: 2;
    background-size: cover;
    max-height: 100%;
    width: auto;
}

.image-view-backdrop {
    top: 0;
    left: 0;
    position: fixed;
    z-index: 9998;
    background-color: rgba(0,0,0,0.8);
    /*mix-blend-mode: luminosity;*/
    width: 100%;
    height: 100%;

}

</style>
<template>
    <div class="image-view-backdrop">
        <div class="image-view"  @click.self="closeImageView">
            <div class="left" @click.self="closeImageView"><img src="@/assets/chevron-left.svg" @click="leftIndex"></div>
            <div class="image-box" :style="{backgroundImage: url}"></div>
            <div class="right" @click.self="closeImageView"><img src="@/assets/chevron-right.svg" @click="rightIndex"></div>
            <div class="cross" @click.self="closeImageView"><img src="@/assets/cross-thick.svg" @click="closeImageView"></div>
            <div class="counter"><h3>{{ String(id2 + 1) + ' / ' + String(limit) }}</h3></div>
        </div>
        

    </div>
</template>


<script>

export default {
    props: ['url', 'limit', 'id2'],
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

@media only screen and (max-width: 768px) {

.counter {
    grid-column: 2;
    grid-row: 2;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 0;
    
}

.counter h3 {
    color: #FFF;
}

.image-view {
    height: 100%;
    width: 100%;
    
    display: grid;
    grid-template-columns: 3rem auto 3rem;
    grid-template-rows: auto 2rem auto 2rem auto;
    
}

.image-view .cross {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 0.5rem;
    position: relative;
    bottom: 0;
}

.image-view img {
    width: 80%;
}

.cross img {
    width: 60%;
}

.image-view .right {
    grid-column: 3;
    grid-row: 3;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.image-view .left {
    grid-column: 1;
    grid-row: 3;
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

.left img {
    padding: 0.5rem;
    border-radius: 0.25rem;
}

.right img {
    padding: 0.5rem;
    border-radius: 0.25rem;
}

.image-view img:active {
    background-color: rgba(100,100,100,0.6);;
}

.image-view .image-box {
    grid-row: 3;
    grid-column: 2;
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-position: center;
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
    padding: auto 0;

}
}


@media only screen and (min-width: 1024px) {

.counter {
    grid-column: 2;
    grid-row: 1;
    display: inline-flex;
    justify-content: center;
    align-items: flex-end;
    padding-bottom: 0.5rem;
    
}

.counter h3 {
    color: #FFF;
}

.image-view {
    height: 100%;
    width: 100%;
    
    display: grid;
    grid-template-columns: 15% auto 15%;
    grid-template-rows: 2rem auto 2rem;
    
}

.image-view .cross {
    grid-column: 3;
    grid-row: 1;
    display: flex;
    align-items: flex-end;
    justify-content: flex-start;
    padding: 1rem;
}

.image-view .right {
    grid-column: 3;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.image-view .left {
    grid-column: 1;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: flex-end;
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
    background-size: contain;
    background-repeat: no-repeat;
    height: 100%;
    width: 100%;
    background-position: center;
    transition: none;
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
    padding-top: 6rem;
    padding-bottom: 6rem;

}
}

</style>
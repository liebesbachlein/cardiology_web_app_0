<template>

<div class="poster poster2">
    
    <div class="poster-contents2">
        <div class="header1" style="background-color: transparent;">
            <h1 style="font-size: 1.75rem; font-weight: 500; color: #FFF; margin-bottom: 1rem">Курс “Диагностика, профилактика и лечение ХТЛГ” </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: #E6E6E6; margin-bottom: 1rem;">Цикл лекций, созданный совместно с Научно-исследовательским институтом кардиологии и внутренних болезней</h3>            
            <router-link to="/about">
                <div class="cover-button">Подробнее</div>
            </router-link>
        </div>
    </div>

    <div class="poster-contents2" style="mix-blend-mode: multiply; z-index: 4;">
        <div class="header1" style="background-color: #75869A;">
            <h1 style="font-size: 1.75rem; font-weight: 500; color: transparent; margin-bottom: 1rem">Курс “Диагностика, профилактика и лечение ХТЛГ” </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: transparent; margin-bottom: 1rem">Цикл лекций, созданный совместно с Научно-исследовательским институтом кардиологии и внутренних болезней</h3>            
            <router-link style="visibility:hidden;" to="/about">
                <div class="cover-button">Подробнее</div>
            </router-link>
        </div>
    </div>

</div>

</template>

<script>
export default {
    mounted() {
        this.$emit('dark')
    },
}
</script>

<style>

.poster-contents2 {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
}

@media only screen and (max-width: 768px) {

.poster2 {
    background-image: url('/covers/image-cover2-mobile.png');
    padding: 0 1rem;
}

.poster-contents2 {
    padding: 0 1rem;
}

.poster-contents2 .header1 {
    padding: 2.5rem 1.5rem;
    text-align: left;
    width: 100%;
    border-radius: 1rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {


.poster2 {
    background-image: url('/covers/image-cover2-mobile.png');
}

.poster-contents2 {
    padding: 0 1rem;
}

.poster-contents2 .header1 {
    padding: 2.5rem 1.5rem;
    text-align: left;
    width: 100%;
    border-radius: 1rem;
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
}


@media only screen and (min-width: 1024px) {


.poster2 .cover-button {
    margin-top: 2rem;
}

.poster2 {
    background-image: url('/covers/image-cover2.png');
}

.poster-contents2 {
    padding-left: 10%;
}

.poster-contents2 .header1 {
    width: 50%;
    border-radius: 1rem;
    background-color: #75869A;
    display: flex;
    text-align: left;
    padding: 2.5rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}

.header1 h1 {
    line-height: 2rem;
}

.header1 h3 {
    line-height: 1.5rem;
}
}

</style>
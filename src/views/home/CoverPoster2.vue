<template>

<div class="poster2">
    
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

</script>

<style>


@media only screen and (max-width: 768px) {


.poster-contents2 {
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75 );
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
    padding: 0 1rem;
}

.poster2 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover2-mobile.png');
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75 );
    background-size: cover;
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


    .poster-contents2 .cover-button {
        margin-top: 2rem;
    }

.poster-contents2 {
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    position: absolute;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
    padding-left: 10%;
}

.poster2 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover2.png');
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    background-size: cover;
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
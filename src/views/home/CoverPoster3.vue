<template>

<div class="poster3">
    
    <div class="poster-contents3">
        <div class="header1" style="background-color: transparent">
            <h1 style="line-height: 2.5rem; font-size: 2.5rem; font-weight: 400; color: #FFF; margin-bottom: 1rem">Измерьте свое давление </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: #2D2D2D; margin-bottom: 1rem">Ежегодно 17 мая во всем мире по инициативе Международного общества гипертонии и Всемирной антигипертензивной лиги отмечается Международный день борьбы с артериальной гипертензией</h3>            
            <router-link to="/about">
                <div class="cover-button" >Подробнее</div>
            </router-link>
        </div>
    </div>

    <div class="poster-contents3" style="mix-blend-mode: hard-light; z-index: 4;">
        <div class="header1" style="background-color: #C2C2C2;">
            <h1 style="font-size: 3rem; font-weight: 400; color: transparent; margin-bottom: 1rem">Измерьте свое давление </h1>
            <h3 style="font-size: 1rem; font-weight: 400; color: transparent; margin-bottom: 1rem">Ежегодно 17 мая во всем мире по инициативе Международного общества гипертонии и Всемирной антигипертензивной лиги отмечается Международный день борьбы с артериальной гипертензией</h3>            
            <router-link to="/about" style="visibility:hidden;">
                <div class="cover-button">Подробнее</div>
            </router-link>

        </div>
    </div>
</div>

</template>

<script>

</script>

<style>

.cover-button {
    height: 3.125rem;
    width: 11rem;
    border: 2px solid #FFF;
    background-color: #FFF;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--subheading-font);
    font-weight: 700;
    font-size: 1rem;
    color: var(--component-accent-color1);
}


.poster-contents3 {
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75);
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
    padding: 0 1rem;
}

.poster3 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover3-mobile.png');
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75);
    background-size: cover;
}

.poster-contents3 .header1 {
    max-height: 100%;
    width: 100%;
    border-radius: 16px;
    display: inline-flex;
    text-align: left;
    padding: 1rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}

@media only screen and (min-width: 1024px) {
.cover-button {
    height: 3.125rem;
    width: 14.5rem;
    border: 2px solid #DDDCDC;
    border-radius: 0.25rem;
    color: #FFF;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--subheading-font);
    font-weight: 500;
    font-size: 1.25rem;
}

.cover-button:hover {
    border: 2px solid #FFF5FB;
    color: var(--component-accent-color1);
    background-color: #FFF5FB;
}



.poster-contents3 {
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    position: absolute;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
    padding-right: 5%;
}

.poster3 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover3.png');
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    background-size: cover;
}

.poster-contents3 .header1 {
    max-height: 100%;
    width: 40%;
    border-radius: 16px;
    
    display: inline-flex;
    text-align: left;
    padding: 1rem 1.5rem;
    flex-direction: column;
    justify-content: space-between;
}
}
</style>
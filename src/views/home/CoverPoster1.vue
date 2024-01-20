<template>
<div class="poster1">
    <div class="poster-contents1">
        <div class="box">
           
            <div class="header1">
                <h1  style="line-height: 4rem; font-size: 1.25rem; color: #FFF; font-weight: 500">VI Республиканский Конгресс</h1>
                <h1 style="line-height: 4rem; font-size: 5rem; color: #FF2929; font-weight: 700">Cardio</h1>
                <h1  style="line-height: 4rem; font-size: 3.5rem; color: #5CC1E2; font-weight: 700">forum</h1>
            </div> 
            <div class="header2">
                <h3 style="font-size: 1rem; font-weight: 400; color: #FFF; margin-top: 1rem;">—  по артериальной гипертонии и кардиоваскулярной профилактике с международным участием </h3>
                <h1  style="font-size: 1.625rem; font-weight: 700; color: #FFF; margin: 1.5rem 0">14 — 15 сентября</h1>
                
                 <router-link  to="/about">
                    <div class="cover-button">Подробнее</div>
                </router-link>
            </div>
          
        </div>
    </div>
    
</div>

</template>

<script>
export default {
    props: ['is']
}

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

.poster1 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover1-mobile.png');
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75);
    background-size: cover;
    width: 100%;
}

.poster-contents1 {
    width: 100%;
    height: calc(100vw * 16 / 9 * 0.75);
    position: absolute;
    display: flex;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
}

.poster-contents1 .box {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.poster-contents1 .header1 {
    text-align: center;
    width: 100%;
}

.poster-contents1 .header2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    padding-left: 2rem;
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

.poster1 img {
    object-fit: cover;
    width: 100%;
    height: calc(100vw * 16 / 9 - 5rem - 7rem);
    z-index: 4;
}

.poster1 {
    display: flex;
    align-items: flex-start;
    background-image: url('@/assets/covers/image-cover1.png');
    width: 100%;
    height: calc(100vw * 16 / 9 - 5rem - 7rem);
    background-size: cover;
}

.poster-contents1 {
    width: 100%;
    height: calc(100vw * 16 / 9 - 5rem - 7rem);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
    flex-wrap: nowrap;
}



    .poster1 img {
        object-fit: cover;
        width: 100%;
        height: calc(100vw * 9 / 16 - 5rem - 7rem);
        z-index: 4;
    }

    .poster1 {
        display: flex;
        align-items: flex-start;
        background-image: url('@/assets/covers/image-cover1.png');
        width: 100%;
        height: calc(100vw * 9 / 16 - 5rem - 7rem);
        background-size: cover;
    }

    .poster-contents1 {
        width: 100%;
        height: calc(100vw * 9 / 16 - 5rem - 7rem);
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        z-index: 5;
        flex-wrap: nowrap;
    }



.poster-contents1 .box {
    display: inline-flex;
    justify-content: center;
}



.poster-contents1 .header1 {
    
    text-align: center;
    width: 25%;
}

.poster-contents1 .header2 {
    margin-left: 5%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 33%;
    text-align: left;
}

}

</style>
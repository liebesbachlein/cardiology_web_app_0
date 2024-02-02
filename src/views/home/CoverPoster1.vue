<template>
<div class="poster poster1">
        <div class="box">
           
            <div class="header1">
                <h1 id="hd2" style="font-size: 3rem; font-weight: 700; color: var(--component-accent-color1)">Академия</h1>
                <h1 id="hd3" style="font-size: 2.5rem; font-weight: 700; color: #FFF">Kардио-терапевта</h1>
            </div> 
            <div class="header2">
                <h1 style="font-size: 2rem; font-weight: 700; color: #FFF">Шымкент</h1>
                <h1 style="margin: 2rem 0; font-size: 1.5rem; font-weight: 600; color: #FFF">8 — 9 февраля</h1>
                
                 <div  >
                    <a class="cover-button" tag="div" href="https://www.instagram.com/p/C2INfZlCciy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==">Подробнее</a>
                 </div>
            </div>    
        </div>
    
</div>

</template>

<script>
export default {
    mounted() {
        this.$emit('light')
    },
}

</script>

<style>


.cover-button {
    height: 3.125rem;
    width: 11rem;
    border-radius: 0.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: var(--plain-text-font);
    font-weight: 500;
    font-size: 1rem;
    color: var(--component-accent-color1);
    background-color: #FFF;
}

.poster {
    width: 100%;
    height: 100%;
    background-size: cover;
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: nowrap;
    padding: 0 1rem;
}

@media only screen and (max-width: 768px) {



.poster1 {
    background-image: url('/covers/shymkent-cover1-mobile.jpg');
}

.poster1 .box {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.poster2 .header1 {
    text-align: center;
    width: 100%;
}



.poster2 .header2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    padding: 0 2rem;
    justify-content: center;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: rgba(68, 75, 155, 0.5);
}
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {



.poster1 {
    background-image: url('/covers/shymkent-cover1-mobile.jpg');
}

.poster1 .box {
    display: flex;
    flex-direction: column;
    width: 100%;
}

.poster2 .header1 {
    text-align: center;
    width: 100%;
}

.poster2 .header2 {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    text-align: left;
    padding: 0 2rem;

    justify-content: center;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: rgba(68, 75, 155, 0.5);
}
}

@media only screen and (min-width: 1024px) {



.poster1 {
    background-image: url('/covers/shymkent-cover1.jpg');
}

.poster1 .box {
    display: inline-flex;
    justify-content: center;
    align-items: flex-start;
}


.poster1 .header1 {
    display: block;
    text-align: center;
    width: 50%;

}

.poster1 .header2 {
    margin-top: 1.5rem;
    margin-left: 2rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    width: 40%;
    text-align: left;

    justify-content: center;
    height: 100%;
    padding: 0.5rem 1rem;
    border-radius: 0.5rem;
    background-color: rgba(68, 75, 155, 0.5);

}

}

</style>
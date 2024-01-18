<template>
    <div class="stats-img">
    <img src="@/assets/heart.svg">
</div>
    <div class="partners-header-cont">
            <div class="header-top">
                <h1>Глобальная статистика</h1>
            </div>
        </div>
    <div class="stats">



<div class="stats-item">
    <div class="stats-header">
        <h1>1 МЛРД</h1>
    </div>
    <div class="stats-bottom">
        <p>— людей на земле страдает от гипертонии</p>
    </div>
</div>

<div class="stats-item">
    <div class="stats-header">
        <h1>9,4 МЛН</h1>
    </div>
    <div class="stats-bottom">
        <p>— случаев смерти в мире ежегодно из-за осложнения гипертонии</p>
    </div>
</div>

<div class="stats-item">
    <div class="stats-header">
        <h1>40%</h1>
    </div>
    <div class="stats-bottom">
        <p>— которой среди взрослого населения</p>
    </div>
</div>

<div class="stats-item">
    <div class="stats-header">
        <h1>45%</h1>
    </div>
    <div class="stats-bottom">
        <p>— смертных случаев приходится на долю гипертонии</p>
    </div>
</div>
    </div>


</template>

<style>

.stats-img {
    width: 50%;
    height: 50%;
    position: absolute;
    z-index: -5;
    left: 0;
}

.stats-img img {
    object-fit: contain;
}


.stats {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 5rem 0;
}

.stats-item {
    width: 20%;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
    border-radius: 0.5rem;
    height: 16.4rem;
    padding: 2rem 1rem 1rem 1rem;
}

/*
.stats-item:hover {
    width: 20%;
    background-color: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
    border-radius: 0.5rem;
    height: 16.4rem;
    padding: 2rem 1rem 1rem 1rem;
    border: 1px solid var(--component-accent-color2);
}*/

.stats-item h1 {
    font-size: 2rem;
    color: var(--component-accent-color2);
    font-weight: 700;
}

.stats-item p {
    font-size: 1rem;
    color: #6C6C6C;
    font-weight: 400;
}

.stats-header {
    margin-bottom: 1rem;
}

</style>
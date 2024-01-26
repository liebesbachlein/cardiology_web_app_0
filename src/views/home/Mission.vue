<template>
    <div class="mission">
        <HomeHeader title="Наша миссия"/>
        <div class="mission-text">
            <h3>
                Содействие и усиление профилактической направленности здравоохранения 
                в области кардиологии с акцентом на артериальную гипертензию, 
                междисциплинарность исследовательских направлений и задач, 
                а также сочетание научной и научно-практической деятельности.
            </h3>
        </div>
    </div>

</template>

<script>
import HomeHeader from './HomeHeader.vue'

export default {
    components: {HomeHeader}
}</script>

<style>


@media only screen and (max-width: 768px) {
.mission {
    display: grid;
    justify-content: center;
    margin-top: 4.5rem;
    margin-bottom: 100px;
}

.mission-text {
    grid-column: 1;
    grid-row: 2;
    padding: 1.5rem 1rem 3rem 1rem;
}

.mission-text h3 {
    font-weight: 400;
    font-style: italic;
    text-align: center;
    font-size: 1rem;
}
}

@media only screen and (min-width: 1024px) {
.mission {
    display: grid;
    justify-content: center;
    margin-top: 80px;
    margin-bottom: 100px;
}

.mission-text {
    grid-column: 1;
    grid-row: 2;
    padding: 40px;
}

.mission-text h3 {
    font-weight: 400;
    font-style: italic;
    text-align: center;
}
}
</style>
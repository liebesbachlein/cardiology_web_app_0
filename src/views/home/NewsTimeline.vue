<template>
    <div class="newstimeline">
        <div class="header-box">
            <div class="header">
                <h1>Предстоящие события</h1>
            </div>
        </div>
        <MonthBlock monthName="Январь 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniRight :news="news[0]"/>
        </div>

        <MonthBlock monthName="Февраль 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniLeft :news="news[1]"/>
            <NewsMiniRight :news="news[2]"/>
        </div>

        <MonthBlock monthName="Март 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniLeft :news="news[3]"/>
        </div>
    </div>

</template>

<script>
import MonthBlock from './MonthBlock.vue';
import NewsMiniRight from './NewsMiniRight.vue';
import NewsMiniLeft from './NewsMiniLeft.vue';

export default {
    components: {MonthBlock, NewsMiniRight, NewsMiniLeft},
    setup() {
        const news = [
            {date: '15 января', 
            title: 'Региональная Кардио-Школа', 
            city: 'Павлодар', 
            details: 'Европейский Конгресс Кардиологов 2023',
            format: 'ОФФЛАЙН',
            url: "/events/event1.png"}, 

            {date: '17 февраля', 
            title: 'Образовательный Проект', 
            city: 'Алматы', 
            details: 'Клинические разборы пациентов с СД и ССЗ на основе рекомендаций ЕОК-23',
            format: 'ОФФЛАЙН',
            url: '/events/event2.png'}, 

            {date: '25 февраля', 
            title: 'Образовательный Проект', 
            city: 'Туркестан', 
            details: 'Простые и удобные инструменты по выбору оптимальной терапии вашим пациентам',
            format: 'ОФФЛАЙН',
            url: '/events/event1.png'}, 
            
            {date: '3 марта', 
            title: 'CardioForum', 
            city: 'Алматы', 
            details: 'ПVI Конгресс по артериальной гипертонии и кардиоваскулярной профилактике с международным участием',
            format: 'ОФФЛАЙН',
            url: '/events/event2.png'}, 
    ]

    return {news}
    }
}

</script>

<style>

.newstimeline {
    display: block;
    width: 100%;
}

.newstimeline .header-box {
    display: flex;
    justify-content: center;
}

.newstimeline .header {
    display: inline-block;
    text-align: center;
    padding: 12px 12px 60px 12px;
    border-top: 2px solid var(--component-accent-color1);
}

.header h1 {
    font-family: var(--tenor-font);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 400;
    color: #2D2D2D;
    font-style: normal;
}

.month-news {
    margin: 2.5rem 0;
}


</style>
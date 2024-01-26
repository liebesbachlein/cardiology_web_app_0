<template>
    <div class="newstimeline">
        <HomeHeaderSinus title="Предстоящие события"/>
        <MonthBlock monthName="Январь 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniRight :news="news[0]"/>
        </div>

        <MonthBlock monthName="Февраль 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniRight :news="news[1]"/>
            <NewsMiniRight :news="news[2]"/>
        </div>

        <MonthBlock monthName="Март 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniRight :news="news[3]"/>
        </div>

        <MonthBlock monthName="Апрель 2024"></MonthBlock>
        <div class="month-news">
            <NewsMiniRight :news="news[0]"/>
        </div>
    </div>

</template>

<script>
import MonthBlock from './MonthBlock.vue';
import NewsMiniRight from './NewsMiniRight.vue';
import NewsMiniLeft from './NewsMiniLeft.vue';
import HomeHeaderSinus from './HomeHeaderSinus.vue'

export default {
    components: {MonthBlock, NewsMiniRight, NewsMiniLeft, HomeHeaderSinus},
    setup() {
        const news = [
            {date: '15 января', 
            title: 'Региональная Кардио-Школа', 
            city: 'Павлодар', 
            details: 'Европейский Конгресс Кардиологов 2023. Клинические разборы пациентов с СД и ССЗ на основе рекомендаций ЕОК-23. Приглашаем всех в Региональную школу',
            format: 'oффлайн',
            url: "/events/event1.png"}, 

            {date: '17 февраля', 
            title: 'Образовательный Проект', 
            city: 'Алматы', 
            details: 'Клинические разборы пациентов с СД и ССЗ на основе рекомендаций ЕОК-23',
            format: 'oффлайн',
            url: '/events/event2.png'}, 

            {date: '25 февраля', 
            title: 'Образовательный Проект', 
            city: 'Туркестан', 
            details: 'Простые и удобные инструменты по выбору оптимальной терапии вашим пациентам',
            format: 'oффлайн',
            url: '/events/event1.png'}, 
            
            {date: '3 марта', 
            title: 'CardioForum', 
            city: 'Алматы', 
            details: 'ПVI Конгресс по артериальной гипертонии и кардиоваскулярной профилактике с международным участием',
            format: 'oффлайн',
            url: '/events/event2.png'}, 
    ]

    return {news}
    }
}

</script>

<style>
@media only screen and (max-width: 768px) {
.newstimeline {
    display: block;
    width: 100%;
    padding-top: 3rem;
}

.month-news {
    margin: 0;
}

}

@media only screen and (min-width: 1024px) {
.newstimeline {
    display: block;
    width: 100%;
}

.month-news {
    margin: 0 0;
}

}
</style>
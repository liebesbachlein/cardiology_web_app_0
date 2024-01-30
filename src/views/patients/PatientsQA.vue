<template>
    <div class="pt-qa">
        <div class="subpage-title">
            Частые вопросы
        </div>

        <div class="pt-qa-menu">
            <div v-for="pt in ptQA" class="pt-qa-menu-item" @click="pull(pt.id)" :id="pt.id" :key="pt.id">
                <div class="menu-item-container">
                    <div class="chevron-right-col1"/>
                    <div class="copy-address-box"><div class="copy-address-name">{{ pt.title }}</div></div>
                </div>
                <Transition name="pop-menu" mode="in-out">
                <p class="menu-item-text" :id="pt.id + '-text'">{{ pt.text }}</p>
                </Transition>
            </div>

        </div>
    </div>
</template>

<script>

export default {
    data: () => {
        return {
            ptQA: [
                {
                    id:'q1',
                    title: 'Через какое время можно проводить повторное измерение артериального давления?',
                    text: 'Повторное измерение артериального давления проводится по мере необходимости. Желательно соблюдать интервал не менее 1-2 минут между измерениями. Если проводиться 2-3 повторных измерений, то регистрируется средняя величина этих измерений.'
                }, 
                {
                    id:'q2',
                    title: 'Как предупредить возникновение гипертонических кризов и резкого повышения артериального давления?',
                    text: 'Причиной возникновения гипертонического криза при артериальной гипертензии чаще всего является нерегулярная медикаментозная терапия, самостоятельная отмена препарата и уменьшение его дозировки, избыточное потребление соленой пищи. Профилактикой гипертонических кризов, является контроль артериального давления и постоянный прием препаратов, назначенных врачом.'
                }, 
                {
                    id:'q3',
                    title: 'Через какое время можно проводить повторное измерение артериального давления?',
                    text: 'Повторное измерение артериального давления проводится по мере необходимости. Желательно соблюдать интервал не менее 1-2 минут между измерениями. Если проводиться 2-3 повторных измерений, то регистрируется средняя величина этих измерений.'
                }, 
                {
                    id:'q4',
                    title: 'Как предупредить возникновение гипертонических кризов и резкого повышения артериального давления?',
                    text: 'Причиной возникновения гипертонического криза при артериальной гипертензии чаще всего является нерегулярная медикаментозная терапия, самостоятельная отмена препарата и уменьшение его дозировки, избыточное потребление соленой пищи. Профилактикой гипертонических кризов, является контроль артериального давления и постоянный прием препаратов, назначенных врачом.'
                }, 
                {
                    id:'q5',
                    title: 'Через какое время можно проводить повторное измерение артериального давления?',
                    text: 'Повторное измерение артериального давления проводится по мере необходимости. Желательно соблюдать интервал не менее 1-2 минут между измерениями. Если проводиться 2-3 повторных измерений, то регистрируется средняя величина этих измерений.'
                }, 
                {
                    id:'q6',
                    title: 'Как предупредить возникновение гипертонических кризов и резкого повышения артериального давления?',
                    text: 'Причиной возникновения гипертонического криза при артериальной гипертензии чаще всего является нерегулярная медикаментозная терапия, самостоятельная отмена препарата и уменьшение его дозировки, избыточное потребление соленой пищи. Профилактикой гипертонических кризов, является контроль артериального давления и постоянный прием препаратов, назначенных врачом.'
                }, 
            ]
        }
    },
    methods: {

        pull(id) {
            const item = document.getElementById(id)
            if(item) {
                if (item.className.endsWith('active')) {
                    item.className = 'pt-qa-menu-item'
                    document.getElementById(id + '-text').style.display = 'none'
                } else {
                    item.className = 'pt-qa-menu-item-active'
                    document.getElementById(id + '-text').style.display = 'block'
                }
            }
        }, 
             
    }
}

</script>

<style>

.pt-qa * {
    transition: all 0.2s ease-out;
}

.pt-qa .chevron-right-col1 {
    margin-right: 0.5rem;
}

.pt-qa-menu-item-active .chevron-right-col1 {
    transform: rotate(90deg);
}

.copy-address-box  {
    display: inline-flex;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #e4f0ff;
    padding: 0.25rem 0.5rem;
    max-width: auto;
}

.pt-qa .copy-address-name {
    display: inline-block;
    height: 100%;
    text-wrap: wrap;
    font-size: 1rem;
}

.pt-qa-menu-item .copy-address-box {
    background-color: #e4f0ff;
}

.pt-qa-menu-item .copy-address-name {
    color: var(--component-accent-color2);
}


.pt-qa-menu-item .copy-address-box:hover {
    background-color: #d7e7fa;
}

.pt-qa-menu-item-active .copy-address-box {
    background-color: #f16676;
}

.pt-qa-menu-item-active .copy-address-box .copy-address-name {
    color: #FFF
}

.pt-qa-menu-item, .pt-qa-menu-item-active {
    padding: 0.5rem 0;
    width: 100%;
    cursor: pointer;
}

.menu-item-container {
    display: flex;
    align-items: center;
    width: 100%;
    flex-wrap: nowrap;
}

.pt-qa .menu-item-text {
    display: none;
    margin: 1rem 0 0.5rem 1.75rem;
    
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {
    .pt-qa .chevron-right-col1 {
    margin-right: 1rem;
}
}

@media only screen and (min-width: 1024px) {

    .pt-qa .chevron-right-col1 {
    margin-right: 1rem;
}
}




</style>
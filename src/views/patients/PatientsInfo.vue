<template>
    <div class="pt-info">
        <div class="subpage-title">
            Полезная информация
        </div>

        <div  class="links-menu-box">
            <div v-for="pt in ptInfo" class="link-item">
                <a :href="'#' + pt.id" tag="div" class="address-box">
                    <div class="address-name">
                        {{ pt.title }}
                    </div>
                </a>
            </div>
            
        </div>
        
        <div class="pt-info-content">
            <div v-for="pt in ptInfo" :key="pt.id" class="pt-info-item">
                <div class="pt-info-header" :id="pt.id">
                    {{ pt.title }}
                </div>
                <div class="pt-info-text">
                    {{ pt.text }}
                </div>
                <div  v-if="pt.iframe.length" class="pt-info-video" v-html="pt.iframe">
                </div>
            </div>
        </div>



    </div>
</template>

<script>

import { ref} from 'vue';


export default {
    data: () => {
        return {
            ptInfo: [
                {
                    id: 'link1',
                    title: "Как проявляется стенокардия?",
                    iframe: "",
                    text: "Стенокардия – это своеобразный сигнал сердца о недостаточном кровоснабжении сердечной мышцы. Не всегда боль в сердце может проявляться за грудиной, симптомы стенокардии могут быть разными. Не игнорируйте свои ощущения и дискомфорт. Проконсультируйтесь с врачом, если заметили что-то подобное у себя: тяжесть в груди, усталость, затруднение дыхания, боль в руке, дискомфорт в области желудка, боль в шее. Стенокардию лучше держать под контролем, чем лечить ее осложнения, такие как инфаркт миокарда, сердечная недостаточность и так далее."

                },
                {
                    id: 'link2',
                    title: "Ошибки измерения артериального давления",
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/nkY9txjiNQg?si=Kk89rySJ584Ld69W" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    text: "Многие пациенты допускают ошибки при измерении артериального давления. Что влияет на точность результатов измерений? Ознакомьтесь, чтобы не допустить искажения Ваших результатов."

                },

                {
                    id: 'link3',
                    title: "Правила измерения пульса",
                    iframe: '<iframe width="560" height="315" src="https://www.youtube.com/embed/6RpS8ZgSuVU?si=tqKHg4SDCQ6MJb1w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>',
                    text: "По изменению пульса можно предположить о состоянии сердца и организма в целом. Просмотрев видео, Вы узнаете, как правильно измерить пульс самостоятельно и с помощью пульсометра."

                },

            ]
        }
    },
}


</script>

<style>

.pt-info {
    width: 100%;
    display: flex;
    flex-direction: column;
}

.pt-info-item {
    display: flex;
    flex-direction: column;
    margin-bottom: 2rem;
}

.pt-info-header {
    font-size: 1.5rem;
    margin-bottom: 1rem;
}

.pt-info-text {
    font-size: 1rem;
    width: 100%;
}

.pt-info-video {
    text-align: center;
    margin-top: 1rem;
}

.links-menu-box {
    padding: 0 0 2rem 0;
}

.links-menu-box .address-box {
    margin: 0.5rem 0;
    max-width: fit-content;
}

.links-menu-box .address-box:hover {
    background-color: #f16676;
}

.links-menu-box .address-box:hover .address-name {
    color: #FFF
}

</style>
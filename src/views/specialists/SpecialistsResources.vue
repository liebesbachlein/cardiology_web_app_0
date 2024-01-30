<template>
    <div class="specialists-resources">
        <div class="subpage-title">
            Ресурсы
        </div>

        <div  class="links-menu-box">
            <div class="link-item">
                <a href="#s1"><AddressBox info="Файлы протоколов для скачивания" /></a>
            </div>
            <div class="link-item">
                <a href="#s2"><AddressBox info="Полезные ссылки" /></a>
            </div>
        </div>

        <div class="pt-info-item">
            <div class="pt-info-header" id="s1">
                Файлы протоколов для скачивания
                <img src="@/assets/pin.svg">
            </div>
            <div class="pt-info-text">
                <p>
                    Уважаемые коллеги, рады представить вам новейшие рекомендации по измерению артериального давления у ваших пациентов, разработанные Европейским обществом гипертонии. Здесь вы найдёте файлы для скачивания на русском и казахском языках:
                </p>
                <div  class="file-download-box">
                    <div v-for="file in files" :key="file.id">
                        <div class="file-link-box">
                            <a :href="'sp_resources/' + file.url" v-text="file.text" @click.prevent="downloadItem(file.url, file.label)"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        <div class="pt-info-item">
            <div class="pt-info-header" id="s2">
                Полезные ссылки
                <img src="@/assets/pin.svg">
            </div>
            <div class="pt-info-text">

                <div class="links-box">
                    <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
                    <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
                    <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
                    <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import Axios from 'axios'
import AddressBox from '../home/AddressBox.vue';

export default {
    components: {AddressBox},
    mounted() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => { 
            anchor.addEventListener('click', function (e) { 
                e.preventDefault(); 
                const targetElement =  
                      document.querySelector(this.getAttribute('href')); 
                window.scrollTo({ 
                    top: targetElement.offsetTop, 
                    behavior: 'smooth' 
                }); 
            }); 
        }); 
    },
    setup() {
        const files = [
        {
            "id": 1,
            "text": "Консенсус: «Рекомендации Европейского общества по гипертонии для офисного и внеофисного измерения артериального давления» (RU)",
            "label": "consensus_ru.pdf", 
            "url": "/sp_resources/consensus_ru.pdf"
        }, 

        {
            "id": 2,
            "text": "Консенсус: «Рекомендации Европейского общества по гипертонии для офисного и внеофисного измерения артериального давления» (RU)",
            "label": "consensus_ru.pdf", 
            "url": "/sp_resources/consensus_ru.pdf"
        }
    ];
        
        const downloadItem = (url, label) => {
            Axios.get(url, { responseType: 'blob' })
                .then(response => {
                const blob = new Blob([response.data], { type: 'application/pdf' });
                const link = document.createElement('a');
                link.href = URL.createObjectURL(blob);
                link.download = label;
                link.click();
                URL.revokeObjectURL(link.href);
            }).catch(console.error);
        };
        return { files, downloadItem };
    }
}

</script>

<style>

.file-download-box a {
    font-size: 1.0625rem;
    font-family: var(--plain-text-font);
    font-weight: 400;
    color: #0098EE;
    text-decoration: underline;
}

.file-link-box {
    display: block;
    padding: 1.5rem 1.5rem 0 0;
}

.links-box a {
    font-size: 1.0625rem;
    font-family: var(--plain-text-font);
    font-weight: 400;
    color: #0098EE;
    text-decoration: underline;
}

</style>


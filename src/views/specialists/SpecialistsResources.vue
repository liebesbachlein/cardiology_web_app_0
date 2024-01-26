<template>
    <div class="specialists-resources">
        <div class="subpage-title">
            <h1>Ресурсы</h1>
        </div>

        <p>
            Уважаемые коллеги, рады представить вам новейшие рекомендации по измерению артериального давления у ваших пациентов, разработанные Европейским обществом гипертонии. Здесь вы найдёте файлы для скачивания на русском и казахском языках:
        </p>

        <div class="file-download-box">
            <a></a>
        </div>

        <div  class="file-download-box">
            <div v-if="error">{{ error }}</div>
            <div v-else-if="files.length > 1">
                <div v-for="file in files" :key="file.id">
                    <div v-if="file.id">
                        <div class="file-link-box">
                            <a :href="'sp_resources/' + file.url" v-text="file.text" @click.prevent="downloadItem(file.url, file.label)"/>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else><Loader/></div>
        </div>

        <ChevronHeader text="Полезные ссылки"/>

        <div class="links-box">
            <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
            <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
            <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
            <li><a href="http://scardio.ru/">Российское кардиологическое общество</a></li>
        </div>
    </div>
</template>

<script>

import { ref } from 'vue'
import Axios from 'axios'
import ChevronHeader from '@/components/ChevronHeader.vue';
import { loadSpResources } from '@/firebase/config';
import Loader from '@/components/Loader.vue';

export default {
    components: {ChevronHeader, Loader},
    setup() {
        const files = ref(['']);
        const error = ref('');
        const load = async () => {
            try {
                files.value = await loadSpResources();
                /*let data = await loadSpResources();
                if (!data.ok) {
                    throw Error('no available data');
                }
                files.value = await data.json();*/
                console.log(files.value);
            }
            catch (err) {
                error.value = err.message;
                console.log(error.value);
            }
        };
        load();
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
        return { files, error, downloadItem };
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


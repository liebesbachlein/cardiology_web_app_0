<template  >
    <div v-if="id1 != null && id2 != null">
        <ImageView :url="url" :id1="id1" :id2="id2" :limit="limit"
                            @closeImageView="closeImageView()"
                            @leftIndex="leftIndex()"
                            @rightIndex="rightIndex()"
                            />
    </div>
    
    <div class="gallery">
        <div class="subpage-title">
            <h1>Галерея</h1>
        </div>

        <div v-for="(output, ID1) in outputs" class="box-box" :key="ID1">
            <div class="red-line-gallery"></div>
            <div class="gallery-header"><h3>{{ output.name }}</h3></div>
            <div class="gallery-box">
                <div v-for="(URL, ID2) in output.data" class="gallery-flexbox-item" :key="ID2">
                    <div class="gallery-aspect-box">
                        <div class="gallery-strechy-box">
                            <div :style="{backgroundImage: URL}" @click="showImageView(ID1, ID2, URL)"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        

    </div>
        


</template>

<script>
import ImageView from './ImageView.vue'

export default {
    components: {ImageView},
    data: function() {
        return {
            data: [
            ['event1', 11, "Секреты женского сердца — 2020. Здоровье, стиль и долголетие женщины"], 
            ['event2', 17, "Республиканская конференция по антиагрегантной и антикоагулянтной терапии с международным участием (28 ноября 2019 года)"], 
            /*['event3', 16, "II Республиканский Конгресс по артериальной гипертонии и кардиоваскулярной профилактике с международным участием — «Кардиоваскулярная профилактика 2019: От клинического случая к рекомендациям» (10-11 октября 2019 года)"]*/
        ],

        outputs: [], 
        showParatemers: [],
        id1: null,
        id2: null,
        url: null
        }
    },
    computed: {
        limit: function() {
            if (this.id1 != null) {
                return this.outputs[this.id1].data.length
            } else {
                return ''
            }
        }
    },
    mounted() {
        for (let i = 0; i < this.data.length; i++) {
            let arr = []
            let arrShow = []
            for (let j = 1; j <= this.data[i][1]; j++ ) {
                arr.push('url(\"/gallery/' + this.data[i][0] + '/' + String(j) + '.jpg\")')
                arrShow.push(1)
            }
            this.outputs.push({"data": arr, "name": this.data[i][2]})
            this.showParatemers.push(arrShow)
        }

        document.addEventListener('keydown', function (event) {
        if (event.key === 'ArrowLeft') {
            if(this.id2 == 0) {
                this.id2 = this.showParatemers[this.id1].length - 1   
            } else {
                this.id2 = this.id2 - 1
            }
            this.url = this.outputs[this.id1].data[this.id2]
        } else if (event.key === 'ArrowRight') {
            if(this.id2 == this.showParatemers[this.id1].length - 1) {
                this.id2 = 0
            } else {
                this.id2 = this.id2 + 1
            }
            this.url = this.outputs[this.id1].data[this.id2]
        } else if (event.key === 'Escape') {
            this.id1 = null
            this.id2 = null
            this.url = null
        }
    })
    }, 
    methods: {
        showImageView(id1, id2, url) {
            this.id1 = id1
            this.id2 = id2
            this.url = url
        }, 
        closeImageView() {
            this.id1 = null
            this.id2 = null
            this.url = null
        }, 
        leftIndex() {
            if(this.id2 == 0) {
                this.id2 = this.showParatemers[this.id1].length - 1   
            } else {
                this.id2 = this.id2 - 1
            }
            this.url = this.outputs[this.id1].data[this.id2]
        }, 
        rightIndex() {
            if(this.id2 == this.showParatemers[this.id1].length - 1) {
                this.id2 = 0
            } else {
                this.id2 = this.id2 + 1
            }
            this.url = this.outputs[this.id1].data[this.id2]
        },
    }
}

</script>

<style>
@media only screen and (max-width: 768px) {
.gallery .box-box {
    margin-bottom: 2rem;
    position: relative
}

.gallery-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 0;
}

.gallery-flexbox-item {
    width: 50%;
}


.gallery-aspect-box {
    width: 100%;
    padding-top: 75%;
    position: relative;
}

.gallery-strechy-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0.25rem;
}

.gallery-strechy-box>div {
    width: 100%;
    height: 100%;
    background-size: cover;
    cursor: pointer;
}

.gallery-header {
    padding: 2rem 0.5rem 1rem 0.5rem;
}

.gallery-header h3 {
    color: var(--text-accent-color2);
    font-weight: 500;
    font-size: 1.125rem;
}

.red-line-gallery {
    display: block;
    width: 33%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}
}

@media only screen and (min-width: 1024px) {
.gallery .box-box {
    margin-bottom: 2rem;
    position: relative
}

.gallery-box {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    row-gap: 0;
}

.gallery-flexbox-item {
    width: 33.3%;
}


.gallery-aspect-box {
    width: 100%;
    padding-top: 75%;
    position: relative;
}

.gallery-strechy-box {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    padding: 0.5rem;
}

.gallery-strechy-box>div {
    width: 100%;
    height: 100%;
    background-size: cover;
    cursor: pointer;
}

.gallery-header {
    padding: 2rem 0.5rem 1rem 0.5rem;
}

.gallery-header h3 {
    color: var(--text-accent-color2);
    font-weight: 500;
    font-size: 1.125rem;
}

.red-line-gallery {
    display: block;
    width: 33%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}
}
</style>
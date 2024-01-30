<template>
    
    <div class="newsmini-right">
        
        <div class="news-shadow-box">
            <div v-if="!mobile" class="newsmini-img">
                <img :src="news.imgUrl">
            </div>
            
            <div class="news-box">
            
                

                <div v-if="!mobile" class="newsmini-upper">
                    <DateBox :date1="news.date1" :date2="news.date2"  :month="news.month"/>
                    <AddressBox :address="news.address"/>
                </div>  

                <DateBox v-if="mobile"  id="mobile1" :date1="news.date1" :date2="news.date2"  :month="news.month"/>
                <AddressBox v-if="mobile" id="mobile2" :address="news.address"/>
        
                <div class="news-title">
                    <router-link :to="news.url">
                        {{ news.title }}
                    </router-link>
                </div>
    
                <div class="news-detail">{{ news.details }}</div>  
            </div>
        </div>
        <LineCircle class="newsmini-line"/>
    </div>
    
    </template>
    
    <script>
    import LineCircle from './LineCircle.vue';
    import ChevronRight from '@/components/ChevronRight.vue';
    import DateBox from './DateBox.vue';
    import AddressBox from './AddressBox.vue';
    
    export default {
        props: ['news'],
        components: {LineCircle, ChevronRight, DateBox, AddressBox},
        data: function() {
            return {
                mobile: null
            }
        },
        mounted() {
            
            this.mobile = window.matchMedia("(max-width: 1023px)").matches

            addEventListener("resize", (event) => {
                this.mobile = window.matchMedia("(max-width: 1023px)").matches
            });
        },
    }
    
    </script>
    
    <style>

    
@media only screen and (max-width: 768px) {
    .newsmini-right .newsmini-img {
        display: none;
    }
    
    .newsmini-img img {
        display: none;
    }
    
    .newsmini-upper {
        display: none;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    #mobile1 {
        grid-column: 1;
        grid-row: 1;
        margin-bottom: 1rem;

    }
    #mobile2 {
        grid-column: 1;
        grid-row: 4;
        margin-top: 1rem;
    }

    
    .newsmini-right {
        width: 100%;
    }

    .news-shadow-box {
        width: 100%;
        padding: 1rem;
    }
    
    .newsmini-right .newsmini-line {
        width: 0;
        display: none;
    }
    
    .news-box {
        display: grid;
        background-color: #FFF;
        box-shadow: -1px 1px 4px 0px rgba(212, 211, 211, 0.5);
        border-radius: 0.25rem;
        width: 100%;
        padding: 1rem;
    }
    
    
    .newsmini-right .news-detail {
        display: inline;
        font-size: 1rem;
        font-weight: 400;
        grid-column: 1;
        grid-row: 3;
    }
    
    .news-title {
        margin-bottom: 0.5rem;
        grid-column: 1;
        grid-row: 2;
    }
    
    .news-title a {
        color: var(--component-accent-color2);
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        transition: all 0.1s ease;
    }
}

    @media only screen and (max-width: 1023px)  and (min-width: 769px){    
        
        .newsmini-right .newsmini-img {
        display: none;
    }
    
    .newsmini-img img {
        display: none;
    }
    
    .newsmini-upper {
        display: none;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }

    #mobile1 {
        grid-column: 1;
        grid-row: 1;
        margin-bottom: 1rem;

    }
    #mobile2 {
        grid-column: 1;
        grid-row: 4;
        margin-top: 1rem;
    }

    
    .newsmini-right {
        width: 100%;
    }

    .news-shadow-box {
        width: 100%;
        padding: 1rem;
    }
    
    .newsmini-right .newsmini-line {
        width: 0;
        display: none;
    }
    
    .news-box {
        display: grid;
        background-color: #FFF;
        box-shadow: -1px 1px 4px 0px rgba(212, 211, 211, 0.5);
        border-radius: 0.25rem;
        width: 100%;
        padding: 1rem;
    }
    
    
    .newsmini-right .news-detail {
        display: inline;
        font-size: 1rem;
        font-weight: 400;
        grid-column: 1;
        grid-row: 3;
    }
    
    .news-title {
        margin-bottom: 0.5rem;
        grid-column: 1;
        grid-row: 2;
    }
    
    .news-title a {
        color: var(--component-accent-color2);
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        transition: all 0.1s ease;
    }
    }
    
    @media only screen and (min-width: 1024px) {
    
        #mobile1 {
            display: none;
        }

        #mobile2 {
            display: none;
        }

    .newsmini-img {
        max-height: 15rem;
        height: 100%;
        background-size: contain;
        display: inline-flex;
        justify-content: flex-end;
        align-items: center;
        box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
        margin-right: 2rem;
        box-sizing: content-box;
    }
    
    .newsmini-img img {
        max-height: calc(15rem);
        width: auto;
        object-fit: cover;
    }


    .newsmini-upper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .newsmini-right {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }
    
    .news-shadow-box {
        max-width: 80%;
        width: 75%; 
        display: flex;
        flex-wrap: nowrap;
        margin: 1rem 0 1rem 2rem;
    }
    
    .newsmini-right .newsmini-line {
        width: 12rem;
    }
    
    .news-box {
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
        border-radius: 0 1rem 1rem 0;
        width: 80%;
        padding: 1rem;
    }

    .news-box:hover {
        box-shadow: -2px 2px 10px 0px rgba(171, 183, 208, 0.6);
    }
    

    .newsmini-right .news-detail {
        display: inline;
        font-size: 1rem;
        font-weight: 400;
    }

    .news-title {
        margin-bottom: 0.5rem;
    }
    
    .news-title a {
        color: var(--component-accent-color2);
        font-size: 1.125rem;
        font-weight: 500;
        margin-bottom: 0.5rem;
        transition: all 0.1s ease;
    }

    .news-title a:hover {
        color: var(--component-accent-color1);
    }
    
    }
    </style>
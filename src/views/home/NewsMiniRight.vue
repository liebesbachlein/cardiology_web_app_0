<template>
    
    <div class="newsmini-right">
        
        <div class="news-shadow-box">
            <div v-if="!mobile" class="newsmini-img">
                <img :src="news.imgUrl">
            </div>
            
            <div class="news-box">
            
                <div class="newsmini-upper">
                    <DateBox :date1="news.date1" :date2="news.date2"  :month="news.month"/>
                    <AddressBox :address="news.address"/>
                </div>  
        
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
            this.mobile = window.matchMedia("(max-width: 768px)").matches
        },
    }
    
    </script>
    
    <style>
    @media only screen and (max-width: 768px) {
    .newsmini-right .newsmini-img {
        height: 100%;
        width: auto;
        object-fit: cover;
        grid-column: 1;
        grid-row: 1;
        display: hidden;
        justify-content: flex-end;
        align-items: center;
    }
    
    .newsmini-img img {
        max-height: 10rem;
        width: auto;
        object-fit: contain;
        display: hidden;
    }
    
    .news-title-city {
        margin-bottom: 1rem;
    }
    
    .newsmini-upper {
        display: grid;
        grid-template-columns: auto auto;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .news-format {
        grid-column: 2;
        grid-row: 1;
    }
    
    .news-format h4 {
        font-size: 0.825rem;
        text-transform: uppercase;
        color: #454343;
        text-decoration: none;
        font-weight: 600;
    }
    
    .newsmini-right {
        display: grid;
        grid-template-columns: calc(100vw - 52px) 52px;
        justify-content: space-between;
        align-items: flex-start;
    }
    
    .newsmini-right .newsmini-line {
        grid-column: 2;
        grid-row: 1;
    }
    
    .newsmini-right .news-box {
        grid-column: 1;
        grid-row: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 1rem;
    }
    
    .newsmini-right .news-date {
        display: grid;
        width: 12.5rem;
        height: 2.5rem;
        background-color: var(--component-accent-color1);
        border-radius: 0 0.75rem 0.75rem 0;
        padding-left: 1.5rem;
        justify-content: left;
        align-items: center;
        grid-column: 1;
    }
    
    .newsmini-right .news-date h4 {
        grid-row: 1;
        grid-column: 1;
        color: #FFF;
    }
    
    .newsmini-right .news-chev-details {
        display: flex;
        flex-wrap: nowrap;
        align-items: center;
    }
    
    .newsmini-right .news-city h4 {
        font-style: italic;
        line-height: 1rem;
    }
    .news-chev-details h4 {
        color: #858585;
    }
    
    .newsmini-right .news-detail {
        margin-left: 0;
        display: inline;
        
    }
    
    .news-title h3 {
        color: var(--component-accent-color2)
    }
    
    }
    
    @media only screen and (min-width: 1024px) {
    
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
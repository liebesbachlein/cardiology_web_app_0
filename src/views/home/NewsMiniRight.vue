<template>
    
    <div class="newsmini-right">
        
        <div class="news-shadow-box">
            <div v-if="!mobile" class="newsmini-img">
            <img :src="news.url">
            </div>
        <div class="news-box">
            
            <div class="newsmini-upper">
                <div class="news-date">
                    <h4>{{ news.date }}</h4>
                </div>
                <div class="news-format">
                    <h4>{{ news.format }}</h4>
                </div>
            </div>
            
    
            <div class="news-title-city">
                <div class="news-title">
                    <h3>{{ news.title }}</h3>
                </div>
    
                <div class="news-city">
                    <h4>{{ news.city }}</h4>
                </div>
            </div>
    
            <div class="news-chev-details">
                <div class="news-detail">
                    <h4>{{ news.details }}</h4>
                </div>
            </div>
    
            
        </div>
        </div>
    
        <LineCircle class="newsmini-line"/>
    </div>
    
    </template>
    
    <script>
    import LineCircle from './LineCircle.vue';
    import ChevronRight from '@/components/ChevronRight.vue';
    
    export default {
        props: ['news'],
        components: {LineCircle, ChevronRight},
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
    
    .news-title-city {
        margin-bottom: 1rem;
    }
    .newsmini-upper {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .newsmini-right .news-format {
        padding-right: 2rem;
        
    }
    
    .news-format h4 {
        font-size: 1rem;
        text-transform: uppercase;
        color: #454343;
        text-decoration: none;
        font-family: var(--news-title-font);
    }
    
    .newsmini-right {
        display: flex;
        justify-content: space-between;
        widows: 100%;
    }

    
    .news-shadow-box {
        max-width: 80%;
        width: 75%; 
        display: flex;
        flex-wrap: nowrap;
        margin: 2rem 0 2rem 2rem;
    }
    
    .newsmini-right .newsmini-line {
        grid-column: 2;
        grid-row: 1;
        width: 12rem;
    
    }
    
    .news-box {
        display: flex;
        flex-direction: column;
        background-color: #FFF;
        box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
        border-radius: 0 1.5rem 1.5rem 0;
        width: 80%;
        padding: 1rem;
    }

    .news-box:hover {
    box-shadow: -2px 2px 10px 0px rgba(171, 183, 208, 0.6);
}

    
    .newsmini-right .news-date {
        display: grid;
        width: 12.5rem;
        height: 2.5rem;
        background-color: var(--component-accent-color1);
        border-radius: 0 1.25rem 1.25rem 0;
        padding-left: 1.5rem;
        justify-content: left;
        align-items: center;
        box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.8);
    }
    
    .newsmini-right .news-date h4 {
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
        margin-left: 0rem;
        display: inline;
        
    }
    
    .news-title h3 {
        color: var(--component-accent-color2);
    }
    
    }
    </style>
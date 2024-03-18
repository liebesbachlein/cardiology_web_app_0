<template>

    <div class="poster poster3">
        <div class="box">
        
        <div class="header1">
            <div>Отчет с Конференции «Академия Кардио-Терапевта»</div>
            <div>В течение двух дней участники принимали участие в докладах с интерактивными элементами, включая разбор клинических случаев из реальной практики с комментариями экспертов. Это позволило участникам расширить свои знания и поделиться опытом с коллегами.</div>
            <router-link class="cover-button" tag="div" to="/news/cod4j7hB6vOq1Ms5O565/">
                Читать →</router-link>
        </div>
    
        </div>
    </div>
    
    
    </template>
    
    <script>
    
    </script>
    
    <style>
    
    
    .poster3 {
        background-image: url('/covers/cover11-mobile.jpg');
        padding: 0 1rem;
    }
    
    .poster3 .box {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
    }
    
    .poster3 .header1 {
        width: 95%;
        display: flex;
        text-align: left;
        flex-direction: column;
    }
    
    .poster3 .header1 div:nth-child(1){
        font-family: var(--messiri-font);
        font-size: 2.5rem;
        font-weight: 400;
        color: var(--bright-red);
    
        margin-bottom: 1rem;
        
    }
    
    .poster3 .header1 div:nth-child(2) {
        font-family: var(--plain-text-font);
        font-size: 1rem;
        font-weight: 400;
        color: #FFF;
    }
    
    .poster3 .cover-button {
        margin-top: 2rem;
    }
    
    @media only screen and (min-width: 1024px) {
    
    .poster3 {
        background-image: url('/covers/cover11.jpg');
    }
    .poster3 .box {
        display: inline-flex;
        justify-content: center;
        align-items: flex-start;
        flex-direction: row;
    }
    
    .poster3 .header1 {
        width: 50%;
    }
    
    .poster3 .header1 div:nth-child(1){
        font-size: 3rem;
        margin-bottom: 1rem;
        font-weight: 400;
    }
    
    .poster3 .header1 div:nth-child(2){
        font-size: 1.125rem;
        margin: 0;
    }
    
    }
    
    </style>
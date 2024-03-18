<template>

    <div class="poster poster2">
        <div class="box">
        
        <div class="header1">
            <div>Успешно проведена Конференция «Секреты Женского Сердца»</div>
        <div>Уникальность конференции заключалась в ее гибридном формате, который позволил участникам принять участие как лично, так и через онлайн-платформу, обеспечивая максимальную доступность для всех заинтересованных лиц</div>
        <router-link class="cover-button" tag="div" to="/news/proshla-konferentzya-secrety-zheskogo-serdtza-2024/">
                Подробнее →</router-link>
        </div>
    
        </div>
    </div>
    
    
    </template>
    
    <script>
    
    </script>
    
    <style>
    
    
    .poster2 {
        background-image: url('/covers/cover24-mobile.jpg');
        padding: 0 1rem;
    }
    
    
    .poster2 .box {
        display: flex;
        flex-direction: column;
        width: 100%;
        justify-content: center;
        align-items: center;
        margin-top: 2rem;
    }
    
    .poster2 .header1 {
        width: 95%;
        display: flex;
        text-align: left;
        flex-direction: column;
    }
    

    .poster2 .header1 div:nth-child(1){
        font-family: var(--plain-text-font);
        font-size: 2rem;
        font-weight: 400;
        color: #3E3561;
        margin-bottom: 1rem;
    }

    .poster2 .header1 div:nth-child(2){
        font-size: 1rem;
        color: #FFF;
        
    }

    
    .poster2 .cover-button {
        margin: 2rem 0 0 0; 
    }
    
    @media only screen and (min-width: 1024px) {
    
    .poster2 {
        background-image: url('/covers/cover24.jpg');
    }
    .poster2 .header1 {
        width: 80%;
    }

    .poster2 .header1 div:nth-child(1){
        font-size: 3rem;

    }

    .poster2 .header1 div:nth-child(2){
        font-size: 1.25rem;
        color: #2D2D2D;
    }

    .poster2 .cover-button {
        margin: 2rem 2rem 0 auto; 
    }
}

</style>
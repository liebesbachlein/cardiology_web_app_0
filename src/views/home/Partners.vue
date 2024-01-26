

<template>
    <div class="partners">
        <HomeHeader title="Наши партнеры"/>
        <div class="partners-icon-grid">
            <div class="grid-row1">
                <div  id="pt1" class="partner-icon">
                    <img src="@/assets/partner_icons/esh_logo.png">
                </div>
                <div id="pt2" class="partner-icon">
                    <img src="@/assets/partner_icons/kzcardio_logo.png">
                </div>
                <div id="pt3" class="partner-icon">
                    <img src="@/assets/partner_icons/rus_logo.png">
                </div>
                <div id="pt4" class="partner-icon">
                    <img src="@/assets/partner_icons/almatymed_logo.png">
                </div>
            </div>

            <div class="grid-row2">
                <div id="pt5" class="partner-icon">
                    <img src="@/assets/partner_icons/gerb_logo.png">
                    <h4>Министерство Здравоохранения РК</h4>
                </div>
                <div  id="pt6" class="partner-icon">
                    <img src="@/assets/partner_icons/almaty_logo.png">
                    <h4>Официальный интернет-ресурс г. Алматы</h4>
                </div>
            </div>
            
        </div>

    </div>

</template>

<script>
import HomeHeader from './HomeHeader.vue';

export default {
    components: {HomeHeader}
}

</script>

<style>

@media only screen and (max-width: 768px) {


#pt1 {
    width: 100%;
    grid-column: 1;
    grid-row: 1;
}   

#pt1 img {
    max-width: 80%;
}

#pt2 {
    width: 100%;
    grid-column: 2;
    grid-row: 1;
} 

#pt2 img {
    width: 50%;
    grid-column: 2;
}


#pt3 {
    width: 100%;
    grid-column: 2;
    grid-row: 2;
}  

#pt3 img {
    width: 80%;
}


#pt4 {
    width: 100%;
    grid-column: 1;
    grid-row: 2;
}  

#pt4 img {
    width: 60%;
}


#pt5 {
    width: 50%;
}  

#pt5 img {
    width: 40%;
}


#pt6 {
    width: 50%;
}  

#pt6 img {
    width: 40%;
}


.partners {
    width: 100%;
    padding-top: 4rem;
}

.partners-header-cont {
    display: flex;
    justify-content: center;
}

.partners-header {
    display: inline-block;
    text-align: center;
    border-top: 2px solid var(--component-accent-color1);
    padding: 12px;
}

.partners-icon-grid {
    display: grid;
    grid-template-rows: auto auto;
}

.partners-icon-grid .grid-row1 {
    margin-top: 2rem;
    position: relative;
    grid-row: 1;
    display: grid;
    grid-template-columns: 50% 50%;
    grid-template-rows: auto auto;
    align-items: center;
    justify-content: space-evenly;
}

.partners-icon-grid .grid-row1>div {
    text-align: center;
    
}

.partners-icon-grid .grid-row2 {
    padding-top: 2rem;
    grid-row: 2;
    display: flex;
    align-items: flex-start;
}

.partners-icon-grid .grid-row2 h4 {
    width: 90%;
    font-size: 0.875rem;
}

.partner-icon {
    display: inline-block;
    text-align: center;
}

.partner-icon img {
    height: auto;
}

.grid-row2 .partner-icon {
    width: 190px;
    text-align: center;
}

.header-top h1 {
    font-family: var(--tenor-font);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 400;
    color: #2D2D2D;
    font-style: normal;
}

}

@media only screen and (min-width: 1024px) {

    
#pt1 {
    width: 25%;
}   

#pt1 img {
    max-width: 80%;
}

#pt2 {
    width: 18%;
} 

#pt2 img {
    width: 80%;
}


#pt3 {
    width: 32%;
}  

#pt3 img {
    width: 80%;
}


#pt4 {
    width: 25%;
}  

#pt4 img {
    width: 80%;
}


#pt5 {
    width: 20%;
}  

#pt5 img {
    width: 55%;
}


#pt6 {
    width: 20%;
}  

#pt6 img {
    width: 55%;
}

.partners {
    width: 100%;
    padding-top: 100px;
}

.partners-icon-grid {
    display: grid;
    padding-top: 2rem;
}

.partners-icon-grid .grid-row1 {
    position: relative;
    bottom: 30px;
    grid-row: 1;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.partners-icon-grid .grid-row2 {
    position: relative;
    bottom: 10px;
    grid-row: 2;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
}

.partner-icon {
    display: inline-block;
    text-align: center;
}

.partner-icon img {
    height: auto;
}

.grid-row2 .partner-icon {
    width: 190px;
    text-align: center;
}



}

</style>
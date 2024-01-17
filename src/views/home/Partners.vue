<template>
    <div class="partners">
        <div class="partners-header-cont">
            <div class="header-top">
                <h1>Наши партнеры</h1>
            </div>
        </div>
        <div class="partners-icon-grid">
            <div class="grid-row1">
                <div class="partner-icon" style="width: 25%;">
                    <img style="max-width: 80%;" src="@/assets/partner_icons/esh_logo.png">
                </div>
                <div class="partner-icon" style="width: 18%;">
                    <img style="width: 80%;" src="@/assets/partner_icons/kzcardio_logo.png">
                </div>
                <div class="partner-icon" style="width: 32%;">
                    <img style="width: 80%;" src="@/assets/partner_icons/rus_logo.png">
                </div>
                <div class="partner-icon" style="width: 25%;">
                    <img style="width: 80%;" src="@/assets/partner_icons/almatymed_logo.png">
                </div>
            </div>

            <div class="grid-row2">
                <div class="partner-icon" style="width: 20%;">
                    <img style="width: 55%;" src="@/assets/partner_icons/gerb_logo.png">
                    <h4>Министерство Здравоохранения РК</h4>
                </div>
                <div class="partner-icon" style="width: 20%;">
                    <img style="width: 55%;" src="@/assets/partner_icons/almaty_logo.png">
                    <h4>Официальный интернет-ресурс г. Алматы</h4>
                </div>
            </div>
            
        </div>

    </div>

</template>

<style>

.partners {
    width: 100%;
    padding-top: 100px;
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

.header-top h1 {
    font-family: var(--tenor-font);
    text-transform: uppercase;
    font-size: 1.25rem;
    font-weight: 400;
    color: #2D2D2D;
    font-style: normal;
}



</style>
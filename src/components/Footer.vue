<template>

    <div class="footer">
        <div class="footer-links">
            <div class="social-media-icon">
                <img src="@/assets/social_media_icons/inst.png">
            </div>
            <div class="social-media-icon">
                <img src="@/assets/social_media_icons/fb.png">
            </div>
            <div class="social-media-icon">
                <img src="@/assets/social_media_icons/tw.png">
            </div>
        </div>

        <div class="footer-info">
            <h4>
                Общество специалистов по артериальной гипертонии и кардиоваскулярной 
                профилактике. Адрес: Республика Казахстан, город Алматы, ул. Жибек Жолы 8, 
                офис 31
            </h4>
        </div>
    </div>

</template>

<style>


.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--component-accent-color1);
    padding-bottom: 20px;
}

.footer-links {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    width: 100%;
}

.social-media-icon {
    width: 30%;
    display: inline-block;
    text-align: center;
}

.social-media-icon img {
    width: 2rem;
}

.footer-info {
    width: 95%;
    text-align: center;
}

.footer-info h4 {
    color: #FFF;
    font-size: 0.825rem;
}

@media only screen and (min-width: 768px) {

}

@media only screen and (min-width: 1024px) {

.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: var(--component-accent-color1);
    padding-bottom: 20px;
}

.footer-links {
    display: flex;
    justify-content: center;
    padding: 50px 0;
    width: 100%;
}

.social-media-icon {
    width: 15%;
    display: inline-block;
    text-align: center;
}

.social-media-icon img {
    width: 2rem;
}

.footer-info {
    width: 92%;
    text-align: center;
}

.footer-info h4 {
    color: #FFF;
}
}

</style>
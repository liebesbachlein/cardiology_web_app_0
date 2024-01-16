<template>

<div class="poster">
    <img src="@/assets/covers/image-cover1.png">

    <div class="poster-contents1">
        <div class="header1">
            <h1 stye="{font-size: 1.625rem; color: #FDFAFF; font-weight: 700}">VI Республиканский Конгресс</h1>
            <h1 stye="{font-size: 5.625rem; color: var(--component-accent-color1); font-weight: 700}">Cardio</h1>
            <h1 stye="{font-size: 3.75rem; color: var(--component-accent-color2); font-weight: 700}">forum</h1>

        </div>

    </div>
</div>

</template>

<script>

</script>

<style>

.poster img {
    object-fit: cover;
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    z-index: 4;
}

.poster-contents1 {
    width: 100%;
    height: calc(100vw * 9 / 16 - 5rem - 7rem);
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 5;
}

.poster {
    display: flex;
    align-items: flex-start;
}

.header1 {
    text-align: center;
}






</style>
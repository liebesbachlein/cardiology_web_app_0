<template>
<div class="address-box">
    <img v-if="address != ''" src="@/assets/address.svg">
    <img v-else src="@/assets/video.svg">
    <div v-if="address != ''" class="address-name">
        {{ address }}
    </div>
    <div v-else class="address-name">
        Онлайн
    </div>
</div>

</template>

<script>
export default {
    props: ['address']
}
</script>

<style>

.address-box {
        display: inline-flex;
        min-height: 2rem;
        width: auto;
        align-items: center;
        border-radius: 0.5rem;
        background-color: #e4f0ff;
        padding: 0 0.5rem;
        max-width: fit-content;
    }


    .address-name {
        display: inline-flex;
        align-items: center;
        height: 100%;
        font-size: 0.875rem;
        text-wrap: wrap;
        margin-right: 0.5rem;
        color: var(--component-accent-color2);
    }

.address-box img {
    display: inline-block;
    width: 1.25rem;
    height: 1.25rem;
    margin-right: 0.25rem;
}

@media only screen and (min-width: 1024px) {


.address-box {
    display: inline-flex;
    min-height: 2rem;
    align-items: center;
    border-radius: 0.5rem;
    background-color: #e4f0ff;
    padding: 0 0.5rem;
    max-width: 25rem;
}

.address-name {
    display: inline-block;
    height: 100%;
    font-size: 0.875rem;
    color: var(--component-accent-color2);
    text-wrap: wrap;
}
}

</style>
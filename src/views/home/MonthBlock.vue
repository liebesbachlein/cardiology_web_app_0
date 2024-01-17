<template>
    <div class="monthblock">
        <div class="month">
            <h4>{{ monthName }}</h4>
        </div>

    </div>

</template>

<script>
export default {
    props: ['monthName']
}
</script>

<style>

.monthblock {
    width: 100%;
}

.month {
    display: flex;
    margin: 0 auto;
    width: 200px;
    height: 40px;
    border-radius: 0.25rem;
    border: 1px solid var(--component-accent-color2);
    justify-content: center;
    align-items: center;
}

.month h4 {
    color: var(--component-accent-color2);
    font-family: var(--tenor-font);
    font-size: 1rem;
}




</style>
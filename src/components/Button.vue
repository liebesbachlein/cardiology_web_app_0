<template>

    <div class="blue-button" :class="left ? 'blue-button-left' : 'blue-button'">
        {{ text }}
    </div>

</template>

<script>
export default {
    props: ['text', 'left']
}

</script>

<style>

.blue-button-left, .blue-button {
    cursor: pointer;
    display: flex;
    height: 3.76rem;
    width: 15rem;
    border-radius: 1rem;
    background-color: var(--component-accent-color2);
    align-items: center;
    justify-content: center;
    box-shadow: -2px 2px 10px 0px rgba(16, 90, 114, 0.35);
    color: #FFF;
    font-weight: 500;
    font-family: var(--plain-text-font);
    font-size: 1.075rem;
}

.blue-button-left:hover, .blue-button:hover {
    background-color: #FFF;
    border: 1px solid var(--component-accent-color2);
    color: var(--component-accent-color2);
    box-shadow: -1px 1px 5px 0px rgba(16, 90, 114, 0.2);
    font-weight: 600;
}

.blue-button {
    margin: 0 auto;
}

.blue-button-left {
    margin: 0;
}


</style>
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



@media only screen and (max-width: 768px) {
.monthblock {
    width: 100%;
    
}

.month {
    display: flex;
    margin: 4rem 1.5rem 1.5rem auto;
    justify-content: flex-end;
    align-items: center;
}

.month h4 {
    color: var(--component-accent-color2);
    font-family: var(--tenor-font);
    font-size: 1rem;
}

}


@media only screen and (min-width: 1024px) {
.monthblock {
    margin: 0 0 0 auto;
    width: 12rem;
    display: flex;
    justify-content: center;

}

.month {
    display: inline-flex;
    /*width: 200px;*/
    height: 2.5rem;
    border-radius: 1.25rem;
    padding: 0.5rem 1rem;
    border: 1px solid var(--component-accent-color2);
    justify-content: right;
    align-items: center;
}

.month h4 {
    color: var(--component-accent-color2);
    font-family: var(--news-title-font);
    font-weight: 500;
    font-size: 1rem;
}

}


</style>
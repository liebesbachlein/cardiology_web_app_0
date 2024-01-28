<template>
    <div class="pop-menu">
        <router-link to="/about/1" @mouseover="hoverOver1 = true; hoverOver2 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver1 = false">
  
            <div class="pop-menu-item" style="margin-top: 0.5rem;">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Об Обществе</h4>
            </div>
           
        </router-link>
        <router-link to="/about/2"  @mouseover="hoverOver2 = true; hoverOver1 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver2 = false">
        
            <div class="pop-menu-item">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Руководство</h4>
            </div>
        </router-link>
        <router-link to="/about/3"  @mouseover="hoverOver3 = true; hoverOver2 = false; hoverOver1 = false; hoverOver4 = false;" @mouseleave="hoverOver3 = false">
        
            <div class="pop-menu-item">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Галерея</h4>
            </div>
        </router-link>
        
        <router-link to="/about/4"  @mouseover="hoverOver4 = true; hoverOver2 = false; hoverOver3 = false; hoverOver1 = false;" @mouseleave="hoverOver4 = false">

            <div class="pop-menu-item">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Контакты</h4>
            </div>
    </router-link>
    </div>

</template>


<script>
import ChevronRight from './ChevronRight.vue';
import ChevronLeft from './ChevronLeft.vue';

export default {
    components: {ChevronRight, ChevronLeft},
}

</script>
<style>

.pop-menu {
    position: fixed;
    border-radius: 0 0 0.25rem 0.25rem;
    border-color: var(--header-line);
    border-width: 0 1px 1px 1px;
    border-style: solid;
    background-color: #FFF;
    top: 5rem;
    padding: 0 1rem 1rem 1.5rem;
    z-index: 100;
    width: 16rem;
    height: auto;
    box-shadow: 4px 4px 4px 0 rgba(212, 211, 211, 0.2), -4px 4px 4px 0 rgba(212, 211, 211, 0.2);
}

.pop-menu::before {
    content: "";
    position: absolute;
    height: calc(100% - 1rem);
    width: 1rem;
    background-color: transparent;
    border-radius: 0 0.5rem 0 0;
    border-color: var(--header-line);
    border-width: 1px 1px 0 0;
    border-style: solid;
    bottom: calc(1rem - 1px);
    right: 100%;
    box-shadow: 0.4rem -0.25rem 0 0 #FFF;
}

.pop-menu::after {
    content: "";
    position: absolute;
    height: calc(100% - 1rem);
    width: 1rem;
    background-color: transparent;
    border-radius: 0.5rem 0 0 0;
    border-color: var(--header-line);
    border-width: 1px 0 0 1px;
    border-style: solid;
    bottom: calc(1rem - 1px);
    left: 100%;
    box-shadow: -0.4rem -0.25rem 0 0 #FFF;
}

.pop-menu-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1rem 0;
}

.pop-menu-item h4 {
    margin-left: 1.5rem;
    text-transform: none;
    font-size: 1.025rem;
    transition: all 0.3s ease;
    font-weight: 400;
}

.pop-menu-item:hover h4 {
    color: var(--component-accent-color1); 
}

.pop-menu-item:hover .pop-chev {
    transform: rotate(180deg);
}
</style>
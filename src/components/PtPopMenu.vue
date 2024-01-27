<template>
    <div class="pop-menu">
        <router-link to="/patients/1" @mouseover="hoverOver1 = true; hoverOver2 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver1 = false">
           
            <div class="pop-menu-item" style="margin-top: 0.5rem;">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Полезная информация</h4>
            </div>
            
        </router-link>
        <router-link to="/patients/2"  @mouseover="hoverOver2 = true; hoverOver1 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver2 = false">
           
            <div class="pop-menu-item">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Частные вопросы</h4>
            </div>
        </router-link>
        <router-link to="/patients/3"  @mouseover="hoverOver3 = true; hoverOver2 = false; hoverOver1 = false; hoverOver4 = false;" @mouseleave="hoverOver3 = false">
        
            <div class="pop-menu-item">    
                <ChevronLeft class="pop-chev" color="blue"/>
                <h4>Обратиться к специалисту</h4>
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
</style>
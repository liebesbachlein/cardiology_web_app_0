<template>
    <div class="pop-menu">
        <router-link to="/specialists/1" @mouseover="hoverOver1 = true; hoverOver2 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver1 = false">
            
            <div class="pop-menu-item" style="margin-top: 0.5rem;">    
                <ChevronLeft  class="pop-chev"  color="blue"/>
                <h4>Членство</h4>
            </div>
            
        </router-link>
        <router-link to="/specialists/2"  @mouseover="hoverOver2 = true; hoverOver1 = false; hoverOver3 = false; hoverOver4 = false;" @mouseleave="hoverOver2 = false">
            
            <div class="pop-menu-item">    
                <ChevronLeft  class="pop-chev"  color="blue"/>
                <h4>Ресурсы</h4>
            </div>
        </router-link>
        <router-link to="/specialists/3"  @mouseover="hoverOver3 = true; hoverOver2 = false; hoverOver1 = false; hoverOver4 = false;" @mouseleave="hoverOver3 = false">
        
            <div class="pop-menu-item">    
                <ChevronLeft  class="pop-chev"  color="blue"/>
                <h4>Заявка на обучение</h4>
            </div>
        </router-link>
        
    </div>

</template>


<script>
import ChevronRight from './ChevronRight.vue';
import ChevronLeft from './ChevronLeft.vue';

export default {
    components: {ChevronRight, ChevronLeft},
    data: function() {
        return {
            hoverOver1: false, 
            hoverOver2: false, 
            hoverOver3: false,
            hoverOver4: false
        }
    }
}

</script>
<style>
</style>
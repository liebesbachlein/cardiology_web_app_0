<template>
    <div class="pop-menu">
        <router-link to="/patients/1" @mouseover="hoverOver1 = true" @mouseleave="hoverOver1 = false">
            <Transition mode="out-in" name="navbar-fade">
            <div v-if="hoverOver1" class="pop-menu-item">    
                <ChevronLeft color="red"/>
                <h4 style="color: var(--component-accent-color1); font-weight: 600;">Полезная информация</h4>
            </div>
            <div v-else class="pop-menu-item">    
                <ChevronRight color="blue"/>
                <h4>Полезная информация</h4>
            </div>
            </Transition>
        </router-link>
        <router-link to="/patients/2"  @mouseover="hoverOver2 = true" @mouseleave="hoverOver2 = false">
            <Transition mode="out-in" name="navbar-fade">
            <div v-if="hoverOver2" class="pop-menu-item">    
                <ChevronLeft color="red"/>
                <h4 style="color: var(--component-accent-color1); font-weight: 600;">Частные вопросы</h4>
            </div>
            <div v-else class="pop-menu-item">    
                <ChevronRight color="blue"/>
                <h4>Частные вопросы</h4>
            </div></Transition>
        </router-link>
        <router-link to="/patients/3"  @mouseover="hoverOver3 = true" @mouseleave="hoverOver3 = false">
            <Transition mode="out-in" name="navbar-fade">
            <div v-if="hoverOver3" class="pop-menu-item">    
                <ChevronLeft color="red"/>
                <h4 style="color: var(--component-accent-color1); font-weight: 600;">Обратиться к специалисту</h4>
            </div>
            <div v-else class="pop-menu-item">    
                <ChevronRight color="blue"/>
                <h4>Обратиться к специалисту</h4>
            </div></Transition>
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

.navbar-fade-enter-active,
.navbar-fade-leave-active {
  transition: all 0.1s ease-in;
}


.pop-menu {
    position: fixed;
    border: 1px solid #CCBEBE;
    background-color: #FFF;
    top: 4rem;
    padding: 1rem 2rem 1rem 1rem;
    z-index: 11;
    border-radius: 0.5rem;
    width: 14rem;
    height: auto;
}


.pop-menu-item {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    margin: 1rem 0;
}

.pop-menu-item h4 {
    margin-left: 1rem;
    text-transform: none;
}

.pop-menu a {
    padding: 0;
}
</style>
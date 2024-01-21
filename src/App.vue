<template>
    <NavBar v-if="!mobile"/>
    
    <NavBarMobile v-if="!sideMenu && mobile" @openSideMenu="sideMenu = true"/>
    <PopMenuMobile v-else-if="sideMenu && mobile" @closeSideMenu="sideMenu = false" />

    <RouterView v-if="!sideMenu"/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavBarMobile from './components/NavBarMobile.vue'
import { RouterLink, RouterView } from 'vue-router'
import PopMenuMobile from './components/PopMenuMobile.vue'

export default {
  name: 'App',
  data: function() {
    return {
      mobile: null, 
      sideMenu: false
    }
  },
  mounted() {
    this.mobile = window.matchMedia("(max-width: 768px)").matches
  },
  components: {
    NavBar, NavBarMobile,
    PopMenuMobile
}
}
</script>





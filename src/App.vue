<template>
    <NavBar :class="shortMenu ? 'short' : 'home'" @openSideMenu="sideMenu = true"/>
    
    <PopMenuMobile v-if="sideMenu && mobile" @closeSideMenu="sideMenu = false" />

    <RouterView/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import {RouterView } from 'vue-router'
import PopMenuMobile from './components/PopMenuMobile.vue'

export default {
  name: 'App',
  data: function() {
    return {
      mobile: null, 
      sideMenu: false
    }
  },
  computed: {
    shortMenu() {
      if (this.$route.path === '/' || this.$route.path === '') {
        return false
      } else {
        return true
      }
    }
  },
  mounted() {
    addEventListener("resize", (event) => {
        this.mobile = window.matchMedia("(max-width: 1023px)").matches
    });

    this.mobile = window.matchMedia("(max-width: 1023px)").matches

    addEventListener("resize", (event) => {
        this.mobile = window.matchMedia("(max-width: 1023px)").matches
    });
    
  },
  components: {
    NavBar, PopMenuMobile
}
}
</script>





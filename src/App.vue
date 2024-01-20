<template>
    <NavBarMobile v-if="mobile"/>
    <NavBar v-else/>
    <RouterView/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import NavBarMobile from './components/NavBarMobile.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  data: function() {
    return {
      mobile: null
    }
  },
  mounted() {
    this.mobile = window.matchMedia("(max-width: 768px)")
  },
  components: {
    NavBar, NavBarMobile
  }
}
</script>





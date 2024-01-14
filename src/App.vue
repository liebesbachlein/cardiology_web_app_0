<template>
    <NavBar/>
    <RouterView/>
</template>

<script>
import NavBar from './components/NavBar.vue'
import { RouterLink, RouterView } from 'vue-router'

export default {
  name: 'App',
  components: {
    NavBar
  }
}
</script>


<style>

</style>

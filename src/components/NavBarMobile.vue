<template>
  <div class="navbar" >
  <div class="navbar-block-zero" ref="navBar" @click="check">

    <div class="navbar-in-block">
      <router-link to="/" class="logo">
      <img src="@/assets/logo01.png" style="max-height: 4.75rem; width: auto">
      </router-link>

      <div class="navbar-side-img">
          <img src="@/assets/three-lines.svg">
      </div>

    </div>
    
  </div>
  <div class="red-line-zero" ref="redLine"></div>
  </div>

</template>

<script>

export default {
  mounted() {
    window.addEventListener('scroll', this.changeNavBar);
  },
  methods: {
    changeNavBar() {
      const navBar = this.$refs.navBar
      const redLine = this.$refs.redLine
      if (window.scrollY > 100) {
        navBar.className = 'navbar-block-scroll'
        redLine.className = 'red-line-scroll'

      } else if (window.scrollY <= 100) {
        navBar.className = 'navbar-block-zero'
        redLine.className = 'red-line-zero'
      }
    }
  }
}

</script>


<style>

.navbar {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 4.75rem;
  z-index: 10;

}

.navbar-block-zero {
  width: 100%;
  height: 100%;
  background-color: #FFF;
  padding: 0 2rem 0 0;
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
}

.navbar-block-scroll {
  width: 100%;
  height: 100%;
  background-color: #FFF;
  /*background-color: var(--component-accent-color1);*/
  padding: 0 2rem;
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
  
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.navbar-side-img {
    width: 1.5625rem;
    height: 1.25rem;
}

.navbar-side img {
    object-fit: contain;
}

.red-line-zero {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

.red-line-scroll {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

</style>
<template>
  <div class="navbar" >
  <div class="navbar-block-zero" id="navBar">

    <div class="navbar-in-block">
      <router-link to="/" class="logo">
      <img src="@/assets/logo01.png" style="max-height: 4.75rem; width: auto">
      </router-link>

      <div class="navbar-side-img" @click="openSideMenu">
          <img src="@/assets/three-lines.svg">
      </div>

    </div>
    
  </div>
  <div class="red-line-zero" id="redLine"></div>
  </div>

</template>

<script>

export default {
  mounted() {
    window.addEventListener('scroll', this.changeNavBar);
  },
  methods: {
    changeNavBar() {
      const navBar = document.getElementById('navBar')
      if(navBar) {
      if (window.scrollY > 100) {
        //navBar.className = 'navbar-block-scroll'
        //redLine.className = 'red-line-scroll'

      } else if (window.scrollY <= 100) {
        //navBar.className = 'navbar-block-zero'
        //redLine.className = 'red-line-zero'
      }
    }
    }, 
    openSideMenu() {
      this.$emit('openSideMenu')
    }
  }
}

</script>


<style>

@media only screen and (max-width: 768px) {

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
  padding: 0 1.5rem 0 0;
  box-shadow: 0 2px 4px 0px rgba(193, 209, 229, 0.5);
}

.navbar-block-scroll {
  width: 100%;
  height: 100%;
  background-color: #FFF;
  /*background-color: var(--component-accent-color1);*/
  padding: 0 1.5rem 0 0;
  box-shadow: 0 2px 4px 0px rgba(193, 209, 229, 0.5);
  
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.navbar-side-img {
  display: flex;
  align-items: center;
    width: auto;
    height: 100%;
}

.navbar-side-img img {
  height: 1.5rem;
  width: auto;
}


.red-line-zero {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
    display: none;
}

.red-line-scroll {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
    display: none;
}
}

@media only screen and (max-width: 1023px) and (min-width: 769px) {

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
  padding: 0 1.5rem 0 0;
  box-shadow: 0 2px 4px 0px rgba(193, 209, 229, 0.5);
}

.navbar-block-scroll {
  width: 100%;
  height: 100%;
  background-color: #FFF;
  /*background-color: var(--component-accent-color1);*/
  padding: 0 1.5rem 0 0;
  box-shadow: 0 2px 4px 0px rgba(193, 209, 229, 0.5);
  
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
    justify-content: space-between;
}

.navbar-side-img {
  display: flex;
  align-items: center;
    width: auto;
    height: 100%;
}

.navbar-side-img img {
  height: 1.5rem;
  width: auto;
}


.red-line-zero {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
    display: none;
}

.red-line-scroll {
    display: block;
    width: 50%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
    display: none;
}
}
</style>
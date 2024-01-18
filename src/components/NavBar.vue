<template>
  <div class="navbar" >
  <div class="navbar-block-zero" ref="navBar" @click="check">

    <div class="navbar-in-block">
      <router-link to="/" class="logo">
      <img src="@/assets/logo01.png" style="max-height: 5rem; width: auto">
      </router-link>
    </div>
  
    <div class="navbar-in-block">
      <div class="navbar-item" ref="about">
        <router-link  :to="{name: 'AboutView', params: {id: 1}}">О нас</router-link>
      </div>
      <p class="divider-zero">|</p>
    
      <div class="navbar-item" ref="news">
        <router-link to="/news/">Новости</router-link>
      </div>
      <p class="divider-zero">|</p>
    
      <div class="navbar-item" ref="sp">
        <router-link  :to="{name: 'SpecialistsView', params: {id: 1}}">Специалистам</router-link>
      </div>
      <p class="divider-zero">|</p>

      <div class="navbar-item" ref="pt">
        <router-link   :to="{name: 'PatientsView', params: {id: 1}}">Пациентам</router-link>
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
      const arr = [this.$refs.about, this.$refs.news, this.$refs.sp, this.$refs.pt]
      //const ps = document.querySelectorAll('p');
      const redLine = this.$refs.redLine
      if (window.scrollY > 100) {
        navBar.className = 'navbar-block-scroll';
        redLine.className = 'red-line-scroll';
        arr.forEach(e => e.children[0].style = 'color: #FFFFFF')
        //ps.forEach(e => e.className = 'divider-scroll')

      } else if (window.scrollY <= 100) {
        navBar.className = 'navbar-block-zero';
        redLine.className = 'red-line-zero';
        arr.forEach(e => e.children[0].style = 'color: #454545')
        //ps.forEach(e => e.className = 'divider-zero')
      }
    }
  }
}

</script>


<style>

.divider-zero {
  color: var(--component-accent-color1)
}

.divider-scroll {
  color: var(--component-accent-color1)
}

.navbar {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 5rem;
  z-index: 10;
}

.navbar-block-zero {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--header-color);
  padding: 0 3rem; /*!!!!!!!!!!!!!!!!1*/
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
}

.navbar-block-scroll {
  
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--component-accent-color1);
  padding: 0 2.5rem; /*!!!!!!!!!!!!!!!!1*/
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.25);
  
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
}

a.logo {
  text-decoration: none;
}

.navbar-item {
  display: flex;
  height: 100%;
  padding: 0 2rem ;
  align-items: center;
}

.navbar-item a {
  font-family: 'El Messiri', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color: #454545;
  text-decoration: none;
  text-transform: uppercase;
}

.navbar-item a.router-link-active {
  color: var(--component-accent-color2);
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.0625rem;
}

.navbar-item a:hover {
  text-decoration: none;
  font-weight: 700;
  letter-spacing: 0.0625rem;
}

.navbar-item a.router-link-click {
  color: #000;
  text-decoration: underline;
}

.navbar-item a.router-link-hover {
  color: #000;
  text-decoration: underline;
}

.red-line-zero {
    display: block;
    width: 33%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

.red-line-scroll {
    display: block;
    width: 100%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

</style>
<template>
  <div class="navbar" >
  <div class="navbar-block-zero" ref="navBar">

    <div class="navbar-in-block">
      <router-link to="/">
      <div class="logo-zero" id="logo"></div>
      </router-link>
    </div>
  
    <div class="navbar-in-block"  >
      
      
      <div class="navbar-item"  @mouseover="popAbout = true"  @mouseleave="popAbout = false">
        <AboutPopMenu v-if="popAbout"/>
        <router-link ref="about" id="about" :to="{name: 'AboutView', params: {id: 1}}" :class="{'a-hover': popAbout}">О нас</router-link>
      </div>
      <p class="divider-zero">|</p>
    
      <div class="navbar-item"   @mouseover="popNews = true"  @mouseleave="popNews = false">
        <!--<NewsPopMenu v-if="popNews"/>-->
        <router-link ref="news" id="news" to="/news/" :class="{'a-hover': popNews}">Новости</router-link>
      </div>
      <p class="divider-zero">|</p>
    
      <div class="navbar-item"   @mouseover="popSp = true"  @mouseleave="popSp = false">
        <SpPopMenu v-if="popSp"/>
        <router-link ref="sp" id="sp"  :to="{name: 'SpecialistsView', params: {id: 1}} " :class="{'a-hover': popSp}">Специалистам</router-link>
      </div>
      <p class="divider-zero">|</p>

      <div class="navbar-item"  @mouseover="popPt = true"  @mouseleave="popPt = false">
        <PtPopMenu v-if="popPt"/>
        <router-link ref="pt" id="pt"   :to="{name: 'PatientsView', params: {id: 1}}" :class="{'a-hover': popPt}">Пациентам</router-link>
      </div>
    </div>
  </div>
  <div class="red-line-zero" ref="redLine"></div>
  </div>

</template>

<script>
import AboutPopMenu from './AboutPopMenu.vue';
import NewsPopMenu from './NewsPopMenu.vue';
import SpPopMenu from './SpPopMenu.vue';
import PtPopMenu from './PtPopMenu.vue';


export default {
  components: {AboutPopMenu, SpPopMenu, PtPopMenu},
  data: function () {
    return {
      popAbout: false, 
      popNews: false, 
      popSp: false, 
      popPt: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.changeNavBar);
  },
  methods: {
    changeNavBar() {
      const navBar = this.$refs.navBar
      const logo = document.getElementById('logo')
      const arr = [document.getElementById('about'), document.getElementById('news'), document.getElementById('sp'), document.getElementById('pt')]
      const ps = document.querySelectorAll('.navbar-in-block p');
      const redLine = this.$refs.redLine
      if (window.scrollY > 100) {
        //navBar.className = 'navbar-block-scroll'
        redLine.className = 'red-line-scroll'
        //arr.forEach(e => e.style = 'color: #FFFFFF')
        //ps.forEach(e => e.className = 'divider-scroll')
        //logo.className = 'logo-scroll'

      } else if (window.scrollY <= 100) {
        //navBar.className = 'navbar-block-zero'
        redLine.className = 'red-line-zero'
        //arr.forEach(e => e.style = 'color: #454545')
        //ps.forEach(e => e.className = 'divider-zero')
        //logo.className = 'logo-zero'
      }
    }
  }
}

</script>


<style>

@media only screen and (min-width: 1024px) {

#about, #news, #sp, #pt {
  padding: 0 2rem;
}

.divider-zero {
  color: var(--component-accent-color1)
}

.divider-scroll {
  color: #FFF;
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
  background-color: #FFF;
  padding: 0 3rem; /*!!!!!!!!!!!!!!!!1*/
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
}

.navbar-block-scroll {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--component-accent-color1);
  padding: 0 3rem; /*!!!!!!!!!!!!!!!!1*/
  box-shadow: -2px 2px 10px 0px rgba(212, 211, 211, 0.5);
  
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
}

.logo-zero, .logo-scroll {
  background-image: url("@/assets/logo01.png");
  height: 5rem; 
  width: 16rem;
  background-size: cover;
}

.logo-scroll {
  background-image: url("@/assets/logo01-white.png");
  background-size: cover;
  height: 5rem; 
  width: 16rem;
}

.navbar-item {
  display: flex;
  height: 100%;
  justify-content: center;
  align-items: flex-end;
  z-index: 12;
  flex-direction: column;
}

.navbar-item a {
  font-family: var(--plain-text-font);
  font-size: 1.125rem;
  font-weight: 400;
  color: #454545;
  text-decoration: none;  
}

.navbar-item .a-hover {
  text-decoration: overline;
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

}
</style>
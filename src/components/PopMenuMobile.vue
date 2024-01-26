<template>
<div class="popmenu">
  <div class="pop-upper">
<div class="navbar" >
  <div class="navbar-block-zero" ref="navBar">

    <div class="navbar-upper">
      <router-link to="/" class="logo">
      <img src="@/assets/logo01-white.png" style="max-height: 4.75rem; width: auto">
      </router-link>

      <div class="navbar-side-img" @click="closeSideMenu">
          <img src="@/assets/cross.svg">
      </div>
    </div>  
  </div>
  
  <div class="red-line-zero" ref="redLine"></div>
</div>
      
   
    <div class="navbar-in-block">
      
      <div class="navbar-item"  @click ="popAbout = !popAbout">
        
        <div class="nav-title" ref="about" id="about">
          
          <Transition mode="out-in" name="words">
          <div v-if="popAbout == false" class="nav-sign-img"><img src="@/assets/plus.svg"></div>
          <div v-else class="nav-sign-img"><img src="@/assets/minus.svg"></div>
          </Transition>
          <h3>О нас</h3>
          
        </div>
        <div class="nav-details" v-if="popAbout">

          <router-link to="/about/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Об Обществе</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/about/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Руководство</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/about/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Галерея</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/about/4" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Контакты</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

        </div>
      </div>
    
      
        <router-link class="navbar-item-single" ref="news" id="news" to="/news/" @click="closeSideMenu">
            <div class="news-item-nav">
              <div class="nav-sign-img"><img  src="@/assets/sign-white.svg"></div>
              <h3>Новости</h3>
            </div>
            <ChevronRight color="blue"/>
        </router-link>
     
    
      <div class="navbar-item" @click ="popSp = !popSp" >
        <div class="nav-title" ref="sp" id="sp">
          <Transition mode="out-in" name="words">
          <div v-if="popSp == false" class="nav-sign-img"><img src="@/assets/plus.svg"></div>
          <div v-else class="nav-sign-img"><img src="@/assets/minus.svg"></div></Transition>
          <h3>Специалистам</h3>
        </div>

        <div class="nav-details" v-if="popSp">
          <router-link to="/specialists/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Членство</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/specialists/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Ресурсы</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/specialists/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Заявка на обучение</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

        </div>
      </div>
    
      <div class="navbar-item" @click ="popPt = !popPt">
        <div class="nav-title" ref="sp" id="sp">
          <Transition mode="out-in" name="words">
          <div v-if="popPt == false" class="nav-sign-img"><img src="@/assets/plus.svg"></div>
          <div v-else class="nav-sign-img"><img src="@/assets/minus.svg"></div></Transition>
          <h3>Пациентам</h3>
        </div>

        <div class="nav-details" v-if="popPt">
          <router-link to="/patients/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Полезная информация</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/patients/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Частные вопросы</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/patients/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                <h4>Обратиться к специалисту</h4>
                <ChevronRight color="blue"/>
            </div>
          </router-link>

        </div>
      </div>

    </div>
  </div>
    <div class="pop-lower">

    <div class="add-links-box">
      <router-link to="/membership-request" class="add-links" @click="closeSideMenu">
        <h5>Стать членом Общества</h5>
        <ChevronRight color="blue"/>
      </router-link>
      <router-link to="/specialists/3" class="add-links" @click="closeSideMenu">
        <h5>Записаться на обучение</h5>
        <ChevronRight color="blue"/>
      </router-link>
    </div>

  <div class="red-line-zero" style="width: 75%"></div>

  <div class="nav-info">
    <h6>+7 (700) 076 43 54</h6>
    <h6>Алматы, ул. Жибек Жолы 8, офис 31</h6>
    <h6>ОО “Общество специалистов по артериальной гипертонии и кардиоваскулярной профилактике”</h6>
  </div>
 
</div>
</div>
</template>

<script>
import ChevronRight from './ChevronRight.vue';

export default {
  components: {ChevronRight},
  data: function () {
    return {
      popAbout: false, 
      popNews: false, 
      popSp: false, 
      popPt: false
    }
  }, 
  methods: {
    closeSideMenu() {
      this.$emit('closeSideMenu')
    }
  }
}

</script>


<style>

@media only screen and (max-width: 768px) {

  .nav-sign-img {
    height: 1.25rem;
    width: 1.25rem;
  }

  .words-enter-active,
.words-leave-active {
  transition: opacity 0.1s ease;
}

.words-enter-from,
.words-leave-to {
  opacity: 50%;
}


.popmenu {
  min-height: calc(100vh - 4.75rem);
  width: 100%;
  position: absolute;
  top: 0;
  background-color: #FFF;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.popmenu .navbar {
  display: block;
  width: 100%;
  height: 4.75rem;
  z-index: 11;
}

.popmenu .navbar-block-zero {
  width: 100%;
  height: 100%;
  background-color: var(--component-accent-color1);
  padding: 0 1.5rem 0 0;
  z-index: 11;
}

.popmenu .navbar-upper {
  display: flex;
  height: 100%;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
}

.popmenu .navbar-side-img {
  display: flex;
  align-items: center;
    width: auto;
    height: 100%;
}

.popmenu .navbar-side-img img {
    color: #FFF;
}

.popmenu .red-line-zero {
    display: block;
    width: 100%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

.popmenu  .navbar-in-block {
    display: flex;
    height: 100%;
    flex-direction: column;
    margin-top: 4.75rem;
    padding: 2rem 1rem 1rem 1rem;
    justify-content: center;
    align-items: flex-start;
    z-index: 10;
}

.popmenu .add-links-box {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1rem;
  justify-content: center;
  align-items: flex-start;
}

.popmenu .add-links {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin: 0.5rem 0;
  padding: 0.5rem 1rem 0.5rem 0;
}

.popmenu .add-links h5 {
  font-size: 1rem;
  padding-left: 0.5rem;
  font-weight: 400;
  color: #454545;
  letter-spacing: 1px;
}

.popmenu .navbar-item {
  display: flex;
  height: 100%;
  align-items: flex-start;
  z-index: 12;
  flex-direction: column;
  width: 100%;
  margin: 1rem 0;
  z-index: 10;

}

.popmenu  .navbar-item-single {
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  z-index: 12;
  flex-direction: row;
  width: 100%;
  margin: 1rem 0;
  padding-right: 1rem;
  z-index: 10;
}

.news-item-nav {
  display: flex;
  align-items: center;
}

.popmenu .nav-title {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
}

.popmenu h3 {
  font-size: 1.25rem;
  text-transform: uppercase;
  padding-left: 1rem;
  font-weight: 600;
}

.popmenu h4 {
  font-size: 1.125rem;
  padding-left: 1rem;
  font-weight: 400;
  color: #2D2D2D
}

.nav-details {
  width: 100%;
  padding: 0.25rem 1rem 0 1rem;
}

.mobile-pop-item {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 1rem 0;
}

.nav-info {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1rem 0 1rem;
  justify-content: center;
  align-items: flex-start;

}

.nav-info h6 {
  font-size: 0.925rem;
  font-weight: 400;
  margin: 0.5rem 0.5rem;
  color: #6C6C6C;
  font-family: var(--simple-font);
}

}

</style>
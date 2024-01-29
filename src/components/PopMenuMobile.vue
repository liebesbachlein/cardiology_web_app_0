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
  
  <!--<div class="red-line-zero" ref="redLine"></div>-->
</div>
      
   
    <div class="navbar-in-block">
      
      <div class="navbar-item"  @click ="popAbout = !popAbout">
        
        <div class="nav-title" ref="about" id="about">
          О нас
          
        </div>
        <div class="nav-details" v-if="popAbout">

          <router-link to="/about/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Об Обществе
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/about/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Руководство
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/about/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Галерея
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/about/4" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Контакты
                <ChevronRight color="blue"/>
            </div>
          </router-link>

        </div>
      </div>
    
      
        <router-link class="navbar-item-single" ref="news" id="news" to="/news/" @click="closeSideMenu">
            <div class="news-item-nav nav-title">
              Новости
            </div>
            <ChevronRight color="blue"/>
        </router-link>
     
    
      <div class="navbar-item" @click ="popSp = !popSp" >
        <div class="nav-title" ref="sp" id="sp">
          Специалистам
        </div>

        <div class="nav-details" v-if="popSp">
          <router-link to="/specialists/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Членство
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/specialists/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Ресурсы
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/specialists/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Заявка на обучение
                <ChevronRight color="blue"/>
            </div>
          </router-link>

        </div>
      </div>
    
      <div class="navbar-item" @click ="popPt = !popPt">
        <div class="nav-title" ref="sp" id="sp">
          Пациентам
        </div>

        <div class="nav-details" v-if="popPt">
          <router-link to="/patients/1" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Полезная информация
                <ChevronRight color="blue"/>
            </div>
          </router-link>

          <router-link to="/patients/2" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Частные вопросы
                <ChevronRight color="blue"/>
            </div>
          </router-link>
          
          <router-link to="/patients/3" @click="closeSideMenu">
            <div class="mobile-pop-item">    
                Обратиться к специалисту
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
        Стать членом Общества
        <ChevronRight color="blue"/>
      </router-link>
      <router-link to="/specialists/3" class="add-links" @click="closeSideMenu">
        Записаться на обучение
        <ChevronRight color="blue"/>
      </router-link>
    </div>

  <div class="red-line-zero" style="width: 75%"></div>

  <div class="nav-info">
    +7 (700) 076 43 54<br>
    Алматы, ул. Жибек Жолы 8, офис 31<br>
    ОО “Общество специалистов по артериальной гипертонии и кардиоваскулярной профилактике”<br>
  </div>
 
</div>
</div>
</template>

<script>
import ChevronRight from './ChevronRight.vue';
import ChevronLeft from './ChevronLeft.vue';

export default {
  components: {ChevronRight, ChevronLeft},
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
    border-top: 1px solid var(--component-accent-color1);
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
  font-size: 1.375rem;
  padding-left: 0.5rem;
  font-weight: 600;
  color: #565964;
  font-family: var(--messiri-font);
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
  font-size: 1.125rem;
  padding-left: 1rem;
  font-weight: 400;
  color: #2D2D2D;

}

.nav-info {
  width: 100%;
  display: flex;
  height: 100%;
  flex-direction: column;
  padding: 2rem 1rem 0 1rem;
  justify-content: center;
  align-items: flex-start;
  font-size: 0.925rem;
  font-weight: 400;
  margin: 0.5rem 0.5rem;
  color: #6C6C6C;
}

}

</style>
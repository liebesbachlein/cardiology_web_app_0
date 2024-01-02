

<template>
  <div class="navbar">
  <div class="navbar-block">

    <div class="navbar-in-block">
      <router-link to="/" class="logo">[лого]</router-link>
    </div>
  
    <div class="navbar-in-block">
      <div class="navbar-item">
        <router-link to="/about">О нас</router-link>
      </div>
    
      <div class="navbar-item">
        <router-link to="/about">Новости</router-link>
      </div>
    
      <div class="navbar-item">
        <router-link to="/about">Специалистам</router-link>
      </div>

      <div class="navbar-item">
        <router-link to="/about">Пациентам</router-link>
      </div>
    </div>
  </div>
  <div class="red-line"></div>
  </div>

</template>

<script>
export default {

  setup() {
  }

}
</script>

<style>

.navbar {
  display: block;
  position: fixed;
  top: 0;
  width: 100%;
  height: 80px;
}

.navbar-block {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  background-color: var(--header-color);
  padding: 0 50px;
}

.navbar-in-block {
    display: flex;
    height: 100%;
    align-items: center;
    flex-direction: row;
}

a.logo {
  font-family: 'El Messiri', sans-serif;
  font-weight: 400;
  font-size: 20px;
  color: #000;
  text-decoration: none;
}

.navbar-item {
  display: flex;
  height: 100%;
  padding: 0 30px ;
  align-items: center;
}

.navbar-item a {
  font-family: 'El Messiri', sans-serif;
  font-size: 17px;
  font-weight: 400;
  color: #000;
  text-decoration: none;
  
}

.navbar-item a.router-link-active {
  color: #000;
  text-decoration: none;
}

.navbar-item a.router-link-click {
  color: #000;
  text-decoration: underline;
}

.navbar-item a.router-link-hover {
  color: #000;
  text-decoration: underline;
}

.red-line {
    display: block;
    width: 33%;
    border-top: 2px solid var(--component-accent-color1);
    margin: 0 auto;
}

</style>
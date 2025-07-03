<template>
  <nav-bar-component/>
  <banner-component/>
  <router-view/>
  <footer-component/>
</template>

<script>
import NavBarComponent from './components/NavBarComponent.vue'
import FooterComponent from './components/FooterComponent.vue'
import BannerComponent from './components/BannerComponent.vue'
import MessageComponent from './components/MessageComponent.vue'

export default {
  name: 'App',
  components: {
    NavBarComponent,
    FooterComponent,
    BannerComponent,
    MessageComponent
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

h1 {
  text-align: center;
  margin: 40px 0;
  color: #222;
}
</style>
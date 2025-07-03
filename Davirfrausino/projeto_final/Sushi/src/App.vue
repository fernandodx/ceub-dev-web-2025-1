<template>
  <nav-bar-component />
  <banner-component />
  <router-view />
  <footer-component />
</template>

<script>
import NavBarComponent from "./components/NavBarComponent.vue";
import FooterComponent from "./components/FooterComponent.vue";
import BannerComponent from "./components/BannerComponent.vue";

export default {
  name: "App",
  components: {
    NavBarComponent,
    FooterComponent,
    BannerComponent,
  },
};
</script>

<style>
body {
  background-color: #15161a;
  margin: 0;
  height: 100%;
  padding: 0;
  font-family: "Segoe UI", Arial, sans-serif;
  color: #ffffff;
}

#app {
  text-align: center;
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

nav {
  padding: 20px;
  background-color: #15161a;
}

nav a {
  font-weight: bold;
  color: #ffffff;
  text-decoration: none;
  margin: 0 12px;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #e63946; /* vermelho */
}

nav a.router-link-exact-active {
  color: #d4af37; /* dourado claro */
}
</style>

<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component />
    <br>
    <usuario-component />
    <br>
  </div>
</template>

<script>

import { onUnmounted } from 'vue';
import HomeComponent from './components/HomeComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated() {
    console.log("updated")
  },
  errorCaptured() {
    console("errorCaptured");
  },
  unmounted() {
    console.log("unmounted");
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

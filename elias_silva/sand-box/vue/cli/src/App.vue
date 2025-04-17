
<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import UsuarioComponent from './components/UsuarioComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent
  },
  created() {
    console.log("Created")
  },
  mounted() {
    console.log("Mounted")
  },
  updated() {
    console.log("Updated")
  },
  errorCaptured() {
    console.log("ErrorCaptured")
  },
  unmounted() {
    console.log("Unmounted")
  },
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


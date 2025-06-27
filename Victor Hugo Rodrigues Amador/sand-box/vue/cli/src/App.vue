<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component-vue/>
    <br>
    <home-component-vue/>
    <br>
    <imagem-component/>
    <br>
    <estilo-component/>
  </div>
</template>

<script>
import HomeComponentVue from './components/HomeComponent.vue'
import EstiloComponent from './EstiloComponent.vue';
import EstiloComponent from './EstiloComponent.vue';
import ImagemComponent from './ImagemComponent.vue';
export default {
  name: 'App',
  components: {
    HomeComponentVue,
    ImagemComponent,
    EstiloComponent,
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
  margin-top: 60px;
}
</style>

<template>
  <div>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component/>
    <br>
    <estilo-component/>
  </div>
  
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
import ImagemComponent from './components/ImagemComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue'
import EstiloComponent from './components/EstiloComponent.vue';

export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    ImagemComponent,
    EstiloComponent
    
  },
  created(){
    console.log("created");
  },
  mounted(){
    console.log("mounted");
  },
  uptaded(){
    console.log("updated");
  },
  errorCaptured(){
    console.log("errorCaptured");
  },
  unmounted(){
    console.log("unmounted");
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

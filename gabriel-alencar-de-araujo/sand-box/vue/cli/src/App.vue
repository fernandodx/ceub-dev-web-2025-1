<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component />
    <br>
    <usuario-component />
    <br>
    
    <imagem-component @visibilidade-img="alertaGon" nomeBotao="aparece gon" url-imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkDyJMD36AwixNVk7wrCYi-yNB-ursLfcEw&s" />
    <imagem-component @visibilidade-img="alertaVasco" nomeBotao="aparece botafogo" :url-imagem="urlBanner" />
    <estilo-component />
  </div>

</template>

<script>

import HomeComponent from './components/HomeComponent.vue';
import UsuarioComponent from './components/UsuarioComponent.vue';
import ImagemComponent from './components/ImagemComponent.vue';
import EstiloComponent from './components/EstiloComponent.vue';
export default {
  name: 'App',
  components: {
    HomeComponent,
    UsuarioComponent,
    ImagemComponent,
    EstiloComponent
  },
  data() {
    return {
      urlBanner: "https://i.pinimg.com/736x/0c/8b/26/0c8b2686412ec48bbb3b1b0e7bea23cc.jpg"
    }

  },
  methods: {
    alertaGon(isVisivel){
      if(isVisivel){
        alert("Gon visivel")
      }
      
    },
    alertaVasco(isVisivel){
      if(isVisivel){
        alert("Vasco visivel")
      }
    }
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
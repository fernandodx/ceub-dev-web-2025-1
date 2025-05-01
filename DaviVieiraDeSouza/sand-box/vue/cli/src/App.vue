<template>
  <div>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component  
    @visibilidade-img="alertaFluminense"
    nomeBotao="Aparece Fluminense" 
    urlImagem=" https://jpimg.com.br/uploads/2023/04/conheca-a-historia-do-fluminense-no-brasileirao.jpg"/>
   
    <imagem-component  
    @visibilidade-img="alertaYoungFlu"
    nomeBotao="Aparece YoungFlu" 
    :urlImagem="urlBanner"/>
    <br>
    <estilo-component/>
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
      urlBanner : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS40mmM0Sj_ZAD1y0EbR4q_izNDHa8P-hPCnA&s"
    }
  },
  methods: {
    alertaFluminense(isVisivel){
      if(isVisivel){
        alert("Fluminense Visivel")
      }
    },
    alertaYoungFlu(isVisivel){
      if(isVisivel){
        alert("YoungFlu Visivel")
    }
  },
  created(){
    console.log("mounted");
  },
  updated(){
    console.log("updated");
  },
  errorCaptured(){
    console.log("errorCaptured");
  },
  unmounted(){
    console.log("");
  }
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

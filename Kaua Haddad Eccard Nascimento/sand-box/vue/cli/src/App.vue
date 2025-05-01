<template>
  <div>
    <h1>VUE</h1>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component 
    @visibilidadeImg="alertaSaoPaulo"
    nomeBotao="Aparece Independente" 
    urImagem="https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0804%2Fr579402_1296x729_16%2D9.jpg"/>
    <imagem-component 
    @visibilidadeImg="alertaIndependente"
    nomeBotao="Aparece Independente"
     :urImagem="urlBanner"/>
    <br>
    <estilo-component/>
  </div>
</template>

<script>
import HomeComponent from './components/HomeComponent.vue'
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
      urlBanner : "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2023/09/11/1354128257-whatsapp-image-2023-09-04-at-051553-1.jpeg"
    }
  },
  methods: {
    alertaSaoPaulo(isVisivel){
      if(isVisivel){
      alert("Saopaulo visivel")
      }
    },
    alertaIndependente(isVisivel) {
      if(isVisivel){
      alert("Saopaulo visivel");
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
    console.log("updated");
  },
  errorCaptured() {
    console.log("errorCaptured");
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
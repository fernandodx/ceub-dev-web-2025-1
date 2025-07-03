<template>
  <div>
    <br>
    <home-component/>
    <br>
    <usuario-component/>
    <br>
    <imagem-component @visibilidadeImg="alertaRonaldo" nomeBotao="Aparece Ronaldo" urlImagem="https://campeonatobrasileiro.com.br/storage/cache/storage/conteudos/conteudos/20241124223308_brasileiros-na-champions-league-quem-sao-os-destaques-1-933x622.jpg"/>
    <imagem-component @visibilidadeImg="alertaGaucho" nomeBotao="Aparece Gaucho" :urlImagem="urlBanner"/>
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
  data(){
    return{
      urlBanner: "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngplay.com%2Fimage%2F499257&psig=AOvVaw0tnixPdRSAUvX8SaqHLynK&ust=1746143135211000&source=images&cd=vfe&opi=89978449&ved=0CBQQjRxqFwoTCPiz6J34gI0DFQAAAAAdAAAAABAJ"
    }

  },
  methods: {
    alertaRonaldo(isVisivel){
      if(isVisivel){
        alert("Ronaldo visivel");
      }
    },
    alertaGaucho(isVisivel) {
      if(isVisivel){
        alert("Gaucho visivel");
      }
    }
  },
  created() {
    console.log("created");
  },
  mounted() {
    console.log("mounted");
  },
  updated(){
    console.log("updated");
  },
  errorCaptured() {
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
  text-align: start;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
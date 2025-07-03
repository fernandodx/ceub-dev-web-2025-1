<template>
    <div class="container"> 
        <img v-show="imagemVisivel" :src="pathImagem" :alt="Banner">
        <button @click="apareceEsconde(), segundometodo()">Aparece/Esconde</button>

    </div>
</template>

<script>
    export default {
        name: "ImagemComponent",
        data() {
            return {
                imagemVisivel : true,
                BANNER: "valor do alt",
                pathImagem : "https://m.media-amazon.com/images/I/51k4nomxUAL._AC_UF894,1000_QL80_.jpg"
            }
        }, 
        methods: {
            apareceEsconde() {
                this.imagemVisivel = !this.imagemVisivel;
            },
        segundometodo () {
            setTimeout(() => {
                alert('Segundo Metodo Acionado!');
            }, 2000);
        }
        }
    }
</script>


<style>

    img {
        width: 300px;
        height:auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;
    }

</style>
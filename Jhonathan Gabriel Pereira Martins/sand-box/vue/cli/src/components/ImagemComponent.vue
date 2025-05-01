<template>
    <div class="container">
        <img v-show="imagemVisivel" :src="urlImagem" :alt="banner">
        <button @click="apareceEsconde(), segundometodo">{{ nomeBotao }}</button>
    </div>

</template>

<script>
    export default {
        name: "ImagemComponent",
        data() {
            return {
                imagemVisivel : true,
                banner : "valor do alt",
                //pathImagem : "data:image/jpeg;base64,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"
            }
        },
        methods: {
            apareceEsconde() {
                this.imagemVisivel = !this.imagemVisivel;
                this.$emit('visibilidadeImg', this.imagemVisivel);
            },
        segundometodo() {
            setTimeout(() => {
                alert('Segundo Metodo Acionado!');
                }, 2000);
            }
        },
        props: {
            urlImagem : String,
            nomeBotao : String

        },
        emits:["visibilidadeImg"]
    }
</script>

<style>

    img {
        width: 300px;
        height: auto;
        border: solid 4px darkcyan;
        margin: 16px;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;

    }

    button {
        padding: 12px;
        font-weight: bold;
        color: darkcyan;
        background: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-color: darkcyan;
        color: azure;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightblue;
        padding: 16px;

    }

</style>
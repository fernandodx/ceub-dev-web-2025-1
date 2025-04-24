<template>
    <div class="container">
        <img v-show="imagemVisivel" :src="pathImagem" :alt="banner">
        <button @click="apareceEsconde(), segundometodo()">Aparece/Esconde</button>

    </div>
</template>

<script>
    export default {
        name: "ImagemComponent",
        data() {
            return {
                imagemVisivel : true,
                banner: "valor do alt",
                pathImagem : "https://a3.espncdn.com/combiner/i?img=%2Fphoto%2F2019%2F0804%2Fr579402_1296x729_16%2D9.jpg"
            }
        },
        methods: {
            apareceEsconde() {
                this.imagemVisivel = !this.imagemVisivel;
            },
            segundometodo() {
                setTimeout(() => {
                    alert('Segundo Método Acionado');
                }, 2000);
            }
        }
    }
</script>

<style>

    img {
        width: 500px;
        height: auto;
        border: solid 4px red;
        margin: 16px;
        border-radius: 16%;
        box-shadow: 2px 2px 10px 2px black;
    }

button {
    padding: 12px;
    font-weight: bold;
    color:crimson;
    background: black;
    border: solid 2px crimson;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
}

button:hover {
    background-color: crimson;
    color: aliceblue;
}

.container {
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 16px;
    border-bottom: solid 2px crimson;
    padding: 16px;
}




</style>
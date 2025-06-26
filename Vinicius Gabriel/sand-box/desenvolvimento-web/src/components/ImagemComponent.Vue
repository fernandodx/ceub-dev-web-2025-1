<template>
    <div class="container">
        <img v-show="imagemVisivel" src="" alt="banner">
        <button @click="apareceEsconde(), segundoMetodo()  ">Aparece/Esconde</button>
    </div>
</template>

<script>
    export default{
        name: "ImagemComponent",
        data()
        {
            return {
                imagemVisivel : true
                banner: "valor do alt"
                pathImagem: "https://static.wikia.nocookie.net/animeverso/images/0/04/ShrekRender.png/revision/latest/scale-to-width-down/340?cb=20231106231500&path-prefix=pt-br"
            }
        },
        methods : {
            apareceEsconde(){
                this.imagemVisivel = !this.imagemVisivel;
            },
            segundoMetodo()
            {
                setTimeout(() => {
                    alert('Segundo Metodo Adicionado!')
                }, 2000);
            }
        }
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

        
    }
</style>
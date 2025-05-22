<template>
    <div class="container">
        <img v-show="imagemVisível" :src="urlImagem" :alt="Banner">
        <button @click="apareceEsconde(),segundometodo()">{{nomeBotao}}</button>
                
    </div>

</template>

<script>
    export default{
        name: "ImagemComponet",
        data() {
            return{
                imagemVisível : true,
                Banner: "Valor do alt",
                // pathImagem : "https://campeonatobrasileiro.com.br/storage/cache/storage/conteudos/conteudos/20241124223308_brasileiros-na-champions-league-quem-sao-os-destaques-1-933x622.jpg"

            }
        },
        methods:{
            apareceEsconde(){
                this.imagemVisível = !this.imagemVisível;
                this.$emit('visibilidadeImg', this.imagemVisível);

            },
            segundometodo(){
                setTimeout(() => {
                    alert('Segundo metodo Adicionado');
                    
                }, 2000);
            }
        },
        props: {
            urlImagem : String,
            nomeBotao : String
        },
        emits: ["visibilidadeImg"]
    }

</script>

<style>
    img{
        width: 300px;
        height: auto;
        border: solid 4px darkcyan ;
        border-radius: 16px;
        box-shadow: 2px 2px 10px 2px darkcyan;
    }
    button{
        padding: 12 px;
        font-weight: bold;
        color: darkcyan;
        background: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.5s;
    }
    button:hover{
        background: darkcyan;
        color: azure;
    }
    .container{
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightblue;
        padding: 16px;

    }

</style>
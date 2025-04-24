<template>
    <div class="container">
        <img v-show="imagemVisivel" :src="pathImagem" :alt="Banner">
        <button @click="apareceEsconde(), segundoMetodo()">Aparece/Esconde</button>

    </div>
</template>

<script>
export default {
    name: "ImagemComponente",
    data() {
        return {
            imagemVisivel: true,
            Banner: "valor do alt",
            pathImagem: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFkDyJMD36AwixNVk7wrCYi-yNB-ursLfcEw&s"
        }
    },
    methods:{
        apareceEsconde(){
            this.imagemVisivel = !this.imagemVisivel;
        },
        segundoMetodo(){
            setTimeout(() => {
                alert('Sefundo Metodo Acionado!')
            },2000);
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

button{
    padding: 12px;
    font-weight: bold;
    color: darkcyan;
    background: azure;
    border: solid 2px darkcyan;
    border-radius: 8px;
    cursor: pointer;
    transition: 0.5s;
}
button:hover{
    background-color: darkcyan;
    color: azure;
}
.container{
    display: flex;
    flex-direction: column;
    width: 50%;
    align-items: center;
    margin: 16px;
    border-bottom: 2px lightblue; 

}
</style>
<template>

    <div class="container">
        <h1>Morpho Automações</h1>
        <img v-show="imagemVisivel" v-bind:src="pathImagem" 
        v-bind:alt="valorAlt" width="200">
        <button @click="apareceEsconde(), segundoMetodo()">Aparece/Esconde</button>
    </div>
</template>

<script>
export default {
    name : "ImagemComponent",
    data() {
        return {
            imagemVisivel : true,
            pathImagem : "https://morphoautomacoes.com.br/icons/logo-morpho-automacao-contabil.png",
            valorAlt: "Logo Morpho"
        }
    },
    methods : {
        apareceEsconde() {
            this.imagemVisivel = !this.imagemVisivel
        },
        segundoMetodo() {
            setTimeout(() => {
                alert('Segundo Metodo Acionado')
            }, 2000)
        }
    }
}
</script>

<style scoped>
    .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 40px;
    font-family: "Segoe UI", sans-serif;
    }
    img {
        width: 300px;
        height: auto;
        border: none;
        margin: 16px;
        border-radius : 16px;
        box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
        transition: transform 0.3s ease, box-shadow 0.3s ease;
    }

    img:hover {
        transform: translateY(-6px);
        box-shadow: 0 12px 28px rgba(0, 0, 0, 0.18);
    }
    button {
        padding: 12px 24px;
        font-weight: bold;
        background-color: #007BFF;
        color: white;
        border: none;
        border-radius: 8px;
        cursor: pointer;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        transition: background-color 0.3s ease, transform 0.2s ease, box-shadow 0.2s ease;
    }

    button:hover {
        background-color: #0056b3;
        transform: translateY(-2px);
        box-shadow: 0 6px 18px rgba(0, 0, 0, 0.15);
    }      
</style>
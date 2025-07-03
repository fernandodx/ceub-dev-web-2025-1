<template>
    <div>
      <h1>Menu</h1>
      <div class="scroll-horizontal">
        <div class="card-content" v-for="burguer in listaMenuHamburgues" :key="burguer.id">
          <div class="card-linha">
            <div class="foto-hamburguer">
              <img :src="burguer.foto" :alt="burguer.nome" />
            </div>
            <div class="card-coluna">
              <p class="nome-content">{{ burguer.nome }}</p>
              <p class="preco-content">R$ {{ burguer.valor }},00</p>
              <p class="descricao-content">{{ burguer.descricao }}</p>
              <button @click="selecionarBurguer(burguer)">Selecionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: "MenuView",
    data() {
      return {
        listaMenuHamburgues: [],
      };
    },
    methods: {
      async consultarMenu() {
        const response = await fetch("http://localhost:3000/menu");
        const dados = await response.json();
        this.listaMenuHamburgues = dados.burgues;
        console.log(this.listaMenuHamburgues);
      },
      selecionarBurguer(burguerSelecionado) {
        const param = JSON.stringify(burguerSelecionado);
        const burguerJson = encodeURIComponent(param);
        this.$router.push({
          path: "/config-pedido",
          query: { burguer: burguerJson },
        });
      },
    },
    mounted() {
      this.consultarMenu();
    },
  };
  </script>
  
  <style scoped>
  .scroll-horizontal {
    overflow-x: auto;
    white-space: nowrap;
    padding: 20px 0;
    width: 90%;
    margin: 0 auto;
    box-shadow: inset -10px 0px 15px -20px grey;
    display: flex;
    justify-content: flex-start;
    gap: 20px;
  }
  
  .card-content {
    display: flex;
    flex-direction: column;
    width: 280px;
    min-height: 520px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 8px #444;
    background-color: white;
    flex-shrink: 0;
  }
  
  .foto-hamburguer img {
    width: 100%;
    height: 200px;
    object-fit: cover;
  }
  
  .card-linha {
    display: flex;
    flex-direction: column;
    height: 100%;
  }
  
  .card-coluna {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 15px;
    height: 100%;
  }
  
  .nome-content {
    font-size: 22px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .preco-content {
    font-size: 24px;
    font-weight: bold;
    color: yellowgreen;
    text-align: center;
    margin-bottom: 10px;
  }
  
  .descricao-content {
    font-size: 15px;
    color: gray;
    margin-bottom: 15px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 5;
    -webkit-box-orient: vertical;
    min-height: 100px;
  }
  
  .card-coluna p {
    margin: 0;
  }
  
  .card-coluna button {
    margin-top: auto;
    padding: 10px;
    background-color: rgb(149, 211, 90);
    color: darkslategrey;
    font-weight: bold;
    border-radius: 5px;
    border: none;
    font-size: 16px;
    width: 100%;
    transition: 0.3s ease-in-out;
    cursor: pointer;
  }
  
  .card-coluna button:hover {
    background-color: transparent;
    color: darkslategrey;
    border: 1px solid rgb(149, 211, 90);
  }
  </style>
  
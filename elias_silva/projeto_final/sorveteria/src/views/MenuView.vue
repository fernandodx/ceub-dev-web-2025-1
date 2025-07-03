<template>
  <div>
    <h1 class="titulo-menu">Nosso Cardápio</h1>
    <div id="scroll-horizontal">
      <div id="card-content" v-for="item in listaMenuSushi" :key="item.id">
        <div id="card-linha">
          <div class="foto-sushi">
            <img src="/img/frutas_vermelhas.jpg" :alt="item.nome" />
            <div class="card-coluna">
              <p id="nome-content">{{ item.nome }}</p>
              <p id="preco-content">R$ {{ item.valor }},00</p>
              <p id="descricao-content">{{ item.descricao }}</p>
              <button @click="selecionarItem(item)">Escolher Sushi</button>
            </div>
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
      listaMenuSushi: [],
    };
  },
  methods: {
    async consultarMenu() {
      const response = await fetch("http://localhost:3000/menu");
      const dados = await response.json();
      this.listaMenuSushi = dados.burgues;
      console.log(this.listaMenuSushi);
    },
    selecionarItem(itemSelecionado) {
      const param = JSON.stringify(itemSelecionado);
      const itemJson = encodeURIComponent(param);
      this.$router.push({
        path: "/config-pedido",
        query: { burguer: itemJson },
      });
    },
  },
  mounted() {
    this.consultarMenu();
  },
};
</script>

<style scoped>
.titulo-menu {
  font-size: 2.4rem;
  margin-top: 20px;
  margin-bottom: 40px;
  color: #c0392b;
  font-family: "Noto Serif JP", serif;
}

#scroll-horizontal {
  flex: 1;
  overflow-x: auto;
  white-space: nowrap;
  width: 95%;
  margin: 0 auto;
  box-shadow: inset -10px 0px 15px -20px #999;
}

#card-content {
  display: inline-block;
  width: 280px;
  min-height: 500px;
  margin: 20px;
  border: 1px solid #ddd;
  border-radius: 12px;
  overflow: hidden;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  background-color: #fffaf0;
}

.foto-sushi {
  flex-shrink: 0;
}

.foto-sushi img {
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 12px 12px 0 0;
}

#nome-content {
  font-size: 1.4rem;
  font-weight: bold;
  text-align: center;
  color: #2c3e50;
  margin: 12px;
}

#preco-content {
  font-size: 1.6rem;
  font-weight: bold;
  text-align: center;
  color: #27ae60;
}

#descricao-content {
  font-size: 0.95rem;
  text-align: justify;
  color: #555;
  margin: 16px;
  white-space: pre-line;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
}

.card-coluna p {
  margin: 0;
}

.card-coluna button {
  margin-top: auto;
  padding: 10px;
  background-color: #e74c3c;
  color: #fff;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  font-size: 14px;
  width: 100%;
  transition: 0.4s;
  cursor: pointer;
}
.card-coluna button:hover {
  background-color: #fff;
  color: #e74c3c;
  border: 1px solid #e74c3c;
}

.card-linha {
  display: flex;
  flex-direction: row;
  height: 100%;
}

.card-coluna {
  flex-grow: 1;
  padding: 15px;
  height: 100%;
}
</style>

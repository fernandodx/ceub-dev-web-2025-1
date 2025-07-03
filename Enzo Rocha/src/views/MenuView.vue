<template>
  <div class="menu-container">
    <h1>Menu</h1>
    <div id="scroll-horizontal">
      <div id="card-content" v-for="burguer in listaMenuHamburgues" :key="burguer.id">
        <div class="card-linha">
          <div class="foto-hamburguer">
            <img :src="burguer.foto" :alt="burguer.nome">
            <div class="card-coluna">
              <p id="nome-content">{{ burguer.nome }}</p>
              <p id="preco-content">R$ {{ burguer.valor }},00</p>
              <p id="descricao-content">{{ burguer.descricao }}</p>
              <button @click="selecionarBurguer(burguer)">Selecionar</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MenuView',
  data() {
    return {
      listaMenuHamburgues: []
    }
  },
  methods: {
    async consultarMenu() {
      try {
        const response = await fetch('http://localhost:3000/menu')
        const dados = await response.json()
        this.listaMenuHamburgues = dados.burgues
      } catch (error) {
        console.error('Erro ao consultar menu:', error)
      }
    },
    selecionarBurguer(burguerSelecionado) {
      const param = JSON.stringify(burguerSelecionado)
      const burguerJson = encodeURIComponent(param)
      this.$router.push({
        path: '/config-pedido',
        query: { burguer: burguerJson }
      })
    }
  },
  mounted() {
    this.consultarMenu()
  }
}
</script>

<style scoped>
.menu-container {
  padding: 20px;
}

#scroll-horizontal {
  display: flex;
  overflow-x: auto;
  gap: 20px;
  padding: 20px;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

#card-content {
  flex: 0 0 280px;
  min-height: 500px;
  border: 1px solid #ddd;
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}

.foto-hamburguer img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.card-coluna {
  padding: 15px;
}

#nome-content {
  font-size: 24px;
  font-weight: bold;
  margin: 12px 0;
}

#preco-content {
  font-size: 28px;
  font-weight: bold;
  color: #9acd32;
  margin: 12px 0;
}

#descricao-content {
  font-size: 14px;
  color: #666;
  margin: 12px 0;
  line-height: 1.4;
  height: 120px;
  overflow: hidden;
}

button {
  width: 100%;
  padding: 12px;
  background-color: rgb(149, 211, 90);
  color: #fff;
  border: none;
  border-radius: 5px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;
}

button:hover {
  background-color: #7ab356;
  transform: translateY(-2px);
}
</style>
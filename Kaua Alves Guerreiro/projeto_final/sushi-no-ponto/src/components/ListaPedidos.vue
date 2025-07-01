<template>
  <div>
    <table v-if="pedidos.length">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sushi</th>
          <th>Molho</th>
          <th>Hashis</th>
          <th>Guardanapos</th>
          <th>Molheiras</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in pedidos" :key="p.id">
          <td>{{ p.nome }}</td>
          <td>{{ p.escolhaDoSushi }}</td>
          <td>{{ p.molho }}</td>
          <td>{{ p.hashis ? 'Sim' : 'Não' }}</td>
          <td>{{ p.guardanapos ? 'Sim' : 'Não' }}</td>
          <td>{{ p.molheiras ? 'Sim' : 'Não' }}</td>
          <td>{{ p.status }}</td>
          <td>
            <button @click="atualizar(p)" :disabled="p.status === 'Entregue'">
              Entregar
            </button>
            <button @click="remover(p)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>

    <!-- Nenhum pedido -->
    <MensagemComponente
      v-if="!pedidos.length"
      tipo="alerta"
      texto="Nenhum pedido cadastrado."
      :visivel="true"
    />

    <!-- Sucesso ao atualizar -->
    <MensagemComponente
      v-if="mensagemAtualizar"
      tipo="sucesso"
      texto="Status alterado para Entregue!"
      :visivel="true"
    />

    <!-- Sucesso ao remover -->
    <MensagemComponente
      v-if="mensagemRemover"
      tipo="sucesso"
      texto="Pedido removido com sucesso!"
      :visivel="true"
    />
  </div>
</template>

<script>
import axios from 'axios'
import MensagemComponente from './MensagemComponente.vue'

export default {
  name: 'ListaPedidos',
  components: { MensagemComponente },
  data() {
    return {
      pedidos: [],
      mensagemAtualizar: false,
      mensagemRemover: false
    }
  },
  mounted() {
    this.carregarPedidos()
  },
  methods: {
    async carregarPedidos() {
      try {
        const res = await axios.get('http://localhost:3001/pedidos');
        console.log('Resposta do servidor:', res.data);
        this.pedidos = res.data;
      } catch (err) {
        console.error('Erro ao carregar pedidos:', err);
      }
    },
    async atualizar(pedido) {
      await axios.patch(`http://localhost:3001/pedidos/${pedido.id}`, {
        status: 'Entregue'
      })
      this.mensagemAtualizar = true
      this.carregarPedidos()
      setTimeout(() => this.mensagemAtualizar = false, 3000)
    },
    async remover(pedido) {
      await axios.delete(`http://localhost:3001/pedidos/${pedido.id}`)
      this.mensagemRemover = true
      this.carregarPedidos()
      setTimeout(() => this.mensagemRemover = false, 3000)
    }
  }
}
</script>

<style scoped>
table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 16px;
}
th,
td {
  padding: 8px;
  border: 1px solid #ccc;
  text-align: center;
}
button {
  margin: 0 4px;
  padding: 6px 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:first-of-type {
  background-color: #2a9d8f;
  color: white;
}
button:first-of-type:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
button:last-of-type {
  background-color: #e63946;
  color: white;
}
</style>

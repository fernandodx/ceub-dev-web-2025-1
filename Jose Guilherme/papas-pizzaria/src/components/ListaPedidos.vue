<template>
  <div>
    <table v-if="pedidos.length">
      <!-- cabeçalho -->
      <thead>
        <tr>
          <th>Nome</th><th>Sabor</th><th>Tamanho</th><th>Massa</th><th>Status</th><th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="p in pedidos" :key="p.id">
          <td>{{ p.nome }}</td>
          <td>{{ p.sabor }}</td>
          <td>{{ p.tamanho }}</td>
          <td>{{ p.tipoMassa }}</td>
          <td>{{ p.status }}</td>
          <td>
            <button @click="atualizar(p)">Entregar</button>
            <button @click="remover(p)">Excluir</button>
          </td>
        </tr>
      </tbody>
    </table>
    <MensagemComponente v-if="!pedidos.length" tipo="alerta" texto="Nenhum pedido." :visivel="true" />
    <MensagemComponente v-if="mensagemAtualizar" tipo="sucesso" texto="Status atualizado!" :visivel="true" />
    <MensagemComponente v-if="mensagemRemover" tipo="sucesso" texto="Pedido removido!" :visivel="true" />
  </div>
</template>

<script>
import axios from 'axios'
import MensagemComponente from './Mensagem.vue'

export default {
  props: ['pedidoConfirmado'],
  components: { MensagemComponente },
  data() {
    return {
      pedidos: [],
      mensagemAtualizar: false,
      mensagemRemover: false
    }
  },
  watch: {
    pedidoConfirmado() {
      this.carregarPedidos()
    }
  },
  mounted() {
    this.carregarPedidos()
  },
  methods: {
    async carregarPedidos() {
      const res = await axios.get('http://localhost:3000/pedidos')
      this.pedidos = res.data
    },
    async atualizar(p) {
      await axios.patch(`http://localhost:3000/pedidos/${p.id}`, { status: 'Entregue' })
      this.mensagemAtualizar = true
      this.carregarPedidos()
      setTimeout(() => (this.mensagemAtualizar = false), 3000)
    },
    async remover(p) {
      await axios.delete(`http://localhost:3000/pedidos/${p.id}`)
      this.mensagemRemover = true
      this.carregarPedidos()
      setTimeout(() => (this.mensagemRemover = false), 3000)
    }
  }
}
</script>

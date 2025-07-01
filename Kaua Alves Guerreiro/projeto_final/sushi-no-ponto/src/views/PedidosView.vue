<template>
  <div>
    <h2>Faça seu pedido</h2>
    <PedidoForm @pedidoConfirmado="atualizarLista" />

    <h2>Pedidos realizados</h2>
    <ListaPedidos ref="lista" />
  </div>
</template>

<script>
import PedidoForm from '../components/PedidoForm.vue'
import ListaPedidos from '../components/ListaPedidos.vue'

export default {
  name: 'PedidosView',
  components: {
    PedidoForm,
    ListaPedidos
  },
  methods: {
    atualizarLista() {
      // Recarrega a lista após novo pedido
      this.$refs.lista.carregarPedidos()
    }
  }
}
</script>

<style scoped>
h2 {
  margin-top: 20px;
  color: #333;
}
</style>

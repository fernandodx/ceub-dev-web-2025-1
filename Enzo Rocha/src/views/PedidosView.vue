<template>
  <div class="pedidos-view">
    <h1>Gerenciar Pedidos</h1>
    <lista-pedido-component/>
  </div>
</template>

<script>
import ListaPedidoComponent from '@/components/ListaPedidoComponent.vue'

export default {
  name: 'PedidosView',
  components: {
    ListaPedidoComponent
  }
}
</script>

<style scoped>
.pedidos-view {
  padding: 20px;
}
</style>
<template>
  <div>
    <PedidoForm @pedidoConfirmado="atualizarLista" />
    <ListaPedidos :pedidoConfirmado="confirmado" />
  </div>
  <div class="page-bg">
    <!-- tabela de pedidos e mensagens -->
  </div>
</template>
<style scoped>
.page-bg {
  background-color: transparent;
}
</style>

<script>
import PedidoForm from '@/components/PedidoForm.vue'
import ListaPedidos from '@/components/ListaPedidos.vue'

export default {
  components: { PedidoForm, ListaPedidos },
  data() {
    return { confirmado: 0 }
  },
  methods: {
    atualizarLista() {
      this.confirmado++
    }
  }
}
</script>

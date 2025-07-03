<template>
  <div class="config-wrapper">
    <h1 class="titulo-config">Monte seu Pedido 🍨</h1>
    <pedido-component :produto="produtoSelecionado" />
  </div>
</template>

<script>
import PedidoComponent from "@/components/PedidoComponent.vue";

export default {
  name: "ConfiguracaoPedidoView",
  components: {
    PedidoComponent,
  },
  data() {
    return {
      produtoSelecionado: null,
    };
  },
  mounted() {
    const query = this.$route.query;
    if (query.sorvete) {
      const decodeProduto = JSON.parse(decodeURIComponent(query.sorvete));
      this.produtoSelecionado = decodeProduto;
    }
  },
};
</script>

<style scoped>
.config-wrapper {
  padding: 2rem;
  text-align: center;
  background-color: #f8f8f8;
}

.titulo-config {
  font-size: 2rem;
  color: #c0392b;
  font-family: "Noto Serif JP", serif;
  margin-bottom: 30px;
}
</style>

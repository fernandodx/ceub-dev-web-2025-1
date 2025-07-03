<template>
  <div class="config-wrapper">
    <h1 class="titulo-config">Monte seu Pedido 🍱</h1>
    <pedido-component :burguer="sushiSelecionado" />
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
      sushiSelecionado: null,
    };
  },
  mounted() {
    const query = this.$route.query;
    if (query.burguer) {
      const decodeSushi = JSON.parse(decodeURIComponent(query.burguer));
      this.sushiSelecionado = decodeSushi;
    }
  },
};
</script>

<style scoped>
.config-wrapper {
  padding: 2rem;
  text-align: center;
  background-color: #15161a;
}

.titulo-config {
  font-size: 2rem;
  color: #e74c3c;
  font-family: "Noto Serif JP", serif;
  margin-bottom: 30px;
}
</style>

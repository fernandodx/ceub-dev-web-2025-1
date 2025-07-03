<template>
  <div class="config-pedido">
    <h1>Configurar Pedido</h1>
    <pedido-component :burguer="hamburguerSelecionado"/>
  </div>
</template>

<script>
import PedidoComponent from '@/components/PedidoComponent.vue'

export default {
  name: 'ConfiguracaoPedidoView',
  components: {
    PedidoComponent
  },
  data() {
    return {
      hamburguerSelecionado: null
    }
  },
  mounted() {
    const query = this.$route.query
    if (query.burguer) {
      try {
        this.hamburguerSelecionado = JSON.parse(decodeURIComponent(query.burguer))
      } catch (error) {
        console.error('Erro ao decodificar dados do hambúrguer:', error)
        this.$router.push('/menu')
      }
    }
  }
}
</script>

<style scoped>
.config-pedido {
  padding: 20px;
}
</style>
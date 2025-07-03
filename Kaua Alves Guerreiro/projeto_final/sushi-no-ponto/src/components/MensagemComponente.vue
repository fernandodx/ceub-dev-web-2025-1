<template>
  <div v-show="visivel" :class="['mensagem', tipo]">
    {{ texto }}
  </div>
</template>

<script>
export default {
  name: 'MensagemComponente',
  props: {
    tipo: { type: String, required: true },    // 'alerta' ou 'sucesso'
    texto: { type: String, required: true },
    visivel: { type: Boolean, required: true }
  }
}
</script>

<style scoped>
.mensagem {
  padding: 10px;
  margin-bottom: 12px;
  border-radius: 4px;
  font-weight: bold;
  text-align: center;
}
.sucesso {
  background-color: #d4edda;
  color: #155724;
}
.alerta {
  background-color: #f8d7da;
  color: #721c24;
}
</style>

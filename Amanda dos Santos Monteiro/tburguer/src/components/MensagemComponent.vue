<template>
  <div v-show="visivel" :class="['mensagem', tipo]">
    {{ texto }}
  </div>
</template>

<script>
export default {
  name: 'MensagemComponent',
  props: {
    tipo: {
      type: String,
      required: true,
      validator: value => ['alerta', 'sucesso'].includes(value)
    },
    texto: {
      type: String,
      required: true
    },
    visivel: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.mensagem {
  padding: 12px 20px;
  border-radius: 6px;
  margin: 10px 0;
  font-weight: bold;
  font-size: 1rem;
  transition: opacity 0.3s;
}
.mensagem.alerta {
  background: #ffe0e0;
  color: #a94442;
  border: 1px solid #f5c6cb;
}
.mensagem.sucesso {
  background: #e0ffe6;
  color: #155724;
  border: 1px solid #c3e6cb;
}
</style> 
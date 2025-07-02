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
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: bold;
  font-size: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  transition: opacity 0.4s ease, transform 0.4s ease;
  opacity: 1;
  transform: translateY(0);
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

/* Quando invisível (v-show = false) */
.mensagem[style*="display: none"] {
  opacity: 0;
  transform: translateY(-20px);
}
</style>
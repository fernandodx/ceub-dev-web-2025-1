<template>
  <div v-show="mostrar" class="mensagem-container" :class="tipoClasse">
    <div class="mensagem-content">
      <span class="mensagem-texto">{{ texto }}</span>
      <button @click="fecharMensagem" class="fechar-btn">&times;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "MensagemComponent",
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
    mostrar: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    tipoClasse() {
      return {
        'mensagem-alerta': this.tipo === 'alerta',
        'mensagem-sucesso': this.tipo === 'sucesso'
      }
    }
  },
  methods: {
    fecharMensagem() {
      this.$emit('fechar')
    }
  }
}
</script>

<style scoped>
.mensagem-container {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 1000;
  min-width: 300px;
  max-width: 400px;
  animation: slideIn 0.3s ease-out;
}

.mensagem-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.mensagem-alerta .mensagem-content {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.mensagem-sucesso .mensagem-content {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
}

.mensagem-texto {
  flex: 1;
  font-weight: 500;
}

.fechar-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 10px;
  padding: 0;
  width: 20px;
  height: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  transition: background-color 0.2s;
}

.mensagem-alerta .fechar-btn {
  color: #856404;
}

.mensagem-alerta .fechar-btn:hover {
  background-color: #ffeaa7;
}

.mensagem-sucesso .fechar-btn {
  color: #155724;
}

.mensagem-sucesso .fechar-btn:hover {
  background-color: #c3e6cb;
}

@keyframes slideIn {
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
}
</style> 
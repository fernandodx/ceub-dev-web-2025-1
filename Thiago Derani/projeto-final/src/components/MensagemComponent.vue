<template>
  <div v-show="mostrar" class="mensagem-container" :class="tipoClasse">
    <div class="mensagem-content">
      <span class="mensagem-texto">{{ texto }}</span>
      <button v-if="mostrarBotaoFechar" @click="fecharMensagem" class="fechar-btn">&times;</button>
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
      validator: function (value) {
        return ['alerta', 'sucesso'].indexOf(value) !== -1
      }
    },
    texto: {
      type: String,
      required: true
    },
    mostrar: {
      type: Boolean,
      default: false
    },
    mostrarBotaoFechar: {
      type: Boolean,
      default: true
    },
    tempoAutoFechar: {
      type: Number,
      default: 0 // 0 = não fecha automaticamente
    }
  },
  computed: {
    tipoClasse() {
      return `mensagem-${this.tipo}`
    }
  },
  watch: {
    mostrar(newVal) {
      if (newVal && this.tempoAutoFechar > 0) {
        setTimeout(() => {
          this.fecharMensagem()
        }, this.tempoAutoFechar)
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
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  animation: slideIn 0.3s ease-out;
}

.mensagem-content {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 20px;
}

.mensagem-texto {
  flex: 1;
  font-weight: 500;
  font-size: 14px;
}

.fechar-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  margin-left: 12px;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.fechar-btn:hover {
  opacity: 1;
}

.mensagem-alerta {
  background-color: #fff3cd;
  border: 1px solid #ffeaa7;
  color: #856404;
}

.mensagem-sucesso {
  background-color: #d4edda;
  border: 1px solid #c3e6cb;
  color: #155724;
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
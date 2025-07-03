<template>
  <div :class="['mensagem-flutuante', tipo]" v-show="texto">
    <p>{{ texto }}</p>
  </div>
</template>

<script>
export default {
  name: "MensagemComponent",
  props: {
    tipo: String, // 'sucesso' ou 'alerta'
    texto: String,
  },
};
</script>

<style scoped>
.mensagem-flutuante {
  position: fixed;
  top: 30px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
  padding: 16px 24px;
  border-radius: 8px;
  font-weight: bold;
  text-align: center;
  min-width: 300px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
  animation: fadeInOut 4s ease forwards;
}

.mensagem-flutuante.sucesso {
  background-color: #d4edda;
  color: #155724;
}
.mensagem-flutuante.alerta {
  background-color: #f8d7da;
  color: #721c24;
}

@keyframes fadeInOut {
  0% {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
  10% {
    opacity: 1;
    transform: translate(-50%, 0);
  }
  90% {
    opacity: 1;
  }
  100% {
    opacity: 0;
    transform: translate(-50%, -20px);
  }
}
</style>

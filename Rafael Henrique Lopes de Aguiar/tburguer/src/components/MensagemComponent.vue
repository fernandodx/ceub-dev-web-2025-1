<template>
  <div v-show="mensagem" :class="['mensagem', tipo]">
    {{ mensagem }}
  </div>
</template>

<script>
export default {
  name: 'MensagemComponent',
  props: {
    tipo: {
      type: String,
      default: 'sucesso', // ou 'alerta'
      validator: value => ['sucesso', 'alerta'].includes(value)
    },
    mensagem: {
      type: String,
      default: ''
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
  transition: all 0.3s;
}
.sucesso {
  background: #e6ffed;
  color: #207544;
  border: 1px solid #b7ebc6;
}
.alerta {
  background: #fff4e5;
  color: #a15c00;
  border: 1px solid #ffd591;
}
</style> 
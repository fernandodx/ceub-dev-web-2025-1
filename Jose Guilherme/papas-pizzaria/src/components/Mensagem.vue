<!-- src/components/Mensagem.vue -->
<template>
  <div v-show="visivel" :class="['mensagem', tipo]">
    {{ texto }}
  </div>
</template>

<script>
export default {
  name: 'MensagemComponente',
  props: ['tipo', 'texto', 'visivel']
}
</script>

<style scoped>
.mensagem {
  padding: 10px;
  margin-bottom: 10px;
  border-radius: 4px;
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

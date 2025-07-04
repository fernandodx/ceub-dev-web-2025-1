<template>
    <div v-show="mostrar" :class="['alerta', tipo]">
      {{ texto }}
    </div>
  </template>
  
  <script>
  export default {
    name: "AlertSuccess",
    props: {
      tipo: { type: String, default: "sucesso" }, 
      texto: { type: String, required: true },
      mostrar: { type: Boolean, default: false },
    },
  };
  </script>
  
  <style scoped>
  .alerta {
    padding: 12px 20px;
    margin: 10px 0;
    border-radius: 6px;
    font-weight: bold;
  }
  .sucesso {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
  }
  .alerta {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
  </style>
  
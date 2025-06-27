<template>
  <div>
      <p>Nome: {{ nome }}</p>
      <p>E-mail: {{ email }}</p>
      <h1 v-show="isSaoPauloCampeao">São Paulo Campeão</h1>
      <br>
      <button @click="verificarCampeao()">É Campeão</button>

  </div>
</template>

<script>
  export default {
      name: "UsuarioComponent",
      data() {
          return {
              nome : "Kauã",
              email : "kaua@gmail.com",
              isSaoPauloCampeao : true
          }
      },
      methods: {
          verificarCampeao(){
              this.isSaoPauloCampeao = !this.isSaoPauloCampeao;
          }
      }

  }

</script>
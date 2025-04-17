<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isPalmeirasCampeao">Palmeiras Campeão</h1>
        <br>
        <button @click="verificarCampeao()">É Campeão</button>
    </div>
</template>

<script>
export default {
    name: "UsuarioComponent",
    data() {
        return {
            nome: "Gabriel",
            email: "gabriel.aaraujo@sempreceub.com",
            isPalmeirasCampeao : true
        }
    },
    methods: {
        verificarCampeao(){
            this.isPalmeirasCampeao = !this.isPalmeirasCampeao;
        }
    }
}
</script>

<style></style>
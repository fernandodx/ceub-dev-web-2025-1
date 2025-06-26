<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isVascoCampeao">Vasco Campeão</h1>
        <br>
        <button @click="verificarCampeao()">Caldeirão Chegou!</button>

    </div>
</template>

<script>
    export default {
        name: "UsuarioComponent",
        data () {
            return {
                nome : "Amanda",
                email: "amanda@gmail.com",
                isVascoCampeao : true
            }
        },
        methods: {
            verificarCampeao(){
                this.isVascoCampeao = !this.isVascoCampeao;
            }
        }
    }
</script>
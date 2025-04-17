<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isBotaofogoCampeao">Botafogo Campeão </h1>
        <br>
        <button @click="verificarCampeao">É Campeão</button>

    </div>
</template>

<script>
    export default {
        name: "UsuarioComponent",
        data() {
            return {
                nome : "Elias",
                email : "elias@gmail.com",
                isBotaofogoCampeao: true,
            }
        },
        methods: {
            verificarCampeao(){
                this.isBotaofogoCampeao = !this.isBotaofogoCampeao;
            }
        }

    }

</script>
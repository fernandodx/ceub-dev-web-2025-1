<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isFlamengoCampeao">Flamengo Campeão</h1>
        <br>
        <button @click="verificarCampeao()">É Campeão</button>

    </div>
</template>

<script>
export default {
    name: "UsuarioComponent",
    data() {
        return {
            nome: "Bernardo",
            email: "bernardoaraujoalves@gmail.com",
            isFlamengoCampeao: true
        }
    },
    methods: {
        verificarCampeao() {
            this.isFlamengoCampeao = !this.isFlamengoCampeao;
        }
    }

}

</script>
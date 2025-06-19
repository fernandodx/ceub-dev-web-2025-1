<template>
    <div>
        <p>Nome: {{  nome  }} </p>
        <p>E-mail: {{  email  }}</p>
        <h1 v-show="isBotaFogoCampeao">Vasco Campeão</h1>
        <br>
        <button @click="verificarCampeao()">É Campeão</button>

    </div>

</template>

<script>
    export default {
        name: "UsuarioComponent",
        data () {
            return {
                nome : "Jhonathan",
                email : "gmartins@sempreceub.com",
                isBotaFogoCampeao : true

            }
        },
        methods: {
            verificarCampeao()  {
                this.isBotaFogoCampeao = !this.isBotaFogoCampeao;
            }
        }
    }

</script>

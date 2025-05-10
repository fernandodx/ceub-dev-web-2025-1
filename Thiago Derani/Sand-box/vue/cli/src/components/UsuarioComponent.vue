<template>
    <div>
        <p>Nome: {{ nome }} </p>
        <p>E-mail:{{ email }}</p>

        <h1 v-show="isBotafogoCampeao">Botafogo Campeão</h1>
        <br>
        <button @click="verificarCampeão()">É Campeão</button>

    </div>

</template>

<script>
    export default{
        name: "UsuarioComponent",
        data(){
            return{
                nome : "Thiago",
                email:"thiago.derani@sempreceub.com",
                isBotafogoCampeao : true

            }
        },
        methods:{
            verificarCampeão(){
                this.isBotafogoCampeao = !this.isBotafogoCampeao;
            }

        }
    }

</script>

<style>

</style>
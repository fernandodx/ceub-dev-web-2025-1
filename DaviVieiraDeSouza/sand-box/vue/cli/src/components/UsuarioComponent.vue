<template>
    <div>
        <p>Nome: {{ nome }}</p>
        <p>E-mail: {{ email }}</p>
        <h1 v-show="isFluminenseCampeão">Fluminense Campeão</h1>
        <br>
        <button @click="verificarCampeao()">É Campeão</button>
    </div>
    
</template>

<script>
    export default{
        name: "UsuarioComponent",
        data(){
            return {
                nome : "Davi Blinder",
                email : "davi.vieiras@sempreceub.com",
                isFluminenseCampeão : true
            }
        },
        methods: {
            verificarCampeao(){
                this.isFluminenseCampeão = !this.isFluminenseCampeão;
            }
        }
    }

</script>

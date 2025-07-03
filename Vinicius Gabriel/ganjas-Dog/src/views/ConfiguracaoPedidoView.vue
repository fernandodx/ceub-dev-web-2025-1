<template>
    <div>
        <h1>Escolha suas preferências</h1>
        <pedido-component :hotDog ="this.hotDogSelecionado"/>
    </div>
</template>

<script>
    import PedidoComponent from '@/components/PedidoComponent.vue';
    export default {
        name : "ConfiguracaoPedidoView",
        components : {
           PedidoComponent 
        },
        data() {
            return {
                hotDogSelecionado : null
            }
        },
        mounted(){
           const query = this.$route.query;
           if(query.hotDog){
            const decodeHotDog = JSON.parse(decodeURIComponent(query.hotDog));
            this.hotDogSelecionado = decodeHotDog;
           }
        }
    }
</script>

<style scoped>
</style>
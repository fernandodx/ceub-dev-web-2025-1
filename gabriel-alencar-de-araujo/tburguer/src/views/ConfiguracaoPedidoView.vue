<template>
    <div>
        <h1>
            Configurar pedido
        </h1>
        <pedido-compontent :burguer="this.hamburguerSelecionado" />
    </div>
</template>

<script>
    import PedidoCompontent from '@/components/PedidoCompontent.vue';
    export default {
        name : "ConfiguracaoPedidoView",
        components: {
            PedidoCompontent
        },
        data(){
            return{
                hamburguerSelecionado: null
            }
        },
        mounted(){
            const query = this.$route.query;
            if (query.burguer){
            const decodeBurguer = JSON.parse(decodeURIComponent(query.burguer))
            this.hamburguerSelecionado = decodeBurguer
            }
        }
    }
</script>

<style scoped>
</style>
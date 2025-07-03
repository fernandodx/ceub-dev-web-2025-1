<template>
    <div>
        <h1>Configuração do Taco</h1>
        <pedido-component :taco="this.tacoSelecionado"/>
    </div>

</template>

<script>
    import PedidoComponent from '@/components/PedidoComponent.vue';
    export default{
        name: "ConfiguracaoPedidoView",
        components : {
            PedidoComponent
        },
        data() {
            return {
                tacoSelecionado : null
            }
        },
        mounted() {
            const query = this.$route.query;
            if (query.taco) {
                const decodeTaco = JSON.parse(decodeURIComponent(query.taco));
                this.tacoSelecionado = decodeTaco;
            }

        }
    }

</script>

<style scoped></style>              
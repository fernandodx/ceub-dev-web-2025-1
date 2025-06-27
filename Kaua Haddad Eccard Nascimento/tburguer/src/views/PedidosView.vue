<template>
    <div>
        <h1>Pedido</h1>
        <lista-pedido-component/>
        
        <mensagem-component
            :tipo="mensagem.tipo"
            :texto="mensagem.texto"
            :mostrar="mensagem.mostrar"
            :auto-fechar="5000"
            @fechar="fecharMensagem"
        />
    </div>
</template>

<script>
    import ListaPedidoComponent from '@/components/ListaPedidoComponent.vue';
    import MensagemComponent from '@/components/MensagemComponent.vue';
    
    export default {
        name: "PedidosView",
        components: {
            ListaPedidoComponent,
            MensagemComponent
        },
        data() {
            return {
                mensagem: {
                    tipo: 'sucesso',
                    texto: '',
                    mostrar: false
                }
            }
        },
        methods: {
            mostrarMensagem(tipo, texto) {
                this.mensagem.tipo = tipo;
                this.mensagem.texto = texto;
                this.mensagem.mostrar = true;
            },
            fecharMensagem() {
                this.mensagem.mostrar = false;
            }
        }
    }
</script>

<style scoped>
</style>
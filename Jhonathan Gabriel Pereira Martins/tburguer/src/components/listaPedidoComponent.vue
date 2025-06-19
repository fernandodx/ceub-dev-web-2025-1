<template>
    <div>
        
    </div>
</template>

<script>
    export default{
        name: "listaComponentComponent",
        data() {
            return {
                listaPedidosRealizados: [],
                listaStatusPedido: []
            }
        },
        methods: {
            async consultarPedidos(){
                const response = await fetch("http://localhost:3000/pedidos");
                this.listaPedidosRealizados = await response.json();
            },
            async consultarStatus() {
                const response = await fetch("http://localhost:3000/status_pedido");
                this.listaStatusPedido = await response.json();
            },
            async deletarPedido(id) {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });
            },
            async atualizarStatusPedido(event, idStatusAtual) {
                const idPedidoAtualizado = event.target.value;

                const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});
                await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method : "PATCH",
                    headers: {"Content-Type" : "application/json"},
                    body: atualizacaoJson
                })

            }
        }
    }
</script>

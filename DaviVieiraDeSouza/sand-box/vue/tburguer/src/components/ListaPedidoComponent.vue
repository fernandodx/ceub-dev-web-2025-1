<template>
    <div>


    </div>
</template>
<script>
    export default{
        name: "ListaPedidoComponent",
        data(){
            return{
                listaPedidosRealizados: [],
                listaStatusPedidos: []
            }

        },
        methods: {
            async consultarPedidos(){
                const responde = await fetch("http://localhost:3000/pedidos");
                this.listaPedidosRealizados = await Response.json();
            },
            async consultarStatus(){
                const response = await fetch("http://localhost:3000/status_pedido");
                this.listaStatusPedidos = await response.json();
            },
            async deletarPedido(id){
                const response = await fetch(`http://localhost:3000/pedidos/${id}`,{
                    method: "DELETE"
                });

            },
            async atualizarStatusPedido(event, idStatusAtual){
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
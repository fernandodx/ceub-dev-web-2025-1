<template>
    <div>

    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default  {
    name: "ListaPedidoComponent",
    data() {
        return {
            listaPedidosRealizados: [],
            listaStatusPedidos: []
        }
    },
    methods: {
        async consultarPedidos() {
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizados = await response.json();
        },
        async consultaStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json;
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

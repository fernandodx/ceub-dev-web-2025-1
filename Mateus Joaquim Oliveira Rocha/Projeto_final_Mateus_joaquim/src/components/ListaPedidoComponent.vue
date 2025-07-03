<template>
    <div>
        <MessageComponent
            v-if="showMsg"
            :type="msgType"
            :text="msgText"
            :show="showMsg"
        />
        <div v-if="listaPedidosRealizados.length > 0" id="pedidos-tabela">
            <div>
                <div id="pedidos-tabela-cabecalho">
                    <div id="ordem-id">#ID</div>
                    <div>Nome</div>
                    <div>Hamburguer</div>
                    <div>Ponto</div>
                    <div>Opcionais</div>
                    <div>Status</div>
                    <div id="div-acoes">Ações</div>
                </div>
            </div>
            <div class="pedidos-tabela-linha" v-for="pedido in listaPedidosRealizados" :key="pedido.id">
                <div id="ordem-numero">{{ pedido.id }}</div>
                <div>{{ pedido.nome }}</div>
                <div>{{ pedido.hamburguer.nome }}</div>
                <div>{{ pedido.ponto.descricao }}</div>
                <div>
                    <ul>
                        <li v-for="(complemento, index) in pedido.complementos" :key="index" >{{ complemento.nome }}</li>
                    </ul>
                    <div class="divisor"></div>
                    <ul>
                        <li v-for="bebida in pedido.bebidas" :key="bebida.id" >{{ bebida.nome }}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">
                        <option value="">Selecione</option>  
                        <option v-for="status in listaStatusPedido" 
                                :key="status.id" 
                                :selected="status.id == pedido.statusId"
                                :value="status.id">{{ status.descricao }}</option>     
                    </select>
                </div>
                <div id="div-acoes">
                    <img src="/img/icone_lixeira.png" 
                        alt="Excluir" 
                        width="35px" 
                        height="35px" 
                        @click="deletarPedido(pedido.id)"/>
                </div>
            </div>
        </div>
        <p v-else>Nenhum pedido cadastrado.</p>
    </div>
</template>
<script>
import MessageComponent from "./MessageComponent.vue";
export default {
    name: "ListaPedidoComponent",
    components: {
        MessageComponent
    },
    data() {
        return {
            listaPedidosRealizados: [],
            listaStatusPedido: [],
            showMsg: false,
            msgType: "success",
            msgText: ""
        }
    },
    methods: {
        async consultarPedidos() {
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizados = await response.json();
        },
        async consultaStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json();
        },
        async deletarPedido(id) {
            await fetch(`http://localhost:3000/pedidos/${id}`, {
                method: "DELETE"
            });
            this.msgText = "Pedido deletado com sucesso!";
            this.msgType = "success";
            this.showMsg = true;
            this.consultarPedidos();
            setTimeout(() => (this.showMsg = false), 2000);
        },
        async atualizarStatusPedido(event, idPedido){
            const idPedidoAtualizado = event.target.value;

            const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});
            await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
                method : "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: atualizacaoJson
            });
            this.msgText = "Status atualizado com sucesso!";
            this.msgType = "success";
            this.showMsg = true;
            this.consultarPedidos();
            setTimeout(() => (this.showMsg = false), 2000);
        }
    },
    mounted() {
        this.consultarPedidos();
        this.consultaStatus();
    }
}
</script>

<style scoped>
/* ... seu CSS original ... */
</style>
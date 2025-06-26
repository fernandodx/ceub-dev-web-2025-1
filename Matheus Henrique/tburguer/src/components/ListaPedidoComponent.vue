<template>
    <div>
        <MessageComponent 
            :show="showMessage" 
            :type="messageType" 
            :message="messageText"
            @close="showMessage = false"
        />
        
        <div v-if="listaPedidosRealizados.length === 0" class="no-pedidos">
            <p>Nenhum pedido cadastrado ainda.</p>
        </div>
        
        <div v-else>
            <div id="pedidos-tabela">
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
            </div>
            <div class="pedido-tabela-linha" v-for="pedido in listaPedidosRealizados" :key="pedido.id">
                <div id="ordem-numero">{{ pedido.id }}</div>
                <div>{{ pedido.nome }}</div>
                <div>{{ pedido.hamburguer.nome }}</div>
                <div>{{ pedido.ponto.descricao }}</div>
                <div>
                    <ul>
                        <li v-for="(complemento, index) in pedido.complementos || pedido.complemento || []" :key="index" >{{ complemento.nome }}</li>
                    </ul>
                    <div class="divisor"></div>
                     <ul>
                        <li v-for="bebida in pedido.bebidas || []" :key="bebida.id" >{{ bebida.nome }}</li>
                    </ul>
                </div>
                <div>
                    <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">

                        <option value="">Selecione</option>
                        <option v-for="status in listaStatusPedido" 
                        :key="status.id"
                        :selected="status.id == pedido.statusId"
                        :value="status.id">{{ status.descricao }} </option>

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
    </div>
</template>

<script>
import MessageComponent from './MessageComponent.vue'

export default {
    name: "ListaPedidoComponent",
    components: {
        MessageComponent
    },
    data() {
        return {
            listaPedidosRealizados: [],
            listaStatusPedido: [],
            showMessage: false,
            messageType: 'success',
            messageText: ''
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
        showSuccessMessage(message) {
            this.messageType = 'success';
            this.messageText = message;
            this.showMessage = true;
        },
        async deletarPedido(id) {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });
                
                if (response.ok) {
                    this.showSuccessMessage('Pedido removido com sucesso!');
                    await this.consultarPedidos();
                } else {
                    this.showAlertMessage('Erro ao remover pedido. Tente novamente.');
                }
            } catch (error) {
                this.showAlertMessage('Erro ao remover pedido. Tente novamente.');
            }
        },
        showAlertMessage(message) {
            this.messageType = 'alert';
            this.messageText = message;
            this.showMessage = true;
        },
        async atualizarStatusPedido(event, idPedido){
            const idPedidoAtualizado = event.target.value;

            if (!idPedidoAtualizado) {
                return;
            }

            const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});
            
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
                    method : "PATCH",
                    headers: {"Content-Type" : "application/json"},
                    body: atualizacaoJson
                });
                
                if (response.ok) {
                    this.showSuccessMessage('Status do pedido atualizado com sucesso!');
                    await this.consultarPedidos();
                } else {
                    this.showAlertMessage('Erro ao atualizar status. Tente novamente.');
                }
            } catch (error) {
                this.showAlertMessage('Erro ao atualizar status. Tente novamente.');
            }
        }
    },
    mounted() {
        this.consultarPedidos();
        this.consultaStatus();
    }
}
</script>

<style scoped>
    #pedidos-tabela {
        width: 100%;
        margin: 0 auto;
    }
    #pedidos-tabela-cabecalho, 
    #pedido-tabela-linha, 
    .pedido-tabela-linha {
        display: flex;
        flex-wrap: wrap;
    }
    #pedidos-tabela-cabecalho {
        font-weight: bold;
        padding: 12px;
        border-bottom: 2px solid #222;
    }
    #pedidos-tabela-cabecalho > div, 
    .pedido-tabela-linha > div {
        width: 18%;
    }
    #pedidos-tabela-linha {
        width: 100%;
        padding: 12px;
        border-bottom: 2px solid #222;
    }
    #pedidos-tabela-cabecalho #ordem-id,
    .pedido-tabela-linha #ordem-numero,
    .pedido-tabela-linha #div-acoes,
    #pedidos-tabela-cabecalho #div-acoes {
        width: 5%;
    }

    .no-pedidos {
        text-align: center;
        padding: 40px;
        color: #666;
        font-size: 18px;
    }

    .no-pedidos p {
        margin: 0;
    }
</style>
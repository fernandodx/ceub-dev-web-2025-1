<template>
    <div>
        <!-- Componente de mensagens -->
        <MensagemComponent 
            :tipo="tipoMensagem"
            :texto="textoMensagem"
            :mostrar="mostrarMensagem"
        />

        <!-- Mensagem quando não há pedidos -->
        <div v-show="!temPedidos" class="sem-pedidos">
            <p>Nenhum pedido foi realizado ainda.</p>
        </div>

        <!-- Tabela de pedidos - só exibe quando há pedidos -->
        <div v-show="temPedidos">
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
    </div>
</template>

<script>
import MensagemComponent from './MensagemComponent.vue'

export default {
    name: "ListaPedidoComponent",
    components: {
        MensagemComponent
    },
    data() {
        return {
            listaPedidosRealizados: [],
            listaStatusPedido: [],
            // Dados para mensagens
            mostrarMensagem: false,
            tipoMensagem: "",
            textoMensagem: ""
        }
    },
    computed: {
        temPedidos() {
            return this.listaPedidosRealizados.length > 0;
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
        exibirMensagem(tipo, texto, duracao = 3000) {
            this.tipoMensagem = tipo;
            this.textoMensagem = texto;
            this.mostrarMensagem = true;
            
            setTimeout(() => {
                this.mostrarMensagem = false;
            }, duracao);
        },
        async deletarPedido(id) {
            const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                method: "DELETE"
            });
            
            if (response.ok) {
                this.exibirMensagem('sucesso', 'Pedido removido com sucesso!');
                // Atualizar a lista após deletar
                this.consultarPedidos();
            } else {
                this.exibirMensagem('alerta', 'Erro ao remover pedido. Tente novamente.');
            }
        },
        async atualizarStatusPedido(event, idPedido){
            const idPedidoAtualizado = event.target.value;

            const atualizacaoJson = JSON.stringify({statusId : idPedidoAtualizado});
            const response = await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
                method : "PATCH",
                headers: {"Content-Type" : "application/json"},
                body: atualizacaoJson
            });

            if (response.ok) {
                this.exibirMensagem('sucesso', 'Status do pedido atualizado com sucesso!');
                // Atualizar a lista após mudança de status
                this.consultarPedidos();
            } else {
                this.exibirMensagem('alerta', 'Erro ao atualizar status. Tente novamente.');
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
    #pedidos-tabela-linhas,
    .pedidos-tabela-linha {
        display: flex;
        flex-wrap: wrap;
    }

    #pedidos-tabela-cabecalho {
        font-weight: bold;
        padding: 12px;
        border-bottom: 2px solid #222;
    }

    #pedidos-tabela-cabecalho div,
    .pedidos-tabela-linha div {
        width: 18%;
    }
    
    .pedidos-tabela-linha {
        width: 100%;
        padding: 12px;
        border-bottom: 2px solid #222;
    }

     #pedidos-tabela-cabecalho #ordem-id,
     .pedidos-tabela-linha #ordem-numero,
     .pedidos-tabela-linha #div-acoes,
     #pedidos-tabela-cabecalho #div-acoes {
        width: 5%;
     }

     select {
        padding: 2px;
        width: 110px;
        border: 1px solid #222;
        height: 36px;
        margin-right: 8px;
        font-size: 12px;
     }

     .pedidos-tabela-linha .divisor {
        margin-top: 8px;
        margin-bottom: 8px;
        width: 100%;
        height: 1px;
        background-color: darkgoldenrod;
     }
     
    .sem-pedidos {
        text-align: center;
        padding: 40px;
        font-size: 18px;
        color: #666;
        background-color: #f8f8f8;
        border-radius: 8px;
        margin: 20px 0;
    }

</style>
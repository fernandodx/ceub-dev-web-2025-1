<template>
    <div>
        <mensagem-component 
            :tipo="mensagem.tipo"
            :texto="mensagem.texto"
            :mostrar="mensagem.mostrar"
            @fechar="fecharMensagem"
        />
        
        <!-- Mostrar tabela apenas se houver pedidos -->
        <div v-if="listaPedidosRealizados.length > 0">
            <div id="pedidos-tabela">
                <div>
                    <div id="pedidos-tabela-cabecalho">
                        <div id="ordem-id">#ID</div>
                        <div>Nome</div>
                        <div>Pizza</div>
                        <div>Tipo Massa</div>
                        <div>Opcionais</div>
                        <div>Status</div>
                        <div id="div-acoes">Ações</div>
                    </div>
                </div>
            </div>
            <div class="pedido-tabela-linha" v-for="pedido in listaPedidosRealizados" :key="pedido.id">
                <div id="ordem-numero">{{ pedido.id }}</div>
                <div>{{ pedido.nome }}</div>
                <div>{{ pedido.pizza.nome }}</div>
                <div>{{ pedido.ponto.descricao }}</div>
                <div>
                    <ul>
                        <li v-for="(complemento, index) in pedido.complemento" :key="index" >{{ complemento.nome }}</li>
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
        
        <!-- Mensagem quando não há pedidos -->
        <div v-else class="sem-pedidos">
            <h2>Nenhum pedido encontrado</h2>
            <p>Faça seu primeiro pedido no menu!</p>
        </div>
    </div>
</template>
<script>
import MensagemComponent from './MensagemComponent.vue';

    export default {
        name: "ListaPedidoComponent",
        components: {
            MensagemComponent
        },
        data() {
            return {
                listaPedidosRealizados: [],
                listaStatusPedido: [],
                mensagem: {
                    tipo: 'sucesso',
                    texto: '',
                    mostrar: false
                }
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
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });
                
                if (response.ok) {
                    this.mostrarMensagem('sucesso', 'Pedido deletado com sucesso!');
                    this.consultarPedidos(); // Recarregar lista
                } else {
                    this.mostrarMensagem('alerta', 'Erro ao deletar pedido.');
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
                    this.mostrarMensagem('sucesso', 'Status do pedido atualizado com sucesso!');
                } else {
                    this.mostrarMensagem('alerta', 'Erro ao atualizar status do pedido.');
                }
            },
            mostrarMensagem(tipo, texto) {
                this.mensagem = {
                    tipo,
                    texto,
                    mostrar: true
                };
                
                // Auto-hide para mensagens de sucesso
                if (tipo === 'sucesso') {
                    setTimeout(() => {
                        this.fecharMensagem();
                    }, 3000);
                }
            },
            fecharMensagem() {
                this.mensagem.mostrar = false;
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

    select{
        padding: 2px;
        width: 100%;
        border: solid 1px #222;
        height: 36px;
        margin-right: 8px;
        font-size: 12px;
    }

    .pedido-tabela-linha .divisor {
        width: 100%;
        height: 2px;
        background-color: #ff6b35;
        margin-top: 8px;
        margin-bottom: 8px;
    }

    .sem-pedidos {
        text-align: center;
        padding: 50px;
        color: #666;
    }

    .sem-pedidos h2 {
        color: #333;
        margin-bottom: 10px;
    }

</style>
<template>
    <div>
        <MessageComponent
          :type="messageType"
          :message="messageText"
          :show="showMessage"
        />
        <div v-if="listaPedidosRealizados.length > 0">
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
        <div v-else style="text-align:center; margin: 2rem 0; color: #888;">Nenhum pedido cadastrado.</div>
    </div>
</template>
<script>
import MessageComponent from './MessageComponent.vue';
    export default {
        name: "ListaPedidoComponent",
        components: { MessageComponent },
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
            async deletarPedido(id) {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });
                if (response.ok) {
                  this.messageType = 'success';
                  this.messageText = 'Pedido removido com sucesso!';
                  this.showMessage = true;
                  setTimeout(() => { this.showMessage = false; }, 3000);
                  this.consultarPedidos();
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
                  this.messageType = 'success';
                  this.messageText = 'Status do pedido atualizado com sucesso!';
                  this.showMessage = true;
                  setTimeout(() => { this.showMessage = false; }, 3000);
                  this.consultarPedidos();
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



</style>
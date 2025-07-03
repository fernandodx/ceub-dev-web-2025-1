<template>
  <div class="pedidos-container">
    <message-component :msg="msg" :type="type"/>
    <div id="pedidos-tabela" v-show="listaPedidosRealizados.length">
      <div id="pedidos-tabela-cabecalho">
        <div id="ordem-id">#ID</div>
        <div>Nome</div>
        <div>Hamburguer</div>
        <div>Ponto</div>
        <div>Opcionais</div>
        <div>Status</div>
        <div id="div-acoes">Ações</div>
      </div>
      <div class="pedidos-tabela-linha" v-for="pedido in listaPedidosRealizados" :key="pedido.id">
        <div id="ordem-numero">{{ pedido.id }}</div>
        <div>{{ pedido.nome }}</div>
        <div>{{ pedido.hamburguer.nome }}</div>
        <div>{{ pedido.ponto.descricao }}</div>
        <div>
          <ul>
            <li v-for="(complemento, index) in pedido.complementos" :key="index">
              {{ complemento.nome }}
            </li>
          </ul>
          <div class="divisor" v-if="pedido.complementos?.length && pedido.bebidas?.length"></div>
          <ul>
            <li v-for="bebida in pedido.bebidas" :key="bebida.id">
              {{ bebida.nome }}
            </li>
          </ul>
        </div>
        <div>
          <select 
            name="status" 
            class="status" 
            @change="atualizarStatusPedido($event, pedido.id)"
          >
            <option value="">Selecione</option>
            <option 
              v-for="status in listaStatusPedido" 
              :key="status.id"
              :value="status.id"
              :selected="status.id === pedido.statusId"
            >
              {{ status.descricao }}
            </option>
          </select>
        </div>
        <div id="div-acoes">
          <img 
            src="../../public/img/icone_lixeira.png"
            alt="Excluir"
            width="35"
            height="35"
            @click="deletarPedido(pedido.id)"
          />
        </div>
      </div>
    </div>
    <div v-show="!listaPedidosRealizados.length" class="no-pedidos">
      <p>Não há pedidos cadastrados</p>
    </div>
  </div>
</template>

<script>
import MessageComponent from './MessageComponent.vue'

export default {
  name: 'ListaPedidoComponent',
  components: {
    MessageComponent
  },
  data() {
    return {
      msg: '',
      type: '',
      listaPedidosRealizados: [],
      listaStatusPedido: []
    }
  },
  methods: {
    async consultarPedidos() {
      try {
        const response = await fetch('http://localhost:3000/pedidos')
        const data = await response.json()
        this.listaPedidosRealizados = data
      } catch (error) {
        console.error('Erro ao consultar pedidos:', error)
        this.msg = 'Erro ao consultar pedidos'
        this.type = 'alert'
        setTimeout(() => {
          this.msg = ''
        }, 3000)
      }
    },
    async consultaStatus() {
      try {
        const response = await fetch('http://localhost:3000/status_pedido')
        const data = await response.json()
        this.listaStatusPedido = data
      } catch (error) {
        console.error('Erro ao consultar status:', error)
      }
    },
    async deletarPedido(id) {
      try {
        await fetch(`http://localhost:3000/pedidos/${id}`, {
          method: 'DELETE'
        })
        this.msg = 'Pedido removido com sucesso!'
        this.type = 'success'
        setTimeout(() => {
          this.msg = ''
        }, 3000)
        this.consultarPedidos()
      } catch (error) {
        console.error('Erro ao deletar pedido:', error)
        this.msg = 'Erro ao deletar pedido'
        this.type = 'alert'
        setTimeout(() => {
          this.msg = ''
        }, 3000)
      }
    },
    async atualizarStatusPedido(event, idPedido) {
      try {
        const statusId = event.target.value
        const atualizacaoJson = JSON.stringify({ statusId })
        await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
          method: 'PATCH',
          headers: { 'Content-Type': 'application/json' },
          body: atualizacaoJson
        })
        this.msg = 'Status atualizado com sucesso!'
        this.type = 'success'
        setTimeout(() => {
          this.msg = ''
        }, 3000)
        this.consultarPedidos()
      } catch (error) {
        console.error('Erro ao atualizar status:', error)
        this.msg = 'Erro ao atualizar status'
        this.type = 'alert'
        setTimeout(() => {
          this.msg = ''
        }, 3000)
      }
    }
  },
  mounted() {
    this.consultarPedidos()
    this.consultaStatus()
  }
}
</script>

<style scoped>
.pedidos-container {
  padding: 20px;
}

#pedidos-tabela {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
}

#pedidos-tabela-cabecalho {
  display: flex;
  background-color: #f5f5f5;
  font-weight: bold;
  padding: 12px;
  border-bottom: 2px solid #222;
}

.pedidos-tabela-linha {
  display: flex;
  padding: 12px;
  border-bottom: 1px solid #ddd;
  align-items: center;
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
  flex: 1;
  padding: 0 10px;
}

#ordem-id,
#ordem-numero,
#div-acoes {
  flex: 0 0 5% !important;
}

.status {
  padding: 8px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 150px;
}

.divisor {
  margin: 8px 0;
  height: 1px;
  background-color: darkgoldenrod;
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  margin: 4px 0;
  font-size: 14px;
}

img[alt="Excluir"] {
  cursor: pointer;
  transition: transform 0.2s;
}

img[alt="Excluir"]:hover {
  transform: scale(1.1);
}

.no-pedidos {
  text-align: center;
  padding: 20px;
  color: #666;
  font-size: 18px;
}
</style>
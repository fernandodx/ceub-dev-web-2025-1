<template>
  <div id="container">
    <h1 class="titulo">📋 Lista de Pedidos</h1>

    <MensagemComponent
      v-show="mensagem.texto"
      :tipo="mensagem.tipo"
      :texto="mensagem.texto"
    />

    <!-- ✅ Tabela Condicional -->
    <div v-if="listaPedidosRealizados.length > 0">
      <div id="pedidos-tabela-cabecalho">
        <div>#ID</div>
        <div>Nome</div>
        <div>Sorvete</div>
        <div>Embalagem</div>
        <div>Complementos / Bebidas</div>
        <div>Status</div>
        <div>Ações</div>
      </div>

      <div
        class="pedidos-tabela-linha"
        v-for="pedido in listaPedidosRealizados"
        :key="pedido.id"
      >
        <div>{{ pedido.id }}</div>
        <div>{{ pedido.nome }}</div>
        <div>{{ pedido.hamburguer?.nome }}</div>
        <div>{{ pedido.ponto?.descricao }}</div>

        <div class="lista-opcionais">
          <ul>
            <li
              v-for="(complemento, index) in pedido.complemento"
              :key="index"
            >
              {{ complemento.nome }}
            </li>
          </ul>
          <div class="divisor"></div>
          <ul>
            <li v-for="bebida in pedido.bebidas" :key="bebida.id">
              {{ bebida.nome }}
            </li>
          </ul>
        </div>

        <div>
          <select
            class="status"
            @change="atualizarStatusPedido($event, pedido.id)"
          >
            <option value="">Status</option>
            <option
              v-for="status in listaStatusPedido"
              :key="status.id"
              :value="status.id"
              :selected="status.id == pedido.statusId"
            >
              {{ status.descricao }}
            </option>
          </select>
        </div>

        <div>
          <img
            src="/img/icone_lixeira.png"
            alt="Excluir"
            width="28"
            height="28"
            class="icone-lixeira"
            @click="deletarPedido(pedido.id)"
          />
        </div>
      </div>
    </div>

    <!-- ✅ Quando não há pedidos -->
    <p v-else class="mensagem-vazia">Nenhum pedido cadastrado ainda 🍦</p>
  </div>
</template>

<script>
import MensagemComponent from "@/components/MensagemComponent.vue";

export default {
  name: "ListaPedidoComponent",
  components: { MensagemComponent },
  data() {
    return {
      listaPedidosRealizados: [],
      listaStatusPedido: [],
      mensagem: {
        tipo: "",
        texto: "",
      },
    };
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
        method: "DELETE",
      });
      this.mensagem = {
        tipo: "sucesso",
        texto: `Pedido #${id} removido com sucesso!`,
      };
      this.consultarPedidos();
      this.limparMensagem();
    },
    async atualizarStatusPedido(event, idPedido) {
      const idNovoStatus = event.target.value;
      const body = JSON.stringify({ statusId: idNovoStatus });

      await fetch(`http://localhost:3000/pedidos/${idPedido}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body,
      });

      this.mensagem = {
        tipo: "sucesso",
        texto: `Status do pedido #${idPedido} atualizado com sucesso!`,
      };

      this.consultarPedidos();
      this.limparMensagem();
    },
    limparMensagem() {
      setTimeout(() => {
        this.mensagem.texto = "";
      }, 4000);
    },
  },
  mounted() {
    this.consultarPedidos();
    this.consultaStatus();
  },
};
</script>

<style scoped>
#container {
  padding: 30px;
  background-color: #fce5e5;
  border-radius: 12px;
  max-width: 1200px;
  margin: 0 auto;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.05);
}

.titulo {
  font-size: 28px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #d94a4a;
  text-align: center;
}

#pedidos-tabela-cabecalho,
.pedidos-tabela-linha {
  display: grid;
  grid-template-columns: 5% 15% 15% 15% 25% 15% 10%;
  padding: 10px 0;
  border-bottom: 1px solid #ccc;
  align-items: center;
}

#pedidos-tabela-cabecalho {
  font-weight: bold;
  background-color: #ffdede;
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}

.lista-opcionais ul {
  padding-left: 16px;
  margin: 0;
}
.lista-opcionais li {
  font-size: 13px;
}
.divisor {
  height: 1px;
  background-color: darkgoldenrod;
  margin: 4px 0;
}

.status {
  padding: 6px;
  border-radius: 6px;
  border: 1px solid #222;
  background-color: #fff;
}

.icone-lixeira {
  cursor: pointer;
  transition: transform 0.3s ease;
}
.icone-lixeira:hover {
  transform: scale(1.2);
}

.mensagem-vazia {
  text-align: center;
  font-style: italic;
  color: #999;
  margin-top: 20px;
}

@media (max-width: 768px) {
  #pedidos-tabela-cabecalho,
  .pedidos-tabela-linha {
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 8px;
  }
}
</style>

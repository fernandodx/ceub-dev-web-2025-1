<template>
  <div>
    <MessageComponent
      v-show="showMsg"
      :type="msgType"
      :text="msgText"
      :show="showMsg"
    />
    <table v-if="pedidos.length > 0" border="1" style="margin: 2rem auto;">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Sabor</th>
          <th>Status</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="pedido in pedidos" :key="pedido.id">
          <td>{{ pedido.nome }}</td>
          <td>{{ pedido.sabor }}</td>
          <td>{{ pedido.status }}</td>
          <td>
            <button @click="atualizarStatus(pedido)">Alterar Status</button>
            <button @click="deletarPedido(pedido.id)">Deletar</button>
          </td>
        </tr>
      </tbody>
    </table>
    <p v-else>Nenhum pedido cadastrado.</p>
  </div>
</template>

<script>
import MessageComponent from "./MessageComponent.vue";

export default {
  name: "PizzaOrdersList",
  components: { MessageComponent },
  data() {
    return {
      pedidos: [],
      showMsg: false,
      msgType: "success",
      msgText: "",
    };
  },
  mounted() {
    this.carregarPedidos();
  },
  methods: {
    async carregarPedidos() {
      const res = await fetch("http://localhost:3000/pedidos");
      this.pedidos = await res.json();
    },
    async atualizarStatus(pedido) {
      const novoStatus =
        pedido.status === "Pedido realizado"
          ? "Em produção"
          : "Entregue";
      await fetch(`http://localhost:3000/pedidos/${pedido.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: novoStatus }),
      });
      this.msgText = "Status atualizado com sucesso!";
      this.msgType = "success";
      this.showMsg = true;
      this.carregarPedidos();
      setTimeout(() => (this.showMsg = false), 2000);
    },
    async deletarPedido(id) {
      await fetch(`http://localhost:3000/pedidos/${id}`, { method: "DELETE" });
      this.msgText = "Pedido deletado com sucesso!";
      this.msgType = "success";
      this.showMsg = true;
      this.carregarPedidos();
      setTimeout(() => (this.showMsg = false), 2000);
    },
  },
};
</script>

<style scoped>
table {
  width: 80%;
  border-collapse: collapse;
  background: #fff;
}
th, td {
  padding: 12px;
  text-align: center;
}
th {
  background: #ff9800;
  color: #fff;
}
button {
  margin: 0 4px;
  padding: 6px 12px;
  border-radius: 5px;
  border: none;
  color: #fff;
  background: #43a047;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background: #1b5e20;
}
</style>
<template>
  <form @submit.prevent="handleSubmit">
    <MessageComponent
      v-show="showAlert"
      type="alert"
      :text="alertMsg"
      :show="showAlert"
    />
    <MessageComponent
      v-show="showSuccess"
      type="success"
      :text="'Pedido realizado com sucesso!'"
      :show="showSuccess"
    />
    <div>
      <label for="nome">Nome*</label>
      <input v-model="nome" id="nome" type="text" />
    </div>
    <div>
      <label for="sabor">Sabor da Pizza*</label>
      <select v-model="sabor" id="sabor">
        <option disabled value="">Selecione</option>
        <option v-for="pizza in pizzas" :key="pizza.id" :value="pizza.nome">
          {{ pizza.nome }}
        </option>
      </select>
    </div>
    <button type="submit">Fazer Pedido</button>
  </form>
</template>

<script>
import MessageComponent from "./MessageComponent.vue";
// Adicione estes imports conforme solicitado:
import { ref, reactive, toRefs } from "vue";

export default {
  name: "PizzaOrderForm",
  components: { MessageComponent },
  data() {
    return {
      nome: "",
      sabor: "",
      showAlert: false,
      alertMsg: "",
      showSuccess: false,
      pizzas: [
        { id: 1, nome: "Calabresa" },
        { id: 2, nome: "Mussarela" },
        { id: 3, nome: "Portuguesa" },
        { id: 4, nome: "Margherita" },
      ],
    };
  },
  methods: {
    async handleSubmit() {
      this.showAlert = false;
      this.showSuccess = false;
      if (!this.nome || !this.sabor) {
        this.alertMsg = "Preencha o nome e selecione o sabor da pizza!";
        this.showAlert = true;
        return;
      }
      // Envia para a API (JSON Server)
      try {
        await fetch("http://localhost:3000/pedidos", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            nome: this.nome,
            sabor: this.sabor,
            status: "Pedido realizado",
          }),
        });
        this.showSuccess = true;
        this.nome = "";
        this.sabor = "";
        this.$emit("pedido-feito");
      } catch (e) {
        this.alertMsg = "Erro ao realizar pedido!";
        this.showAlert = true;
      }
    },
  },
};
</script>

<style scoped>
form {
  max-width: 400px;
  margin: 2rem auto;
  background: #fff7e6;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 0 12px #eee;
}
div {
  margin-bottom: 1rem;
}
label {
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
}
input, select {
  width: 100%;
  padding: 8px;
  border-radius: 4px;
}
button {
  padding: 8px 18px;
  background: #ff9800;
  color: #fff;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background: #e65100;
}
</style>
<template>
  <div id="fundo">
    <mensagem-component
      :tipo="mensagem.tipo"
      :texto="mensagem.texto"
      v-show="mensagem.visivel"
    />

    <form id="pedido-form" @submit="criarPedido">
      <div>
        <p id="nome-sushi-content">{{ burguer?.nome || "-" }}</p>
        <img id="foto-content" :src="burguer?.foto || ''" />
      </div>

      <div class="inputs">
        <label for="nome_cliente">🍣 Nome do Cliente</label>
        <input
          type="text"
          id="nome-cliente"
          name="nome-cliente"
          v-model="nomeCliente"
          placeholder="Digite seu nome completo"
        />
      </div>

      <div class="inputs">
        <label for="tipo-peixe">🐟 Tipo de peixe / textura</label>
        <select id="tipo-peixe" v-model="pontoCarneSelecionado">
          <option value="" selected disabled>Selecione</option>
          <option
            v-for="ponto in listaPontoCarne"
            :key="ponto.id"
            :value="ponto"
          >
            {{ ponto.descricao }}
          </option>
        </select>
      </div>

      <div class="inputs">
        <label for="complementos">🥢 Complementos</label>
        <div
          class="checkbox-container"
          v-for="item in listaComplementos"
          :key="item.id"
        >
          <input
            type="checkbox"
            :value="item"
            v-model="listaComplementosSelecionados"
          />
          <span>{{ item.nome }}</span>
        </div>
      </div>

      <div class="inputs">
        <label for="bebidas">🍶 Bebidas japonesas</label>
        <div
          class="checkbox-container"
          v-for="item in listaBebidas"
          :key="item.id"
        >
          <input
            type="checkbox"
            :value="item"
            v-model="listaBebidasSelecionadas"
          />
          <span>{{ item.nome }}</span>
        </div>
      </div>

      <div class="inputs">
        <input type="submit" class="submit-btn" value="Confirmar Pedido 🍱" />
      </div>
    </form>
  </div>
</template>

<script>
import MensagemComponent from "./MensagemComponent.vue";

export default {
  name: "PedidoComponent",
  components: {
    MensagemComponent,
  },
  props: {
    burguer: null,
  },
  data() {
    return {
      nomeCliente: "",
      pontoCarneSelecionado: "",
      listaComplementosSelecionados: [],
      listaBebidasSelecionadas: [],
      listaPontoCarne: [],
      listaComplementos: [],
      listaBebidas: [],
      mensagem: {
        tipo: "",
        texto: "",
        visivel: false,
      },
    };
  },
  methods: {
    async getTipoPontos() {
      const response = await fetch("http://localhost:3000/tipos_pontos");
      this.listaPontoCarne = await response.json();
    },
    async getOpcionais() {
      const response = await fetch("http://localhost:3000/opcionais");
      const data = await response.json();
      this.listaComplementos = data.complemento;
      this.listaBebidas = data.bebidas;
    },
    async criarPedido(e) {
      e.preventDefault();

      if (!this.nomeCliente || !this.pontoCarneSelecionado) {
        this.exibirMensagem("alerta", "Preencha o nome e o tipo de peixe.");
        return;
      }

      const pedido = {
        nome: this.nomeCliente,
        ponto: this.pontoCarneSelecionado,
        bebidas: [...this.listaBebidasSelecionadas],
        complemento: [...this.listaComplementosSelecionados],
        statusId: 5,
        hamburguer: this.burguer,
      };

      await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });

      this.exibirMensagem("sucesso", "Pedido realizado com sucesso! 🎉");

      // Limpar formulário
      this.nomeCliente = "";
      this.pontoCarneSelecionado = "";
      this.listaBebidasSelecionadas = [];
      this.listaComplementosSelecionados = [];
    },
    exibirMensagem(tipo, texto) {
      this.mensagem = {
        tipo,
        texto,
        visivel: true,
      };
      setTimeout(() => {
        this.mensagem.visivel = false;
      }, 4000);
    },
  },
  mounted() {
    this.getTipoPontos();
    this.getOpcionais();
  },
};
</script>

<style scoped>
#pedido-form {
  max-width: 800px;
  margin: 40px auto;
  padding: 24px;
  background: #754e4e;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

#nome-sushi-content {
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
  text-align: center;
  margin-bottom: 12px;
}

#foto-content {
  display: block;
  margin: 0 auto 24px auto;
  max-width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 12px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.inputs {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  padding: 10px;
}

label {
  font-weight: 600;
  margin-bottom: 8px;
  color: #ffffff;
  border-left: 5px solid #ff4d00;
  padding-left: 10px;
}

input[type="text"],
select {
  padding: 12px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background: #fff;
  width: 100%;
}

.checkbox-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.checkbox-container input {
  margin-right: 10px;
}

.checkbox-container span {
  font-weight: 500;
}

.submit-btn {
  background-color: #ff4d00;
  color: #fff;
  border: none;
  font-size: 18px;
  font-weight: bold;
  padding: 14px;
  border-radius: 8px;
  cursor: pointer;
  transition: 0.3s;
  width: 100%;
}
.submit-btn:hover {
  background-color: #c33c00;
}
</style>

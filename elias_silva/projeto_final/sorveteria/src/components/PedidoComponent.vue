<template>
  <div id="fundo">
    <mensagem-component
      :tipo="mensagem.tipo"
      :texto="mensagem.texto"
      v-show="mensagem.visivel"
    />

    <form id="pedido-form" @submit="criarPedido">
      <div>
        <p id="nome-sorvete-content">{{ produto?.nome || "-" }}</p>
        <img
          id="foto-content"
          :src="produto?.foto || require('@/assets/img/frutas_vermelhas.jpg')"
          :alt="produto?.nome || 'Imagem padrão'"
        />
      </div>

      <div class="inputs">
        <label for="nome_cliente">🍨 Nome do Cliente</label>
        <input
          type="text"
          id="nome-cliente"
          name="nome-cliente"
          v-model="nomeCliente"
          placeholder="Digite seu nome completo"
        />
      </div>

      <div class="inputs">
        <label for="tipo-massa">🧁 Tipo de embalagem</label>
        <select id="tipo-massa" v-model="pontoSelecionado">
          <option value="" selected disabled>Selecione</option>
          <option
            v-for="ponto in listaPontoSorvete"
            :key="ponto.id"
            :value="ponto"
          >
            {{ ponto.descricao }}
          </option>
        </select>
      </div>

      <div class="inputs">
        <label for="complementos">🍫 Complementos</label>
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
        <label for="bebidas">🥤 Bebidas</label>
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
        <input type="submit" class="submit-btn" value="Confirmar Pedido 🍦" />
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
    produto: null, // era 'burguer'
  },
  data() {
    return {
      nomeCliente: "",
      pontoSelecionado: "",
      listaComplementosSelecionados: [],
      listaBebidasSelecionadas: [],
      listaPontoSorvete: [],
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
      this.listaPontoSorvete = await response.json();
    },
    async getOpcionais() {
      const response = await fetch("http://localhost:3000/opcionais");
      const data = await response.json();
      this.listaComplementos = data.complemento;
      this.listaBebidas = data.bebidas;
    },
    async criarPedido(e) {
      e.preventDefault();

      if (!this.nomeCliente || !this.pontoSelecionado) {
        this.exibirMensagem("alerta", "Preencha o nome e escolha o tipo de embalagem.");
        return;
      }

      const pedido = {
        nome: this.nomeCliente,
        ponto: this.pontoSelecionado,
        bebidas: [...this.listaBebidasSelecionadas],
        complemento: [...this.listaComplementosSelecionados],
        statusId: 1, // "Recebido"
        hamburguer: this.produto, // mantendo compatibilidade com JSON atual
      };

      await fetch("http://localhost:3000/pedidos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pedido),
      });

      this.exibirMensagem("sucesso", "Pedido realizado com sucesso! 🍦🎉");

      // Limpar formulário
      this.nomeCliente = "";
      this.pontoSelecionado = "";
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
/* ... mantém seu estilo original */
#pedido-form {
  max-width: 800px;
  margin: 40px auto;
  padding: 24px;
  background: #fef6f0;
  border-radius: 12px;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.1);
}

#nome-sorvete-content {
  font-size: 36px;
  font-weight: 700;
  color: #333;
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
  color: #444;
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

.checkbox-container input[type="checkbox"] {
  width: 20px;
  height: 20px;
  accent-color: #e74c3c; /* Cor vibrante combinando com o tema */
  border: 2px solid #555;
  cursor: pointer;
}

.checkbox-container input[type="checkbox"]:focus {
  outline: 2px solid #e74c3c;
}

.checkbox-container span {
  font-size: 16px;
  color: #333;
}
</style>

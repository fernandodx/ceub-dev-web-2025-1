<template>
    <div>
      <form id="pedido-form" @submit.prevent="criarPedido">
        <div>
          <p id="nome-sushi-content">{{ sushi?.nome || "-" }}</p>
          <img id="foto-content" :src="sushi?.foto || ''" />
        </div>
  
        <alert-success
          v-if="mensagemErro"
          :texto="mensagemErro"
          tipo="alerta"
          :mostrar="mostrarMensagemErro"
        />
        <alert-success
          v-if="mensagemSucesso"
          :texto="mensagemSucesso"
          tipo="sucesso"
          :mostrar="mostrarMensagemSucesso"
        />
  
        <div class="inputs" id="form-pedido">
          <label for="nome_cliente">Nome</label>
          <input
            type="text"
            id="nome-cliente"
            name="nome-cliente"
            v-model="nomeCliente"
            placeholder="Digite seu nome"
          />
        </div>
  
        <div id="opcionais-titulo" class="inputs">
          <label id="opcionais-titulo" for="Opcionais">Complementos</label>
          <label id="opcionais-subtitulo">Escolha os itens extras para seu sushi</label>
  
          <div
            class="checkbox-container"
            v-for="complemento in listaComplementos"
            :key="complemento.id"
          >
            <input
              type="checkbox"
              :name="complemento.nome"
              :value="complemento"
              v-model="listaComplementosSelecionados"
            />
            <span>{{ complemento.nome }}</span>
          </div>
  
          <label>Bebidas</label>
          <div
            class="checkbox-container"
            v-for="bebida in listaBebidas"
            :key="bebida.id"
          >
            <input
              type="checkbox"
              :name="bebida.nome"
              :value="bebida"
              v-model="listaBebidasSelecionadas"
            />
            <span>{{ bebida.nome }}</span>
          </div>
        </div>
  
        <div class="inputs">
          <input type="submit" class="submit-btn" value="Confirmar Pedido" />
        </div>
      </form>
    </div>
  </template>
  
  <script>
  import AlertSuccess from "@/components/AlertSuccess.vue";
  
  export default {
    name: "PedidoSushiComponent",
    components: { AlertSuccess },
    props: {
      sushi: { type: Object, default: null },
    },
    data() {
      return {
        nomeCliente: "",
        listaComplementosSelecionados: [],
        listaBebidasSelecionadas: [],
        listaComplementos: [],
        listaBebidas: [],
        mensagemErro: "",
        mensagemSucesso: "",
        mostrarMensagemErro: false,
        mostrarMensagemSucesso: false,
      };
    },
    methods: {
      async getOpcionais() {
        try {
          const response = await fetch("http://localhost:3000/opcionais");
          const data = await response.json();
          this.listaComplementos = data.complemento;
          this.listaBebidas = data.bebidas;
        } catch (error) {
          this.mensagemErro = "Erro ao carregar opcionais.";
          this.mostrarMensagemErro = true;
        }
      },
  
      async criarPedido() {
        this.mostrarMensagemErro = false;
        this.mostrarMensagemSucesso = false;
  
        
        if (!this.nomeCliente.trim()) {
          this.mensagemErro = "Por favor, preencha o campo Nome.";
          this.mostrarMensagemErro = true;
          return;
        }
        if (!this.sushi) {
          this.mensagemErro = "Nenhum sushi selecionado.";
          this.mostrarMensagemErro = true;
          return;
        }
  
        const dadosPedido = {
          nome: this.nomeCliente,
          bebidas: [...this.listaBebidasSelecionadas],
          complemento: [...this.listaComplementosSelecionados],
          statusId: 5, 
          sushi: this.sushi,
        };
  
        try {
          const response = await fetch("http://localhost:3000/pedidos", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(dadosPedido),
          });
  
          if (!response.ok) {
            throw new Error("Falha ao criar pedido");
          }
  
          this.mensagemSucesso = "Pedido criado com sucesso!";
          this.mostrarMensagemSucesso = true;
  
          
          this.nomeCliente = "";
          this.listaComplementosSelecionados = [];
          this.listaBebidasSelecionadas = [];
  
        } catch (error) {
          this.mensagemErro = "Erro ao criar pedido.";
          this.mostrarMensagemErro = true;
        }
      },
    },
    mounted() {
      this.getOpcionais();
    },
  };
  </script>
  
  <style scoped>
  #foto-content {
    margin-bottom: 16px;
    border-radius: 16px;
    width: 100%;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  }
  
  #nome-sushi-content {
    font-size: 36px;
    font-weight: bold;
    text-align: left;
    margin: 16px 0;
    margin-left: 24px;
    color: #8b0000;
  }
  
  #pedido-form {
    max-width: 750px;
    margin: 0 auto;
    padding: 24px;
    background-color: #fff9f0;
    border-radius: 12px;
  }
  
  .inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }
  
  label {
    font-weight: bold;
    margin-bottom: 8px;
    color: #333;
    padding-left: 6px;
    border-left: 4px solid #b22222;
  }
  
  input[type="text"],
  select {
    padding: 12px;
    width: 300px;
    border: solid #ccc 1px;
    border-radius: 8px;
    font-size: 14px;
  }
  
  #opcionais-subtitulo {
    margin-bottom: 12px;
    font-weight: normal;
    color: #555;
    padding-left: 10px;
  }
  
  .checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 8px;
  }
  
  .checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
  }
  
  .submit-btn {
    background-color: #b22222;
    color: white;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 14px;
    font-size: 16px;
    width: 100%;
    transition: 0.4s ease;
  }
  
  .submit-btn:hover {
    background-color: #8b0000;
  }
  </style>
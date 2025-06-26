<template>
<div>
    <MensagemComponent
      :tipo="'alerta'"
      :texto="mensagemAlerta"
      :visivel="mostrarAlerta"
    />
    <MensagemComponent
      :tipo="'sucesso'"
      :texto="mensagemSucesso"
      :visivel="mostrarSucesso"
    />
    <form id="pedido-form" @submit="criarPedido($event)">
        <div>
            <p id="nome-hamburguer-content">
                {{ taco && taco.nome ? taco.nome : "-" }}
            </p>
            <img id="foto-content" :src="taco && taco.foto ? taco.foto : ''"/>
        </div>
        <div class="inputs" id="form-pedido">
            <label for="nome_cliente">Nome</label>
            <input
                type="text" 
                name="nome-cliente" 
                id="nome-cliente" 
                v-model="nomeCliente"
                placeholder="Digite seu nome">
        </div>
        <div class="inputs">
            <label for="ponto-carne">Ponto da carne</label>

            <select 
            name="ponto-carne" 
            id="ponto-carne" 
            v-model="pontoCarneSelecionado">
                <option value="" selected>Selecione o ponto</option>
                <option v-for="pontoCarne in listaPontoCarne" 
                :key="pontoCarne.id" 
                :value="pontoCarne">{{ pontoCarne.descricao }}</option>
            </select>
        </div>
        <div id="opcionais-titulo" class="inputs">
            <label id="opcionais-titulo" for="Opcionais">Selecione os opcionais</label>
            <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>

            <div class="checkbox-container" 
                v-for="complemento in listaComplementos"
                :key="complemento.id">
                <input type="checkbox" 
                    :name="complemento.nome" 
                    :value="complemento" 
                    v-model="listaComplementosSelecionados">
                <span>{{ complemento.nome }}</span>
            </div>

            <label for="Complemento">Adicione uma bebida</label>
            
            <div class="checkbox-container" 
                v-for="bebida in listaBebidas" :key="bebida.id">
            <input type="checkbox" 
                :name="bebida.nome" 
                :value="bebida"
                v-model="listaBebidasSelecionadas">
            <span>{{ bebida.nome }}</span>
            </div>
        </div>
        <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedidos">
        </div>
    </form>
</div>
</template>

<script>
    import MensagemComponent from './MensagemComponent.vue';
    export default{
        name: "PedidoComponent",
        components: { MensagemComponent },
        data(){
            return {
                nomeCliente : "",
                pontoCarneSelecionado: "",
                listaComplementosSelecionados: [],
                listaBebidasSelecionadas: [],
                listaPontoCarne : [],
                listaComplementos : [],
                listaBebidas : [],
                mostrarAlerta: false,
                mensagemAlerta: '',
                mostrarSucesso: false,
                mensagemSucesso: ''
            }
        },
        props: {
            taco : null
        },
        methods: {
            async getTipoPontos(){
                const response = await fetch("http://localhost:3000/tipos_pontos");
                const data = await response.json();
                this.listaPontoCarne = data;
            },
            async getOpcionais(){
                const response = await fetch("http://localhost:3000/opcionais");
                const data = await response.json();
                this.listaComplementos = data.complemento;
                this.listaBebidas = data.bebidas;
            },
            async criarPedido(e) {
                e.preventDefault();

                this.mostrarAlerta = false;
                this.mostrarSucesso = false;

                if (!this.nomeCliente || !this.pontoCarneSelecionado) {
                  this.mensagemAlerta = 'Preencha o nome e selecione o ponto da carne!';
                  this.mostrarAlerta = true;
                  return;
                }

                const dadosPedido = {
                    nome : this.nomeCliente,
                    ponto : this.pontoCarneSelecionado,
                    bebidas : Array.from(this.listaBebidasSelecionadas),
                    complemento : Array.from(this.listaComplementosSelecionados),
                    statusId: 5,
                    hamburguer: this.taco
                }
                const dadosJson = JSON.stringify(dadosPedido);
                const req = await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: dadosJson
                });
                if (req.ok) {
                  this.mensagemSucesso = 'Pedido de taco criado com sucesso!';
                  this.mostrarSucesso = true;
                  this.nomeCliente = '';
                  this.pontoCarneSelecionado = '';
                  this.listaComplementosSelecionados = [];
                  this.listaBebidasSelecionadas = [];
                  setTimeout(() => {
                    this.$router.push('/pedidos');
                  }, 2000);
                }
            }

        },
        mounted(){
            this.getTipoPontos();
            this.getOpcionais();
        }
    }
</script>

<style scoped>
    #foto-content {
    margin-bottom: 16px;
    border-radius: 16px;
    position: relative;
    z-index: -1;
    justify-content: center;
    width: 100%;
    height: 180px;
    object-fit: cover;
}

#nome-hamburguer-content {
    font-size: 43px;
    font-weight: bold;
    text-align: start;
    margin-bottom: -90px;
    margin-left: 40px;
    color: antiquewhite;
    padding: 16px;
}

#pedido-form {
    max-width: 750px;
    margin: 0 auto;
}

.inputs{
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

label {
    font-weight: bold;
    margin-bottom: 16px;
    color: #222;
    padding: 5px 12px;
    flex-direction: start;
    display: flex;
    border-left: 4px solid darkgoldenrod;
}

input, select {
    padding: 12px;
    width: 300px;
    border: solid #222 1px;
    border-radius: 8px;
    height: 20px;
    font-size: 12px;
}

select {
    height: 50px;
}

#opcionais-titulo {
    width: 100%;
}

#opcionais-subtitulo {
    display: flex;
    align-items: flex-start;
    align-content: center;
    width: 100%;
    margin-bottom: 12px;
}

.checkbox-container span {
    margin-left: 6px;
    font-weight: bold;
}

.checkbox-container span,
.checkbox-container input {
    width: auto;
    height: 20px;
}

.submit-btn {
    background: #e0ffe6;
    color: #155724;
    border: 1px solid #c3e6cb;
    font-weight: bold;
    border-radius: 8px;
    padding: 12px 0;
    font-size: 18px;
    cursor: pointer;
    transition: background 0.3s;
}

.submit-btn:hover {
    background: #c3e6cb;
}
</style>
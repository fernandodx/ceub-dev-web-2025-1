<template>

    <div>
        <MessageComponent
          :type="messageType"
          :message="messageText"
          :show="showMessage"
        />
        <form id="pedido-form" @submit="criarPedido($event)">
            <div>
                <p id="nome-hamburguer-content">
                    {{ burguer && burguer.nome ? burguer.nome: "-"}}
                </p>
                <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''"/>
            </div>
            <div class="imputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input 
                    type="text" 
                    id="nome_cliente" 
                    name="nome-cliente" 
                    v-model="nomeCliente"
                    placeholder="Digite seu Nome">
            </div>
            <div class="imputs">
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
            <div id="opcionais-titulo" class="imputs">
                <label id="opcionais-titulo" for="Opcionais">Selecione os opcionais</label> 
                <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>

                <div class="checkbox-container" 
                    v-for="complemento in listaComplementos" 
                    :key="complemento.id" >
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
                        v-model="listaBebidasSelecionados">
                    <span>{{ bebida.nome }}</span>
                </div>
            </div>
            <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedido">
            </div>
        </form>
    </div>

</template>

<script>
import MessageComponent from './MessageComponent.vue';

    export default{
        name : "PedidoComponent",
        components: { MessageComponent },
        data() {
            return {
                nomeCliente : "",
                pontoCarneSelecionado : "",
                listaComplementosSelecionados : [],
                listaBebidasSelecionados : [],
                listaPontoCarne : [],
                listaComplementos : [],
                listaBebidas : [],
                showMessage: false,
                messageType: 'success',
                messageText: ''
            }
        },
        props: {
            burguer : null
        },
        methods: {
            async getTipoPontos() {
                const response = await fetch("http://localhost:3000/tipos_pontos");
                const data = await response.json();
                this.listaPontoCarne = data;
            },
            async getTipoOpcionais() {
                const response = await fetch("http://localhost:3000/opcionais");
                const data = await response.json();
                this.listaComplementos = data.complemento;
                this.listaBebidas = data.bebidas;
            },
            async criarPedido(e) {
                e.preventDefault();
                if (!this.nomeCliente || !this.pontoCarneSelecionado) {
                  this.messageType = 'alert';
                  this.messageText = 'Preencha o nome e selecione o ponto da carne.';
                  this.showMessage = true;
                  setTimeout(() => { this.showMessage = false; }, 3000);
                  return;
                }
                const dadosPedido = {
                    nome : this.nomeCliente,
                    ponto : this.pontoCarneSelecionado,
                    bebidas : Array.from(this.listaBebidasSelecionados),
                    complemento : Array.from(this.listaComplementosSelecionados),
                    statusId: 5,
                    hamburguer: this.burguer
                }
                const dadosJson = JSON.stringify(dadosPedido);
                const req = await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: dadosJson
                });
                if (req.ok) {
                  this.messageType = 'success';
                  this.messageText = 'Pedido criado com sucesso!';
                  this.showMessage = true;
                  setTimeout(() => { 
                    this.showMessage = false; 
                    this.$router.push('/pedidos');
                  }, 2000);
                  this.nomeCliente = '';
                  this.pontoCarneSelecionado = '';
                  this.listaComplementosSelecionados = [];
                  this.listaBebidasSelecionados = [];
                }
            }

        },
        mounted() {
            this.getTipoPontos();
            this.getTipoOpcionais();
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
    background-color: #222;
    color: darkgoldenrod;
    font-weight: bold;
    border: solid 1px darkgoldenrod;
    border-radius: 8px;
    cursor: pointer;
    padding: 12px;
    margin: 0 auto;
    font-size: 16px;
    width: 100%;
    height: auto;
    transition: 0.5s;
}
.submit-btn:hover {
    background-color: darkgoldenrod;
    color: #222;
}


</style>
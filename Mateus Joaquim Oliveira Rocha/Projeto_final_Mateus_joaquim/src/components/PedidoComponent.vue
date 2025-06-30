<template>
    <div>
        <MessageComponent
            v-show="showAlert"
            :type="'alert'"
            :text="alertMsg"
            :show="showAlert"
        />
        <MessageComponent
            v-show="showSuccess"
            :type="'success'"
            :text="'Pedido realizado com sucesso!'"
            :show="showSuccess"
        />
        <form id="pedido-form" @submit="criarPedido($event)">
            <div>
                <p id="nome-hamburguer-content">
                    {{ burguer && burguer.nome ? burguer.nome : "-" }}
                </p>
                <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''"/>
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input  
                    type="text" 
                    id="nome-cliente" 
                    name="nome-cliente" 
                    v-model="nomeCliente"
                    placeholder="Digite seu Nome">
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
                <label for="Complemento">Adcione uma bebida</label>
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
                <input type="submit" class="submit-btn" value="Confirmar Pedido">
            </div>
        </form>
    </div>
</template>

<script>
import MessageComponent from "./MessageComponent.vue";

export default {
    name : "PedidoComponent",
    components: {
        MessageComponent
    },
    data(){
        return {
            nomeCliente : "",
            pontoCarneSelecionado: "",
            listaComplementosSelecionados: [],
            listaBebidasSelecionadas: [],
            listaPontoCarne : [],
            listaComplementos : [],
            listaBebidas : [],
            showAlert: false,
            alertMsg: "",
            showSuccess: false
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
        async getOpcionais() {
            const response = await fetch("http://localhost:3000/opcionais");
            const data = await response.json();
            this.listaComplementos = data.complemento;
            this.listaBebidas = data.bebidas;
        },
        async criarPedido(e) {
            e.preventDefault();
            this.showAlert = false;
            this.showSuccess = false;

            if (!this.nomeCliente || !this.pontoCarneSelecionado) {
                this.alertMsg = "Preencha o nome e selecione o ponto da carne!";
                this.showAlert = true;
                return;
            }

            const dadosPedido = {
                nome : this.nomeCliente,
                ponto : this.pontoCarneSelecionado,
                bebidas : Array.from(this.listaBebidasSelecionadas),
                complemento : Array.from(this.listaComplementosSelecionados),
                statusId: 5,
                hamburguer: this.burguer
            }
            const dadosJson = JSON.stringify(dadosPedido);
            try {
                await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: {"Content-Type" : "application/json"},
                    body: dadosJson
                });
                this.showSuccess = true;
                this.nomeCliente = "";
                this.pontoCarneSelecionado = "";
                this.listaBebidasSelecionadas = [];
                this.listaComplementosSelecionados = [];
            } catch (e) {
                this.alertMsg = "Erro ao criar pedido!";
                this.showAlert = true;
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
/* ... seu CSS original ... */
</style>
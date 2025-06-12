<template>

    <div>
        <form id="pedido-form">
            <div>
                <p id="nome-hamburguer-content">
                    NOME BURGUER
                </p>
                <img id="foto-content" src=""/>
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
                <select name="ponto-carne" id="ponto-carne" v-model="pontoCarneSelecionado">
                    <option value="" selected>Selecione o ponto</option>
                    <option value="1">Bem passado</option>
                    <option value="2">Mal passado</option>
                </select>
            </div>
            <div id="opcionais-titulo" class="imputs">
                <label id="opcionais-titulo" for="Opcionais">Selecione os opcionais</label> 
                <label id="opcionais-subtitulo" for="Complemento">Adicione um complemento</label>

                <div class="checkbox-container">
                    <input type="checkbox" name="complemento" value="1" v-model="listaComplementosSelecionados">
                    <span>Batata</span>
                </div>
                
                <label for="Complemento">Adicione uma bebida</label>

                <div class="checkbox-container">
                    <input type="checkbox" name="complemento" value="1" v-model="listaBebidasSelecionados">
                    <span>Refri</span>
                </div>
            </div>
            <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedido">
            </div>
        </form>
    </div>

</template>

<script>

    export default{
        name : "PedidoComponent",
        data() {
            return {
                nomeCliente : "",
                pontoCarneSelecionado : "",
                listaComplementosSelecionados : "",
                listaBebidasSelecionados : "",
                listaPontoCarne : [],
                listaComplementos : [],
                listaBebidas : []
            }
        },
        methods: {
            async getTipoPontos() {
                const response = await fetch("http://localhost:3000/tipos_pontos");
                const data = await response.json();
                this.listaPontosCarne = data;
            },
            async getTipoOpcionais() {
                const response = await fetch("http://localhost:3000/opcionais");
                const data = await response.json();
                this.listaComplementos = data.complemento;
                this.listaBebidas = data.bebidas;
            },

        },
        mounted() {
            this.getTipoPontos();
            this.getTipoOpcionais();
        }
    }
</script>

<style scoped>

</style>
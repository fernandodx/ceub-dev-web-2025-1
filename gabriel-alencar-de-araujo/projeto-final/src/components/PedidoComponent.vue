<template>
    <div>
        <mensagem-component 
            :tipo="mensagem.tipo"
            :texto="mensagem.texto"
            :mostrar="mensagem.mostrar"
            :tempo-auto-fechar="3000"
            @fechar="fecharMensagem"
        />
        
        <form id="pedido-form" @submit="criarPedido($event)">
            <div>
                <p id="nome-hamburguer-content">
                    {{ pizza && pizza.nome ? pizza.nome : "-" }}
                </p>
                <img id="foto-content" :src="pizza && pizza.foto ? pizza.foto : ''"/>
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input  
                    type="text" 
                    id="nome-cliente" 
                    name="nome-cliente" 
                    v-model="nomeCliente"
                    placeholder="Digite seu Nome">
                <span v-if="erros.nome" class="erro-mensagem">{{ erros.nome }}</span>
            </div>
             <div class="inputs">
                <label for="ponto-carne">Tipo de Massa</label>

                <select 
                    name="ponto-carne" 
                    id="ponto-carne" 
                    v-model="pontoCarneSelecionado">
                    <option value="" selected>Selecione o tipo de massa</option>
                    <option v-for="pontoCarne in listaPontoCarne" 
                            :key="pontoCarne.id" 
                            :value="pontoCarne">{{ pontoCarne.descricao }}</option>
                </select>
                <span v-if="erros.ponto" class="erro-mensagem">{{ erros.ponto }}</span>
            </div>
            <div id="opcionais-titulo" class="inputs">
                <label id="opcionais-titulo" for="Opcionais">Selecione os acompanhamentos</label>
                <label id="opcionais-subtitulo" for="Complemento">Adicione um acompanhamento</label>

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
                <input type="submit" class="submit-btn" value="Confirmar Pedido">
            </div>
        </form>
    </div>
</template>

<script>
import MensagemComponent from './MensagemComponent.vue'

export default {
    name : "PedidoComponent",
    components: {
        MensagemComponent
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
            erros: {
                nome: "",
                ponto: ""
            },
            mensagem: {
                tipo: "",
                texto: "",
                mostrar: false
            }
        }
    },
    props: {
        pizza : null
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
        validarFormulario() {
            this.erros = {
                nome: "",
                ponto: ""
            };
            
            let valido = true;
            
            if (!this.nomeCliente.trim()) {
                this.erros.nome = "Nome é obrigatório";
                valido = false;
            }
            
            if (!this.pontoCarneSelecionado) {
                this.erros.ponto = "Tipo de massa é obrigatório";
                valido = false;
            }
            
            return valido;
        },
        mostrarMensagem(tipo, texto) {
            this.mensagem = {
                tipo,
                texto,
                mostrar: true
            };
        },
        fecharMensagem() {
            this.mensagem.mostrar = false;
        },
        async criarPedido(e) {
            e.preventDefault();
            
            if (!this.validarFormulario()) {
                this.mostrarMensagem('alerta', 'Por favor, preencha todos os campos obrigatórios');
                return;
            }

            const dadosPedido = {
                nome : this.nomeCliente,
                ponto : this.pontoCarneSelecionado,
                bebidas : Array.from(this.listaBebidasSelecionadas),
                complemento : Array.from(this.listaComplementosSelecionados),
                statusId: 5,
                pizza: this.pizza
            }
            const dadosJson = JSON.stringify(dadosPedido);
            const req = await fetch("http://localhost:3000/pedidos", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: dadosJson
            });
            
            if (req.ok) {
                this.mostrarMensagem('sucesso', 'Pedido de pizza criado com sucesso!');
                this.limparFormulario();
            } else {
                this.mostrarMensagem('alerta', 'Erro ao criar pedido. Tente novamente.');
            }
        },
        limparFormulario() {
            this.nomeCliente = "";
            this.pontoCarneSelecionado = "";
            this.listaComplementosSelecionados = [];
            this.listaBebidasSelecionadas = [];
            this.erros = {
                nome: "",
                ponto: ""
            };
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

.erro-mensagem {
    color: #dc3545;
    font-size: 12px;
    margin-top: 4px;
    text-align: left;
}

input.error, select.error {
    border-color: #dc3545;
}

</style>

<template>
    <div>
        <!-- Componente de mensagens -->
        <MensagemComponent 
            :tipo="tipoMensagem"
            :texto="textoMensagem"
            :mostrar="mostrarMensagem"
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
            // Dados para mensagens
            mostrarMensagem: false,
            tipoMensagem: "",
            textoMensagem: ""
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
        validarCampos() {
            const camposVazios = [];
            
            if (!this.nomeCliente.trim()) {
                camposVazios.push("Nome");
            }
            
            if (!this.pontoCarneSelecionado) {
                camposVazios.push("Ponto da carne");
            }
            
            return camposVazios;
        },
        exibirMensagem(tipo, texto, duracao = 3000) {
            this.tipoMensagem = tipo;
            this.textoMensagem = texto;
            this.mostrarMensagem = true;
            
            setTimeout(() => {
                this.mostrarMensagem = false;
            }, duracao);
        },
        async criarPedido(e) {
            e.preventDefault();

            // Validação de campos obrigatórios
            const camposVazios = this.validarCampos();
            if (camposVazios.length > 0) {
                this.exibirMensagem('alerta', `Por favor, preencha os seguintes campos: ${camposVazios.join(', ')}`);
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
            const req = await fetch("http://localhost:3000/pedidos", {
                method: "POST",
                headers: {"Content-Type" : "application/json"},
                body: dadosJson
            });

            if (req.ok) {
                this.exibirMensagem('sucesso', 'Pedido confirmado com sucesso!');
                // Limpar formulário após sucesso
                this.nomeCliente = "";
                this.pontoCarneSelecionado = "";
                this.listaComplementosSelecionados = [];
                this.listaBebidasSelecionadas = [];
            } else {
                this.exibirMensagem('alerta', 'Erro ao confirmar pedido. Tente novamente.');
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
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

#nome-hamburguer-content {
    font-size: 36px;
    font-weight: 700;
    text-align: left;
    margin: 0 0 12px 0;
    color: #333;
    padding: 16px;
    background-color: #f8f8f8;
    border-left: 6px solid darkgoldenrod;
    border-radius: 8px 0 0 8px;
}

#pedido-form {
    max-width: 800px;
    margin: 32px auto;
    padding: 24px;
    background-color: #fff;
    border-radius: 16px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
}

label {
    font-weight: 600;
    color: #333;
    margin-bottom: 8px;
}

input[type="text"],
select {
    padding: 12px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    box-sizing: border-box;
    transition: border 0.3s ease;
}

input[type="text"]:focus,
select:focus {
    border-color: darkgoldenrod;
    outline: none;
}

.checkbox-container {
    display: flex;
    align-items: center;
    margin-bottom: 10px;
}

.checkbox-container input[type="checkbox"] {
    width: 16px;
    height: 16px;
    margin-right: 8px;
}

.checkbox-container span {
    font-size: 14px;
    color: #444;
}

#opcionais-titulo {
    font-size: 16px;
    font-weight: 600;
    color: #222;
    margin-bottom: 16px;
}

#opcionais-subtitulo {
    font-size: 14px;
    color: #666;
    margin-bottom: 8px;
}

.submit-btn {
    background-color: darkgoldenrod;
    color: #fff;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 14px;
    font-size: 16px;
    transition: background-color 0.3s ease;
}

.submit-btn:hover {
    background-color: #b8860b;
}

@media (max-width: 600px) {
    #pedido-form {
        padding: 16px;
    }

    input[type="text"],
    select {
        font-size: 13px;
    }

    #nome-hamburguer-content {
        font-size: 28px;
        padding: 12px;
    }

    .submit-btn {
        font-size: 14px;
        padding: 12px;
    }
}
</style>


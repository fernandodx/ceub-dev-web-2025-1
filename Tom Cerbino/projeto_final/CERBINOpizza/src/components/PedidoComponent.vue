<template>
    <div>
        <form id="pedido-form" @submit="criarPedido($event)">
            <div>
                <p id="nome-hamburguer-content">
                    {{ burguer && burguer.nome ? burguer.nome : "-" }}
                </p>
                <img id="foto-content" :src="burguer && burguer.foto ? burguer.foto : ''" />
            </div>
            <div class="inputs" id="form-pedido">
                <label for="nome_cliente">Nome</label>
                <input type="text" id="nome-cliente" name="nome-cliente" v-model="nomeCliente"
                    placeholder="Digite seu Nome" />
            </div>
            <div id="opcionais-titulo" class="inputs">
                <label for="Complemento">Adicione uma Bebida</label>

                <div class="checkbox-container" v-for="bebida in listaBebidas" :key="bebida.id">
                    <input type="checkbox" :name="bebida.nome" :value="bebida" v-model="listaBebidasSelecionadas" />
                    <span>*{{ bebida.nome }}*</span>
                </div>
            </div>
            <div class="inputs">
                <input type="submit" class="submit-btn" value="Confirmar Pedido" />
            </div>
        </form>

        <!-- Componente de mensagem de alerta -->
        <MessageAlert v-if="alertMessage" :message="alertMessage" :type="alertType" @close="alertMessage = ''" />
    </div>
</template>

<script>
import MessageAlert from '@/components/Alertas.vue';

export default {
    name: "PedidoComponent",
    components: { MessageAlert },
    props: {
        burguer: null
    },
    data() {
        return {
            nomeCliente: "",
            listaBebidas: [],
            listaBebidasSelecionadas: [],
            alertMessage: "",
            alertType: "info",
        };
    },
    methods: {
        async getOpcionais() {
            const response = await fetch("http://localhost:3000/opcionais");
            const responseJson = await response.json();
            this.listaBebidas = responseJson.bebidas;
        },
        showAlert(message, type = "info") {
            this.alertMessage = message;
            this.alertType = type;
        },
        async criarPedido(e) {
            e.preventDefault();

            if (!this.nomeCliente) {
                this.showAlert("Por favor, preencha seu nome.", "error");
                return;
            }

            const dadosPedido = {
                nome: this.nomeCliente,
                bebidas: Array.from(this.listaBebidasSelecionadas),
                statusId: 5,
                hamburguer: this.burguer
            };

            try {
                const response = await fetch("http://localhost:3000/pedidos", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify(dadosPedido)
                });

                if (response.ok) {
                    this.showAlert("Pedido criado com sucesso!", "success");
                    setTimeout(() => {
                        this.$router.push('/menu');
                    }, 1500);
                } else {
                    this.showAlert("Erro ao criar o pedido. Tente novamente.", "error");
                }
            } catch (error) {
                this.showAlert("Erro ao comunicar com o servidor.", "error");
                console.error(error);
            }
        }
    },
    mounted() {
        this.getOpcionais();
    }
};
</script>

<style scoped>
#foto-content {
    margin-bottom: 16px;
    border-radius: 16px;
    width: 100%;
    height: 180px;
    object-fit: cover;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
}

#nome-hamburguer-content {
    font-size: 40px;
    font-weight: bold;
    text-align: start;
    margin: 20px 0 10px 0;
    padding: 16px;
    color: #c40000;
    /* vermelho vibrante */
    background-color: #fff3e0;
    /* fundo amarelo suave */
    border-left: 6px solid #e67300;
    /* laranja escuro */
    border-radius: 6px;
}

#pedido-form {
    max-width: 750px;
    margin: 0 auto;
    background-color: #fff5e6;
    /* creme */
    padding: 24px;
    border-radius: 12px;
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.1);
}

.inputs {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
}

label {
    font-weight: bold;
    margin-bottom: 12px;
    color: #b30000;
    padding-left: 10px;
    border-left: 4px solid #e6ac00;
    /* amarelo dourado */
    font-size: 15px;
}

input[type="text"] {
    padding: 12px;
    width: 100%;
    border: 1px solid #b30000;
    border-radius: 8px;
    font-size: 14px;
}

#opcionais-titulo {
    width: 100%;
}

.checkbox-container {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 12px;
}

.checkbox-container span {
    font-weight: 600;
    color: #4d1c00;
    /* marrom escuro */
}

.submit-btn {
    background-color: #e63900;
    /* vermelho queimado */
    color: #fff5cc;
    font-weight: bold;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    padding: 14px;
    font-size: 16px;
    width: 100%;
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.submit-btn:hover {
    background-color: #cc3300;
    transform: translateY(-2px);
}

@media (max-width: 600px) {
    #pedido-form {
        padding: 16px;
    }

    #nome-hamburguer-content {
        font-size: 28px;
    }

    input[type="text"] {
        font-size: 13px;
    }

    .submit-btn {
        font-size: 14px;
    }
}
</style>
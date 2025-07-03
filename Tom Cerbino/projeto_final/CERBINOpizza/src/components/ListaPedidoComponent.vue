<template>
    <div id="pedidos-tabela">
        <!-- Cabeçalho da tabela só aparece se houver pedidos -->
        <div v-if="listaPedidosRealizado.length > 0">
            <div id="pedidos-tabela-cabecalho">
                <div id="ordem-id">#ID</div>
                <div>Nome</div>
                <div>Sabor</div>
                <div>Refrigerante</div>
                <div>Status</div>
                <div id="div-acoes">Ações</div>
            </div>
        </div>

        <!-- Mensagem personalizada quando não houver pedidos -->
        <div v-else class="empty-state">
            <p>Vazio</p>
        </div>

        <!-- Mensagens de feedback -->
        <div v-if="feedbackMessage" :class="['feedback', feedbackType]">
            {{ feedbackMessage }}
            <button @click="feedbackMessage = ''" class="close-btn">x</button>
        </div>

        <!-- Linhas da tabela - aparecem só se houver pedidos -->
        <div class="pedidos-tabela-linha" v-for="pedido in listaPedidosRealizado" :key="pedido.id"
            v-if="listaPedidosRealizado.length > 0">
            <div id="ordem-numero">{{ pedido.id }}</div>
            <div>{{ pedido.nome }}</div>
            <div>{{ pedido.hamburguer.nome }}</div>
            <div>
                <ul>
                    <li v-for="bebida in pedido.bebidas" :key="bebida.id">{{ bebida.nome }}</li>
                </ul>
            </div>
            <div>
                <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">
                    <option value="">Selecione</option>
                    <option v-for="status in listaStatusPedido" :key="status.id" :value="status.id"
                        :selected="status.id === pedido.statusId">
                        {{ status.descricao }}
                    </option>
                </select>
            </div>
            <div id="div-acoes">
                <img src="/img/icone_lixeira.png" alt="Excluir" width="35px" height="35px"
                    @click="deletarPedido(pedido.id)" style="cursor: pointer;" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ListaPedidoComponent",
    data() {
        return {
            listaPedidosRealizado: [],
            listaStatusPedido: [],
            feedbackMessage: "",
            feedbackType: "info", // pode ser 'success' ou 'error'
        };
    },
    methods: {
        async consultarPedidos() {
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizado = await response.json();
        },
        async consultarStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json();
        },
        showFeedback(message, type = "info") {
            this.feedbackMessage = message;
            this.feedbackType = type;

            // Fecha mensagem automaticamente após 3 segundos
            setTimeout(() => {
                this.feedbackMessage = "";
            }, 3000);
        },
        async deletarPedido(id) {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE",
                });

                if (response.ok) {
                    this.listaPedidosRealizado = this.listaPedidosRealizado.filter((pedido) => pedido.id !== id);
                    this.showFeedback("Pedido excluído com sucesso!", "success");
                } else {
                    this.showFeedback("Erro ao excluir pedido.", "error");
                }
            } catch (error) {
                this.showFeedback("Erro na comunicação com o servidor.", "error");
                console.error(error);
            }
        },
        async atualizarStatusPedido(event, id) {
            const novoStatusId = event.target.value;
            const pedido = this.listaPedidosRealizado.find((p) => p.id === id);

            if (!pedido) {
                this.showFeedback("Pedido não encontrado.", "error");
                return;
            }

            const statusAntigoObj = this.listaStatusPedido.find((s) => s.id === pedido.statusId);
            const statusNovoObj = this.listaStatusPedido.find((s) => s.id === novoStatusId);

            const statusAntigo = statusAntigoObj ? statusAntigoObj.descricao : "desconhecido";
            const statusNovo = statusNovoObj ? statusNovoObj.descricao : "desconhecido";

            const atualizacaoJson = JSON.stringify({ statusId: novoStatusId });

            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: atualizacaoJson,
                });

                if (response.ok) {
                    // Atualiza localmente o status do pedido para refletir mudança
                    pedido.statusId = novoStatusId;
                    this.showFeedback(`Status do pedido #${id} mudou de "${statusAntigo}" para "${statusNovo}".`, "success");
                } else {
                    this.showFeedback("Erro ao atualizar status.", "error");
                }
            } catch (error) {
                this.showFeedback("Erro na comunicação com o servidor.", "error");
                console.error(error);
            }
        },
    },
    mounted() {
        this.consultarPedidos();
        this.consultarStatus();
    },
};
</script>

<style scoped>
#pedidos-tabela {
    width: 100%;
    margin: 0 auto;
    font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
    background: #fff5e6;
    /* creme */
    color: #330000;
    /* marrom escuro */
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 18px rgba(0, 0, 0, 0.1);
}

#pedidos-tabela-cabecalho,
#pedidos-tabela-linhas,
.pedidos-tabela-linha {
    display: flex;
    flex-wrap: wrap;
}

#pedidos-tabela-cabecalho {
    font-weight: bold;
    padding: 12px;
    border-bottom: 3px solid #e67300;
    /* laranja escuro */
    background-color: #ffe0b3;
    /* amarelo claro */
    color: #b30000;
    /* vermelho escuro */
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
    width: 20%;
}

.pedidos-tabela-linha {
    width: 100%;
    padding: 12px 0;
    border-bottom: 1px solid #e0c3a0;
}

#pedidos-tabela-cabecalho #ordem-id,
.pedidos-tabela-linha #ordem-numero,
.pedidos-tabela-linha #div-acoes,
#pedidos-tabela-cabecalho #div-acoes {
    width: 5%;
}

select {
    padding: 5px;
    width: 120px;
    border: 1px solid #c40000;
    border-radius: 6px;
    height: 36px;
    font-size: 14px;
    background-color: #e6ac00;
    /* amarelo dourado */
    color: #fff;
    font-weight: 600;
}

select option {
    color: #333;
    background-color: #fff5e6;
}

.empty-state {
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
    color: #b30000;
    font-weight: bold;
}

.link-menu {
    color: #e63900;
    transition: 0.3s;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
}

#div-acoes img {
    transition: 0.3s ease;
}

#div-acoes img:hover {
    filter: drop-shadow(0 0 5px #ff6600);
    transform: scale(1.05);
}

.feedback {
    margin: 12px auto;
    padding: 12px 24px;
    border-radius: 8px;
    max-width: 90%;
    font-weight: bold;
    position: relative;
    box-shadow: 0 0 10px rgba(255, 102, 0, 0.4);
}

.feedback.info {
    background-color: #fff3cc;
    color: #b35c00;
    border-left: 5px solid #e6ac00;
}

.feedback.success {
    background-color: #c40000;
    color: white;
    border-left: 5px solid #ffcc00;
}

.feedback.error {
    background-color: #660000;
    color: #fff;
    border-left: 5px solid #ff3300;
}

.close-btn {
    position: absolute;
    top: 4px;
    right: 8px;
    background: transparent;
    border: none;
    font-weight: bold;
    font-size: 16px;
    color: inherit;
    cursor: pointer;
}
</style>

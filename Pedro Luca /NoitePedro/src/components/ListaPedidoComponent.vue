<template>
    <div id="pedidos-tabela">
        <!-- Cabeçalho da tabela só aparece se houver pedidos -->
        <transition name="fade">
            <div v-if="feedbackMessage" :class="['toast', feedbackType]" role="alert" aria-live="assertive"
                aria-atomic="true">
                <span class="icon" v-if="feedbackType === 'error'">⚠️</span>
                <span class="icon" v-else-if="feedbackType === 'success'">✅</span>
                <span class="icon" v-else>ℹ️</span>
                <span class="message">{{ feedbackMessage }}</span>
                <button @click="feedbackMessage = ''" class="close-btn" aria-label="Fechar mensagem">×</button>
            </div>
        </transition>
        <div v-if="listaPedidosRealizado.length > 0">
            <div id="pedidos-tabela-cabecalho">
                <div id="ordem-id">#ID</div>
                <div>Nome</div>
                <div>Prato</div>
                <div>Refrigerante</div>
                <div>Status</div>
                <div id="div-acoes">Ações</div>
            </div>
        </div>

        <div v-else class="empty-state">
            <p>Vazio</p>
        </div>
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
    background: #f9f5ef;
    /* fundo bege suave */
    color: #4b2e00;
    /* marrom escuro */
    padding: 20px;
    border-radius: 14px;
    box-shadow: 0 5px 20px rgba(160, 82, 45, 0.2);
    /* sombra marrom suave */
}

#pedidos-tabela-cabecalho,
#pedidos-tabela-linhas,
.pedidos-tabela-linha {
    display: flex;
    flex-wrap: wrap;
}

#pedidos-tabela-cabecalho {
    font-weight: 700;
    padding: 14px;
    border-bottom: 3px solid #d29943;
    /* amarelo dourado médio */
    background-color: #f0e4d7;
    /* bege claro */
    color: #8b3d00;
    /* marrom avermelhado */
    user-select: none;
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
    width: 20%;
}

.pedidos-tabela-linha {
    width: 100%;
    padding: 14px 0;
    border-bottom: 1px solid #decbb3;
    /* bege médio */
    transition: background-color 0.2s ease;
}

.pedidos-tabela-linha:hover {
    background-color: #fdeedb;
    /* destaque suave */
}

#pedidos-tabela-cabecalho #ordem-id,
.pedidos-tabela-linha #ordem-numero,
.pedidos-tabela-linha #div-acoes,
#pedidos-tabela-cabecalho #div-acoes {
    width: 5%;
}

select.status {
    padding: 6px;
    width: 130px;
    border: 1.8px solid #8b3d00;
    /* marrom avermelhado */
    border-radius: 8px;
    height: 38px;
    font-size: 15px;
    background-color: #d29943;
    /* amarelo dourado médio */
    color: #fff;
    font-weight: 700;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

select.status option {
    color: #4b2e00;
    /* marrom escuro */
    background-color: #f9f5ef;
    /* bege suave */
}

.empty-state {
    text-align: center;
    margin-top: 50px;
    font-size: 20px;
    color: #8b3d00;
    /* marrom avermelhado */
    font-weight: 700;
}

#div-acoes img {
    transition: filter 0.3s ease, transform 0.3s ease;
    cursor: pointer;
}

#div-acoes img:hover {
    filter: drop-shadow(0 0 6px #d29943);
    transform: scale(1.1);
}

.feedback {
    margin: 18px auto;
    padding: 14px 28px;
    border-radius: 10px;
    max-width: 90%;
    font-weight: 700;
    position: relative;
    box-shadow: 0 0 14px rgba(210, 153, 67, 0.6);
}

.feedback.info {
    background-color: #fff7e1;
    color: #b37400;
    border-left: 6px solid #d29943;
}

.feedback.success {
    background-color: #8b3d00;
    color: #fffaf0;
    border-left: 6px solid #f2c94c;
}

.feedback.error {
    background-color: #5c1a00;
    color: #fff3e0;
    border-left: 6px solid #ff6a00;
}

.close-btn {
    position: absolute;
    top: 6px;
    right: 10px;
    background: transparent;
    border: none;
    font-weight: 700;
    font-size: 18px;
    color: inherit;
    cursor: pointer;
    line-height: 1;
    user-select: none;
}

.toast {
    position: fixed;
    top: 20px;
    left: 50%;
    transform: translateX(-50%);
    min-width: 280px;
    max-width: 90vw;
    padding: 15px 20px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.25);
    font-weight: 600;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    display: flex;
    align-items: center;
    gap: 10px;
    z-index: 9999;
}

.toast.info {
    background-color: #fff7e1;
    color: #b37400;
    border: 2px solid #d29943;
}

.toast.success {
    background-color: #8b3d00;
    color: #fffaf0;
    border: 2px solid #f2c94c;
}

.toast.error {
    background-color: #5c1a00;
    color: #fff3e0;
    border: 2px solid #ff6a00;
}

.icon {
    font-size: 22px;
    user-select: none;
}

.message {
    flex-grow: 1;
}

.close-btn {
    background: transparent;
    border: none;
    color: inherit;
    font-size: 22px;
    cursor: pointer;
    font-weight: 700;
    line-height: 1;
    padding: 0;
    user-select: none;
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>

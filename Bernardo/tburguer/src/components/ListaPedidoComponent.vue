<template>
    <div id="pedidos-tabela">
        <!-- ALERTA -->
        <mensagem-alerta :texto="mensagem" :tipo="tipoMensagem" :visivel="mostrarMensagem"
            @fechou="mostrarMensagem = false" />

        <!-- Cabeçalho da tabela -->
        <div v-if="listaPedidosRealizado.length > 0">
            <div id="pedidos-tabela-cabecalho">
                <div id="ordem-id">#ID</div>
                <div>Nome</div>
                <div>Hamburguer</div>
                <div>Ponto</div>
                <div>Opcionais</div>
                <div>Status</div>
                <div id="div-acoes">Ações</div>
            </div>
        </div>

        <!-- Mensagem personalizada quando não houver pedidos -->
        <div v-else class="empty-state">
            <p>Infelizmente você ainda não realizou seu pedido.</p>
            <router-link to="/menu" class="link-menu">Pedir agora</router-link>
        </div>

        <!-- Linhas da tabela -->
        <div class="pedidos-tabela-linha" v-for="pedido in listaPedidosRealizado" :key="pedido.id"
            v-if="listaPedidosRealizado.length > 0">
            <div id="ordem-numero">{{ pedido.id }}</div>
            <div>{{ pedido.nome }}</div>
            <div>{{ pedido.hamburguer.nome }}</div>
            <div>{{ pedido.ponto.descricao }}</div>
            <div>
                <ul>
                    <li v-for="(complemento, index) in pedido.complementos" :key="index">
                        {{ complemento.nome }}
                    </li>
                </ul>
                <div class="divisor"></div>
                <ul>
                    <li v-for="bebida in pedido.bebidas" :key="bebida.id">{{ bebida.nome }}</li>
                </ul>
            </div>
            <div>
                <select name="status" class="status" @change="atualizarStatusPedido($event, pedido.id)">
                    <option value="">Selecione</option>
                    <option v-for="status in listaStatusPedido" :key="status.id" :value="status.id"
                        :selected="status.id == pedido.statusId">
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
import MensagemAlerta from "@/components/MensagemAlerta.vue";

export default {
    name: "ListaPedidoComponent",
    components: {
        MensagemAlerta
    },
    data() {
        return {
            listaPedidosRealizado: [],
            listaStatusPedido: [],
            mensagem: '',
            tipoMensagem: 'sucesso', // ou 'erro'
            mostrarMensagem: false
        };
    },
    methods: {
        mostrarAlerta(texto, tipo = 'sucesso') {
            this.mensagem = texto;
            this.tipoMensagem = tipo;
            this.mostrarMensagem = true;
            setTimeout(() => {
                this.mostrarMensagem = false;
            }, 4000);
        },

        async consultarPedidos() {
            const response = await fetch("http://localhost:3000/pedidos");
            this.listaPedidosRealizado = await response.json();
        },

        async consultarStatus() {
            const response = await fetch("http://localhost:3000/status_pedido");
            this.listaStatusPedido = await response.json();
        },

        async deletarPedido(id) {
            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "DELETE"
                });

                if (response.ok) {
                    this.listaPedidosRealizado = this.listaPedidosRealizado.filter(
                        (pedido) => pedido.id !== id
                    );
                    this.mostrarAlerta("Pedido excluído com sucesso!", "sucesso");
                } else {
                    this.mostrarAlerta("Erro ao excluir pedido.", "erro");
                }
            } catch (error) {
                this.mostrarAlerta("Erro na comunicação com o servidor.", "erro");
                console.error(error);
            }
        },

        async atualizarStatusPedido(event, id) {
            const novoStatusId = event.target.value; // permanece string

            const pedido = this.listaPedidosRealizado.find(p => p.id === id);
            if (!pedido) {
                this.mostrarAlerta("Pedido não encontrado.", "erro");
                return;
            }

            const statusAntigo = this.listaStatusPedido.find(s => s.id === String(pedido.statusId));
            const statusNovo = this.listaStatusPedido.find(s => s.id === String(novoStatusId));

            const atualizacaoJson = JSON.stringify({ statusId: novoStatusId });

            try {
                const response = await fetch(`http://localhost:3000/pedidos/${id}`, {
                    method: "PATCH",
                    headers: { "Content-Type": "application/json" },
                    body: atualizacaoJson
                });

                if (response.ok) {
                    pedido.statusId = novoStatusId; // atualiza localmente

                    this.mostrarAlerta(
                        `Status do pedido #${id} alterado de "${statusAntigo?.descricao}" para "${statusNovo?.descricao}".`,
                        "sucesso"
                    );
                } else {
                    this.mostrarAlerta("Erro ao atualizar status do pedido.", "erro");
                }
            } catch (error) {
                this.mostrarAlerta("Erro na comunicação com o servidor.", "erro");
                console.error(error);
            }
        }


    },
    mounted() {
        this.consultarPedidos();
        this.consultarStatus();
    }
};
</script>


<style scoped>
#pedidos-tabela {
    width: 100%;
    margin: 0 auto;
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
    border-bottom: 2px solid #222;
}

#pedidos-tabela-cabecalho div,
.pedidos-tabela-linha div {
    width: 18%;
}

.pedidos-tabela-linha {
    width: 100%;
    padding-top: 12px;
    border-bottom: 1px solid #ccc;
}

#pedidos-tabela-cabecalho #ordem-id,
.pedidos-tabela-linha #ordem-numero,
.pedidos-tabela-linha #div-acoes,
#pedidos-tabela-cabecalho #div-acoes {
    width: 5%;
}

select {
    padding: 2px;
    width: 110px;
    border: #222 solid 1px;
    height: 36px;
    margin-right: 8px;
    font-size: 12px;
}

.pedidos-tabela-linha .divisor {
    margin-top: 8px;
    margin-bottom: 8px;
    width: 100%;
    height: 2px;
    background-color: darkgoldenrod;
}

/* Estilos para a mensagem quando não houver pedidos */
.empty-state {
    text-align: center;
    margin-top: 40px;
    font-size: 18px;
    color: #555;
}

.link-menu {

    color: darkgoldenrod;
    transition: .5s;
    display: inline-block;
    margin-top: 12px;
    font-weight: bold;
    text-decoration: underline;
    cursor: pointer;
    margin-bottom: 10px;
}
</style>

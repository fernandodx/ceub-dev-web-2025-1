<template>
    <div>
        <h1>Menu</h1>
        <div class="carousel-wrapper">
            <button class="arrow left" @click="scrollLeft">‹</button>

            <div id="scroll-horizontal" ref="scrollContainer">
                <div id="card-content" v-for="burguer in listaMenuHamburgues" :key="burguer.id">
                    <div id="card-linha">
                        <div class="foto-hamburguer">
                            <img :src="burguer.foto" :alt="burguer.nome" />
                            <div class="card-coluna">
                                <p id="nome-content">{{ burguer.nome }}</p>
                                <p id="preco-content">R$ {{ burguer.valor }},00</p>
                                <p id="descricao-content">{{ burguer.descricao }}</p>
                                <button @click="selecionarBurguer(burguer)">Selecionar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <button class="arrow right" @click="scrollRight">›</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MenuView",
    data() {
        return {
            listaMenuHamburgues: [],
            autoScrollInterval: null,
        };
    },
    methods: {
        async consultarMenu() {
            const response = await fetch("http://localhost:3000/menu");
            const dados = await response.json();
            this.listaMenuHamburgues = dados.burgues;
        },
        selecionarBurguer(burguerSelecionado) {
            const param = JSON.stringify(burguerSelecionado);
            const burguerJsonEncode = encodeURIComponent(param);
            this.$router.push({ path: "/config-pedido", query: { burguer: burguerJsonEncode } });
        },
        scrollLeft() {
            const container = this.$refs.scrollContainer;
            if (container) {
                container.scrollLeft -= 300;
            }
        },
        scrollRight() {
            const container = this.$refs.scrollContainer;
            if (container) {
                container.scrollLeft += 300;
            }
        }
    },
    mounted() {
        this.consultarMenu();
    }
};
</script>

<style scoped>
.carousel-wrapper {
    display: flex;
    align-items: center;
    position: relative;
    width: 100%;
    max-width: 1000px;
    margin: 0 auto;
}

#scroll-horizontal {
    display: flex;
    overflow-x: auto;
    scroll-behavior: smooth;
    gap: 20px;
    padding: 20px 10px;
    width: 88%;

    scrollbar-width: none;
    -ms-overflow-style: none;
}

#scroll-horizontal::-webkit-scrollbar {
    display: none;
    /* Safari e Chrome */
}

#card-content {
    flex: 0 0 280px;
    min-height: 500px;
    background-color: #fff;
    border: 1px solid #ddd;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    display: flex;
    flex-direction: column;
    transition: transform 0.3s ease;
}

#card-content:hover {
    transform: scale(1.02);
}

#card-linha {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.foto-hamburguer {
    display: flex;
    flex-direction: column;
    height: 100%;
}

.foto-hamburguer img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    flex-shrink: 0;
}

.card-coluna {
    padding: 15px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
}

#nome-content {
    font-size: 24px;
    font-weight: bold;
    text-align: center;
    margin-bottom: 10px;
    color: #222;
}

#preco-content {
    font-size: 22px;
    color: green;
    text-align: center;
    font-weight: bold;
    margin-bottom: 10px;
}

#descricao-content {
    color: #555;
    font-size: 14px;
    line-height: 1.4;
    margin-bottom: 16px;
    text-align: justify;
    flex-grow: 1;
}

.card-coluna button {
    padding: 10px;
    background-color: rgb(12, 169, 124);
    color: #fff;
    border: none;
    border-radius: 6px;
    cursor: pointer;
    font-size: 14px;
    font-weight: bold;
    transition: 0.3s;
    width: 100%;
    flex-shrink: 0;
}

.card-coluna button:hover {
    background-color: transparent;
    color: rgb(6, 87, 85);
    border: 1px solid rgb(6, 87, 85);
}

.arrow {
    font-size: 36px;
    background-color: transparent;
    color: #444;
    border: none;
    cursor: pointer;
    padding: 10px;
    transition: 0.3s;
    z-index: 10;
    user-select: none;
}

.arrow:hover {
    color: #000;
    transform: scale(1.1);
}
</style>

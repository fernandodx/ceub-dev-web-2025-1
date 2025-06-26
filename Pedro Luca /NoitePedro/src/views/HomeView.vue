<template>
    <div class="home-container">
        <div class="content-wrapper">
            <header class="header">
                <h1 class="title">Restaurante do Pedro</h1>
                <p class="subtitle">Sabor autêntico em cada prato 🍽️</p>
            </header>

            <section class="highlights">
                <h2>Destaques do Cardápio</h2>
                <ul>
                    <li>Bolinho de bacalhau com molho especial</li>
                    <li>Filé acebolado com fritas crocantes</li>
                    <li>Porção de picanha na chapa + acompanhamentos</li>
                </ul>
            </section>

            <section class="contact">
                <h2>Entre em Contato</h2>
                <ul>
                    <li>WhatsApp: (61) 99173-6451</li>
                    <li>Instagram: @cerbinorestaurante</li>
                    <li>Localização: Ceilândia, Taguatinga, Samambaia</li>
                </ul>
            </section>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeView",
};
</script>

<style scoped>
.home-container {
    font-family: 'Segoe UI', sans-serif;
    background-color: #fffaf0;
    /* fundo suave */
    color: #3e1f00;
    min-height: 100vh;

    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}

.content-wrapper {
    max-width: 600px;
    width: 100%;
    text-align: center;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.title {
    font-size: 48px;
    color: #8b0000;
    /* vermelho escuro */
    margin-bottom: 10px;
}

.subtitle {
    font-size: 20px;
    color: #a0522d;
    /* marrom médio */
    font-weight: 600;
}

section h2 {
    font-size: 24px;
    margin-bottom: 15px;
    color: #a52a2a;
    /* tom terroso */
}

section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

section ul li {
    font-size: 16px;
    color: #4b2e00;
    margin-bottom: 10px;
}
</style>

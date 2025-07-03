<template>
    <div class="home-container">
        <div class="content-wrapper">
            <header class="header">
                <h1 class="title">Cerbino Pizzaria</h1>
                <p class="subtitle">Sabor que conquista, tradição em cada fatia 🍕</p>
            </header>

            <div class="info-sections">
                <section class="highlights">
                    <h2>Nossas Pizzas</h2>
                    <ul>
                        <li>Pizza Portuguesa com borda recheada</li>
                        <li>Calabresa especial com cebola caramelizada</li>
                        <li>Combo Família + Refrigerante grátis</li>
                    </ul>
                </section>

                <section class="contact">
                    <h2>Faça seu pedido</h2>
                    <ul>
                        <li>WhatsApp: (61) 99173-6451</li>
                        <li>Instagram: @cerbinopizzaria</li>
                        <li>Entregas: Ceilândia, Taguatinga, Samambaia</li>
                    </ul>
                </section>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HomeView',
}
</script>

<style scoped>
.home-container {
    font-family: 'Segoe UI', sans-serif;
    background-color: #fff5e6;
    /* tom de fundo quente */
    color: #4d1c00;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 40px 20px;
}

.content-wrapper {
    display: flex;
    flex-direction: row;
    gap: 60px;
    align-items: flex-start;
    max-width: 1200px;
    flex-wrap: wrap;
}

.header {
    flex: 1;
    min-width: 300px;
}

.title {
    font-size: 48px;
    color: #c40000;
    /* vermelho vivo */
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    color: #e67300;
    /* amarelo escuro */
    font-weight: 600;
}

.info-sections {
    flex: 2;
    display: flex;
    gap: 40px;
    flex-wrap: wrap;
}

section {
    flex: 1;
    min-width: 250px;
}

section h2 {
    font-size: 22px;
    margin-bottom: 10px;
    color: #b30000;
    /* vermelho escuro */
}

section ul {
    list-style: none;
    padding: 0;
}

section ul li {
    font-size: 16px;
    color: #663300;
    margin-bottom: 8px;
}
</style>

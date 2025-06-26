<template>
    <div class="home-container">
        <header class="header">
            <h1 class="title">Be Sushi</h1>
            <p class="subtitle">Sabor autêntico, frescor incomparável 🍣</p>
        </header>

        <section class="location">
            <h2>📍 Nossa localização</h2>
            <iframe
                src="https://www.google.com/maps/embed?pb=!3m2!1spt-BR!2sbr!4v1750882973666!5m2!1spt-BR!2sbr!6m8!1m7!1suWktSPz0Ydp8lD8Hs8qHdQ!2m2!1d-15.80846312241279!2d-47.88615616377042!3f240.5460870572612!4f10.531399227837952!5f1.7495536556950357"
                width="800" height="300" style="border:0;" allowfullscreen="" loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"></iframe>
        </section>

        <section class="contact">
            <h2>📞 Entre em contato</h2>
            <ul>
                <li>Telefone: (77) 99910-3979</li>
                <li>Email: contato@besushi.com</li>
                <li>Instagram: @besushi</li>
            </ul>
        </section>
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
    background-color: white;
    color: #fff;
    min-height: 100vh;
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 40px;
}

.header {
    text-align: center;
}

.title {
    font-size: 48px;
    color: #ffdd57;
    margin-bottom: 10px;
}

.subtitle {
    font-size: 18px;
    color: black;
}

section {
    background-color: #1a1a1a;
    padding: 25px;
    border-left: 4px solid #ffdd57;
    box-shadow: 0 0 10px rgba(255, 221, 87, 0.2);
}

section h2 {
    margin-bottom: 10px;
    font-size: 22px;
    color: #ffdd57;
}

section p,
section ul {
    font-size: 16px;
    color: #eee;
}

section ul {
    list-style: none;
    padding: 0;
    margin: 0;
}

section ul li {
    margin-bottom: 8px;
}

.footer {
    text-align: center;
    margin-top: auto;
    font-size: 14px;
    color: #666;
}
</style>

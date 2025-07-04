<template>
    <div id="main-banner">
        <div class="overlay">
            <div class="banner-content">
                <h1 class="main-title">Cerbino Pizzaria</h1>
                <p class="subtitle">Sabor e tradição direto do forno para sua mesa 🍕</p>
                <router-link to="/menu" class="btn-action">
                    Ver Cardápio
                </router-link>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerComponent",
};
</script>

<style scoped>
#main-banner {
    background-image: url("/public/img/banner.jpg");
    background-size: cover;
    background-position: center;
    height: 520px;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}

.overlay {
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(255, 0, 0, 0.5),
            rgba(255, 200, 0, 0.4));
    /* degradê vermelho-amarelo */
    display: flex;
    align-items: center;
    justify-content: center;
}

.banner-content {
    text-align: center;
    color: #fffbe6;
    font-family: "Segoe UI", sans-serif;
    padding: 20px;
    max-width: 700px;
}

.main-title {
    font-size: 54px;
    font-weight: 800;
    margin-bottom: 20px;
    text-shadow: 2px 2px 6px rgba(0, 0, 0, 0.5);
}

.subtitle {
    font-size: 22px;
    font-weight: 400;
    margin-bottom: 35px;
    color: #ffe6b3;
    text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.4);
}

.btn-action {
    display: inline-block;
    padding: 16px 44px;
    background-color: #e63900;
    /* vermelho queimado */
    color: white;
    font-weight: bold;
    border-radius: 30px;
    font-size: 18px;
    text-decoration: none;
    transition: background-color 0.3s ease, transform 0.2s ease;
    box-shadow: 0 6px 20px rgba(0, 0, 0, 0.3);
}

.btn-action:hover {
    background-color: #cc3300;
    transform: translateY(-2px);
}
</style>

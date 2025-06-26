<template>
    <div id="main-banner">
        <div class="content-wrapper">
            <div class="text-content">
                <h1 class="main-title">Sabor que Encanta, Ambiente que Abraça</h1>
                <p class="subtitle">
                    Petiscos artesanais e pratos feitos com ingredientes frescos para momentos especiais.
                </p>
                <router-link to="/menu" class="btn-action">
                    Veja o Cardápio
                </router-link>
            </div>
            <div class="image-content"></div>
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
    width: 100%;
    height: 520px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #fffaf0;
    font-family: "Segoe UI", sans-serif;
}

.content-wrapper {
    display: flex;
    max-width: 1200px;
    margin-top: 50px;
    margin-bottom: 50px;
    width: 100%;
    height: 100%;
    box-shadow: 0 4px 15px rgb(0 0 0 / 0.1);
    border-radius: 12px;
    overflow: hidden;
}

.text-content {
    flex: 1;
    margin-top: 5px;
    background-color: #8b0000;
    color: #fffaf0;
    padding: 60px 50px;
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.main-title {
    font-size: 42px;
    font-weight: 700;
    margin-bottom: 20px;
    line-height: 1.2;
}

.subtitle {
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 40px;
    color: #ffdca3;
}

.btn-action {
    width: max-content;
    padding: 14px 48px;
    background-color: #a52a2a;
    color: white;
    font-weight: 700;
    font-size: 18px;
    border-radius: 30px;
    text-decoration: none;
    box-shadow: 0 6px 18px rgba(0, 0, 0, 0.3);
    transition: background-color 0.3s ease, transform 0.2s ease;
}

.btn-action:hover {
    background-color: #7b1f1f;
    transform: translateY(-3px);
}

.image-content {
    flex: 1;
    background-image: url("/public/img/banner.jpg");
    background-size: cover;
    background-position: center;
    filter: brightness(0.85);
}
</style>

<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img :src="urlLogo" :alt="descImg" id="logo" />
            </router-link>
            <div class="nav-links">
                <router-link to="/menu">Cardápio</router-link>
                <router-link to="/pedidos">Pedidos</router-link>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "NavbarComponent",
    props: {
        urlLogo: String,
        descImg: String,
    },
};
</script>

<style scoped>
#nav {
    background-color: #c40000;
    /* vermelho vibrante */
    border-bottom: 4px solid #e6ac00;
    /* amarelo dourado */
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', sans-serif;
}

#logo-url {
    display: flex;
    align-items: center;
}

#logo {
    width: 50px;
    height: 50px;
}

.nav-links {
    display: flex;
    gap: 24px;
}

#nav a {
    color: #fff5cc;
    /* amarelo claro */
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    transition: all 0.3s ease;
    padding: 6px 12px;
    border-radius: 8px;
}

#nav a:hover {
    background-color: #e67300;
    /* laranja escuro */
    color: white;
    transform: scale(1.05);
}
</style>

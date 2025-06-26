<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img :src="urlLogo" :alt="descImg" id="logo" />
                <span class="restaurant-name">Restaurante do Pedro</span>
            </router-link>
            <div class="nav-links">
                <router-link to="/menu" class="nav-link">Cardápio</router-link>
                <router-link to="/pedidos" class="nav-link">Pedidos</router-link>
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
    background-color: #6b3e26;
    /* marrom quente */
    border-bottom: 3px solid #a0522d;
    /* marrom médio */
    padding: 15px 40px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-family: 'Segoe UI', sans-serif;
    flex-wrap: wrap;
}

#logo-url {
    display: flex;
    align-items: center;
    gap: 12px;
    text-decoration: none;
    color: #fffaf0;
}

#logo {
    width: 60px;
    height: 60px;
    object-fit: contain;
}

.restaurant-name {
    font-size: 20px;
    font-weight: 700;
    user-select: none;
}

.nav-links {
    display: flex;
    gap: 30px;
}

.nav-link {
    position: relative;
    color: #fffaf0;
    text-decoration: none;
    font-weight: 600;
    font-size: 18px;
    padding: 6px 10px;
    transition: color 0.3s ease;
}

.nav-link::after {
    content: "";
    position: absolute;
    width: 0;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #d8a35a;
    transition: width 0.3s ease;
    border-radius: 2px;
}

.nav-link:hover {
    color: #ffdca3;
}

.nav-link:hover::after {
    width: 100%;
}

/* Responsividade simples */
@media (max-width: 600px) {
    #nav {
        padding: 10px 20px;
    }

    .nav-links {
        width: 100%;
        justify-content: center;
        margin-top: 10px;
    }

    .nav-link {
        font-size: 16px;
        padding: 8px 14px;
    }

    .restaurant-name {
        font-size: 18px;
    }
}
</style>

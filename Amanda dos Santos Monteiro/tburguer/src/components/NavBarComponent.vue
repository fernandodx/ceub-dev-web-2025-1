<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img src="/img/logo_tburguer.png" id="logo"/> 
            </router-link>
            <router-link to="/Menu">Menu</router-link>
            <router-link to="/Pedidos">Pedidos</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBarComponent"
    }
</script>

<style scoped>

    #nav {
        background-color: #333;
        border-bottom: 3px solid rgb(247, 196, 31);
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav a {
        color: whitesmoke;
        text-decoration: none;
        margin: 12px;
        transition: .5;
    }
    nav a:hover {
        color: white;
        font-size: 20px;
        
    }  
    
    #nav #logo-url {
        margin: auto;
        margin-left: 0;
    }
    #logo {
        width: 60px;
        height: 60px;
    }

</style>
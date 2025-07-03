<template>
    <div>
        <nav id="nav">
            <router-link to="/" id="logo-url">
                <img src="https://imgs.search.brave.com/ACgtthpHw-pnEZPgAOVoj3lapJng2Ii1Kuw-RzZF_T0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/cy13b3JsZC5uZXQv/d3AtY29udGVudC91/cGxvYWRzLzIwMjEv/MTAvUGl6emEtSHV0/LUxvZ28tNzAweDM5/NC5wbmc" id="logo"/>
            </router-link>
            <router-link to="/menu">Cardápio</router-link>
            <router-link to="/pedidos">Pedidos</router-link>
        </nav>
    </div>
</template>

<script>
    export default {
        name: "NavBarComponent"
    }
</script>

<style scoped>

    #logo {
        width: 60px;
        height: 60px;
    }

    #nav #logo-url{
        margin: auto;
        margin-left: 0;
    }

    #nav {
        background-color: #333;
        border-bottom: 3px solid darkgoldenrod;
        padding: 15px 50px;
        display: flex;
        justify-content: flex-end;
        align-items: center;
    }

    #nav a {
        color: darkgoldenrod;
        text-decoration: none;
        margin: 12px;
        transition: .5s;
    }
    #nav a:hover {
        color: antiquewhite;
        font-size: 20px;
    }

  



</style>
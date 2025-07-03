<template>
    <div>
      <nav id="nav">
        <div id="nav-left">
          <img src="/img/logo_tpizzaria.png" id="logo" alt="T Pizzaria">
        </div>
        <div id="nav-right">
          <router-link to="/menu">Menu</router-link>
          <router-link to="/pedidos">Pedidos</router-link>
        </div>
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
  border-bottom: 3px solid #ff6b35;
  padding: 15px 50px;
  display: flex;
  justify-content: space-between; /* separa esquerda e direita */
  align-items: center;
}

#nav-left {
  display: flex;
  align-items: center;
}

#nav-right {
  display: flex;
  align-items: center;
}

#nav a {
  color: #ff6b35;
  text-decoration: none;
  margin: 12px;
  transition: 0.5s;
}

#nav a:hover {
  color: antiquewhite;
  font-size: 20px;
}

#logo {
  width: 50px;
  height: 50px;
}


</style>
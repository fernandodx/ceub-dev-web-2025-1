<template>
    <div>
      <nav id="nav">
        <router-link to="/" id="logo-url">
          <img src="/img/logo_sushi.png" id="logo" />
        </router-link>
        <div class="nav-links">
          <router-link to="/menu">Menu</router-link>
          <router-link to="/pedidos">Pedidos</router-link>
        </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
    name: "NavBarComponent",
  };
  </script>
  
  <style scoped>
  #nav {
    background-color: white;
    border-bottom: 2px solid black;
    padding: 0 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 80px; /* altura fixa */
    overflow: hidden; /* impede de crescer */
  }
  
  #logo {
    width: 120px;
    height: 120px;
    object-fit: contain;
    margin-top: -20px; /* sobe a imagem para encaixar */
  }
  
  .nav-links {
    display: flex;
    gap: 30px;
    align-items: center;
  }
  
  .nav-links a {
    color: black;
    text-decoration: none;
    font-size: 16px;
    transition: 0.3s;
  }
  
  .nav-links a:hover {
    color: salmon;
    font-weight: bold;
  }
  </style>
  
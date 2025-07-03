<template>
  <div id="app">
    <h1>PAPA'S PIZZARIA</h1>

    <!-- Mensagem de boas-vindas -->
    <MensagemComponente
      tipo="sucesso"
      texto="Bem-vindo à pizzaria!"
      :visivel="true"
    />

    <!-- Navegação entre páginas -->
    <nav>
      <router-link to="/">Início</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>

    <!-- Ponto onde as views serão renderizadas -->
    <router-view />
  </div>
</template>

<script>
import MensagemComponente from './components/Mensagem.vue'

export default {
  name: 'App',
  components: {
    MensagemComponente
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@400;700&display=swap');
/* 🎨 Variáveis de cor para todo o app */
:root {
  --vermelho-pizza: #FF6347;
  --amarelo-queijo: #FFD700;
  --marrom-crosta: #8B4513;
  --verde-manjericao: #228B22;
  --cinza-escuro: #2c3e50;
  --fundo-claro: #transparent;
}

/* Estilo global base */
body {
  margin: 0;
  padding: 0;
  font-family: 'Roboto', sans-serif; 
  background-color: var(--fundo-claro);
  color: var(--cinza-escuro);
  h1, h2, h3, h4, h5, h6 {
  font-family: 'Montserrat', sans-serif;
}
body, html, #app {
  background-color: var(--fundo-claro);
}
}


#app {
  text-align: center;
  padding-top: 20px;
}

/* Estilo do menu */
nav {
  position: sticky;
  top: 0;
  background-color: #fff;
  padding: 10px 0;
  box-shadow: 0 2px 4px rgba(0,0,0,0.1);
  z-index: 100;
}
nav a {
  margin: 0 10px;
  font-weight: bold;
  color: var(--verde-manjericao);
  text-decoration: none;
}
nav a.router-link-exact-active {
  text-decoration: underline;
}

/* Botões principais (call to action) */
button,
button.cta,
.btn-cta {
  background: var(--vermelho-pizza);
  color: white;
  padding: 8px 16px;
  margin: 5px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background 0.2s, transform 0.1s;
}

button:hover,
button.cta:hover,
.btn-cta:hover {
  background: var(--marrom-crosta);
}

/* Botões CTA específicos (cores invertidas) */
button.cta,
.btn-cta {
  background: var(--amarelo-queijo);
  color: #333;
}
button.cta:hover,
.btn-cta:hover {
  background: var(--verde-manjericao);
  color: white;
}

/* Labels/badges personalizados */
.badge {
  background-color: var(--vermelho-pizza);
  color: white;
  padding: 4px 8px;
  border-radius: 4px;
  font-size: 0.8rem;
  display: inline-block;
  margin-right: 6px;
}

.badge.popular {
  background-color: var(--amarelo-queijo);
  color: #333;
}
.badge.entregue {
  background-color: #28a745;
  color: white;
}

/* Botões dos cards e estilo de feedback */
.btn-cta,
.pizza-card button {
  background-color: var(--vermelho-pizza);
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.2s;
}

.btn-cta:hover,
.pizza-card button:hover {
  background-color: var(--marrom-crosta);
  transform: translateY(-2px);
}
nav a,
.btn-cta {
  text-decoration: none;
}
.home-bg {
  background-image: url('@/assets/wood-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

body, html, #app {
  background-color: transparent;
  margin: 0;
  padding: 0;
}

</style>

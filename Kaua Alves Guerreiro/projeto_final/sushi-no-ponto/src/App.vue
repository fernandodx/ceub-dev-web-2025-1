<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
body {
  margin: 0;
  font-family: sans-serif;
  background: #f5f5f5; /* cinza claro, uniforme */
}
#app {
  min-height: 100vh;
}
nav {
  background: rgba(255,255,255,0.8);
  padding: 12px;
  display: flex;
  justify-content: center;
  gap: 16px;
}
nav a {
  color: #2a9d8f;
  text-decoration: none;
  padding: 6px 12px;
  border-radius: 4px;
}
nav a.router-link-exact-active {
  background: #2a9d8f;
  color: white;
}
</style>


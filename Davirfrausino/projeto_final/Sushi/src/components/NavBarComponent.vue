<template>
  <nav id="nav">
    <router-link to="/" id="logo-url">
      <img src="/img/logo_tburguer.png" id="logo" />
      <span class="project-name"> Sushi Central</span>
    </router-link>

    <div class="nav-links">
      <router-link to="/menu">Menu</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBarComponent",
};
</script>

<style scoped>
#nav {
  background-color: #15161a;
  border-bottom: 3px solid #ff4d00;
  padding: 12px 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  font-family: "Segoe UI", sans-serif;
}

#logo-url {
  display: flex;
  align-items: center;
  text-decoration: none;
  gap: 12px;
}

#logo {
  width: 60px;
  height: 60px;
  border-radius: 8px;
}

.project-name {
  color: #f6d365;
  font-size: 20px;
  font-weight: bold;
  letter-spacing: 1px;
}

.nav-links {
  display: flex;
  gap: 24px;
  align-items: center;
}

.nav-links a {
  position: relative;
  color: #f6d365;
  text-decoration: none;
  font-size: 16px;
  font-weight: bold;
  transition: 0.3s;
}

.nav-links a::after {
  content: "";
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0%;
  height: 2px;
  background-color: #ff4d00;
  transition: width 0.3s ease-in-out;
}

.nav-links a:hover {
  color: #ffffff;
}

.nav-links a:hover::after {
  width: 100%;
}

@media (max-width: 600px) {
  #nav {
    flex-direction: column;
    align-items: flex-start;
    padding: 12px;
  }

  .nav-links {
    flex-direction: column;
    gap: 12px;
    margin-top: 8px;
  }

  .project-name {
    font-size: 18px;
  }

  #logo {
    width: 50px;
    height: 50px;
  }
}
</style>

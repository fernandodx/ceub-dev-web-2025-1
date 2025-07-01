<template>
  <footer id="footer">
    <div class="footer-container">
      <p>
        &copy; {{ anoAtual }} 🍣 Desenvolvido por
        <strong>Davi Rosa Frausino</strong>
      </p>
      <nav class="footer-nav">
        <a href="https://github.com/davirfrausino" target="_blank">GitHub</a>
        <a href="https://www.linkedin.com/in/davirfrausino/" target="_blank"
          >LinkedIn</a
        >
      </nav>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterComponent",
  data() {
    return {
      anoAtual: new Date().getFullYear(),
    };
  },
};
</script>

<style scoped>
#footer {
  background-color: #15161a;
  color: #f6d365;
  padding: 24px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: "Segoe UI", sans-serif;
  border-top: 4px solid #ff4d00;
}

.footer-container {
  width: 100%;
  max-width: 1200px;
  text-align: center;
}

.footer-container p {
  margin: 8px 0;
  font-size: 16px;
  font-weight: 500;
}

.footer-nav {
  display: flex;
  justify-content: center;
  gap: 24px;
  margin-top: 8px;
  flex-wrap: wrap;
}

.footer-nav a {
  color: #f6d365;
  text-decoration: none;
  font-size: 14px;
  transition: 0.3s;
  font-weight: bold;
}

.footer-nav a:hover {
  color: #ffffff;
  text-decoration: underline;
}
</style>

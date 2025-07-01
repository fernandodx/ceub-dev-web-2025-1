<template>
  <div class="home-bg">
    <!-- Banner principal -->
    <section class="hero">
      <img
        :src="require('@/assets/pizzavue.jpg')"
        alt="Pizza deliciosa"
        class="hero-img"
      />
      <div class="hero-text">
        <h1>PAPA’S PIZZARIA</h1>
        <p>Sabor artesanal entregue quentinha na sua porta!</p>
        <router-link to="/pedidos" class="btn-cta">Peça agora 🍕</router-link>
      </div>
    </section>

    <!-- Mensagem de sucesso ao adicionar pizza -->
    <MensagemComponente
      tipo="sucesso"
      :texto="textoSucesso"
      :visivel="mostraSucesso"
    />

    <!-- Seção de cards de pizza -->
    <section class="menu-cards">
      <PizzaCard
        nome="Quatro Queijos"
        descricao="Mussarela, gorgonzola, parmesão e catupiry"
        :preco="89.9"
        imagem="quatroqueijos.jpg"
        @adicionar="adicionarPizza"
      />
      <PizzaCard
        nome="Calabresa"
        descricao="Calabresa fatiada e cebola"
        :preco="90.9"
        imagem="calabresa.jpg"
        @adicionar="adicionarPizza"
      />
    </section>
  </div>
</template>

<script>
import PizzaCard from '@/components/PizzaCard.vue'
import MensagemComponente from '@/components/Mensagem.vue'

export default {
  name: 'HomeView',
  components: { PizzaCard, MensagemComponente },
  data() {
    return {
      mostraSucesso: false,
      textoSucesso: ''
    }
  },
  methods: {
    adicionarPizza(pedido) {
      this.textoSucesso = `Adicionado: ${pedido.nome} por R$ ${pedido.preco.toFixed(2)}`
      this.mostraSucesso = true
      setTimeout(() => {
        this.mostraSucesso = false
      }, 3000)
      // Aqui você pode enviar para API ou salvar no carrinho
    }
  }
}
</script>

<style scoped>
.home-bg {
  background-image: url('@/assets/wood-bg.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  min-height: 100vh;
}

/* Banner principal */
.hero {
  position: relative;
  text-align: left;
  overflow: hidden;
}
.hero-img {
  width: 100%;
  height: 60vh;
  object-fit: cover;
  filter: brightness(0.75);
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 10%;
  transform: translateY(-50%);
  color: transparent;
}
.hero-text h1 {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}
.hero-text p {
  font-size: 1.25rem;
  margin-bottom: 1.5rem;
}

/* Botão CTA */
.btn-cta {
  font-size: 1.1rem;
  text-decoration: none;
}
.btn-cta,
.pizza-card button {
  background-color: #e63946;
  color: #fff;
  padding: 12px 20px;
  border: none;
  border-radius: 4px;
  transition: background-color 0.3s, transform 0.2s;
}
.btn-cta:hover,
.pizza-card button:hover {
  background-color: #d62828;
  cursor: pointer;
  transform: translateY(-2px);
}

/* Cards de pizza */
.menu-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  padding: 20px;
  margin-top: 20px;
}
.menu-cards .pizza-card {
  background-color: white; /* reforça o card como bloco destacado */
}
@media (max-width: 600px) {
  .menu-cards {
    grid-template-columns: 1fr;
    padding: 10px;
  }
}
</style>

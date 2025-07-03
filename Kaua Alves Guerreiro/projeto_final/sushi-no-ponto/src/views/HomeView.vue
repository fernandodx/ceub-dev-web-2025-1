<template>
  <div class="home">
    <!-- Banner -->
    <section class="hero">
      <img alt="Sushi no Ponto" src="@/assets/sushivue.jpg" class="hero-img" />
      <div class="hero-text">
        <h1>SUSHI NO PONTO</h1>
        <p>Sabor fresco entregue direto na sua porta!</p>
      </div>
    </section>

    <!-- Cards de sushi -->
    <section class="menu-cards">
      <SushicardComponente
        nome="Temaki de Salmão"
        descricao="Delicioso temaki com salmão fresco"
        :preco="25.9"
        imagem="temaki.jpg"
        @adicionar="adicionarSushi"
      />
      <SushicardComponente
        nome="Combinado 20 peças"
        descricao="Variedade de nigiris e sashimis"
        :preco="89.9"
        imagem="combinado20.jpg"
        @adicionar="adicionarSushi"
      />
      <SushicardComponente
        nome="Hot Roll"
        descricao="Hot roll crocante com cream cheese"
        :preco="39.9"
        imagem="hotroll.jpg"
        @adicionar="adicionarSushi"
      />
    </section>
  </div>
</template>

<script>
import SushicardComponente from '@/components/SushicardComponente.vue'

export default {
  name: 'HomeView',
  components: { SushicardComponente },
  methods: {
    adicionarSushi(pedido) {
      alert(`Adicionado: ${pedido.nome} por R$ ${pedido.preco.toFixed(2)}`)
    }
  }
}
</script>

<style scoped>
.home {
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
}

/* Banner Hero */
.hero {
  position: relative;
  text-align: left;
  overflow: hidden;
  margin-bottom: 24px;
}
.hero-img {
  width: 100%;
  height: 50vh;
  object-fit: cover;
  filter: brightness(0.7);
  border-radius: 8px;
}
.hero-text {
  position: absolute;
  top: 50%;
  left: 12%;
  transform: translateY(-50%);
  color: white;
}
.hero-text h1 {
  font-size: 3rem;
  margin: 0 0 8px;
}
.hero-text p {
  font-size: 1.25rem;
}

/* Cards de sushi */
.menu-cards {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  margin-bottom: 40px;
}
</style>

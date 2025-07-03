<template>
  <div class="pizza-card">
    <img
      :src="require(`@/assets/${imagem}`)"
      :alt="nome"
      class="pizza-img"
    />
    <h2>{{ nome }}</h2>
    <p>{{ descricao }}</p>
    <p class="preco">R$ {{ preco.toFixed(2) }}</p>
    <button @click="$emit('adicionar', { nome, preco })" class="btn-cta">
      Adicionar
    </button>
  </div>
</template>

<script>
export default {
  name: "PizzaCard",
  props: {
    nome: String,
    descricao: String,
    preco: Number,
    imagem: String
  }
};
</script>

<style scoped>
.pizza-card {
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  padding: 10px;
  text-align: center;
}
.pizza-card .pizza-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.pizza-card .preco {
  font-size: 1.2rem;
  color: var(--vermelho-pizza);
}
.pizza-card {
  box-shadow: 0 4px 6px rgba(0,0,0,0.1);
  transition: box-shadow 0.3s, transform 0.3s;
}

.pizza-card:hover {
  box-shadow: 0 8px 14px rgba(0,0,0,0.15);
  transform: translateY(-4px);
}
.pizza-card {
  background-color: white;       /* fundo branco para o card */
  border-radius: 8px;            /* cantos levemente arredondados */
  padding: 16px;                 /* espaçamento interno */
  box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* sombra suave */
  transition: transform 0.2s, box-shadow 0.2s;
}

.pizza-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
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

</style>

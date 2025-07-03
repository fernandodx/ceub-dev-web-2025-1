<template>
  <div class="menu">
    <PizzaCard
      nome="Quatro Queijos"
      descricao="Mussarela, gorgonzola, parmesão e catupiry"
      :preco="89.9"
      imagem="quatroqueijos.jpg"
      @adicionar="adicionarPizza"
    />
  </div>
</template>

<script>
import PizzaCard from '@/components/PizzaCard.vue';

export default {
  name: "MenuView",
  components: { PizzaCard },
  methods: {
    adicionarPizza(pedido) {
      alert(`Adicionado: ${pedido.nome} por R$ ${pedido.preco.toFixed(2)}`);
    }
  }
};
</script>

<style scoped>
.menu {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
  gap: 16px;
  padding: 20px;
}
</style>

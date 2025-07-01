<template>
  <div class="sushi-Card">
    <img :src="require(`@/assets/${imagem}`)" :alt="nome" class="card-img" />
    <div class="card-content">
      <h3>{{ nome }}</h3>
      <p>{{ descricao }}</p>
      <div class="card-footer">
        <span class="preco">R$ {{ preco.toFixed(2) }}</span>
        <button @click="adicionar" class="btn-add">Adicionar</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SushiCardComponente',
  props: {
    nome: { type: String, required: true },
    descricao: { type: String, required: true },
    preco: { type: Number, required: true },
    imagem: { type: String, required: true }
  },
  methods: {
    adicionar() {
      this.$emit('adicionar', {
        nome: this.nome,
        preco: this.preco
      });
    }
  }
}
</script>

<style scoped>
.sushi-card {
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.card-img {
  width: 100%;
  height: 160px;
  object-fit: cover;
}
.card-content {
  padding: 12px;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}
.card-content h3 {
  margin: 0;
  font-size: 1.1rem;
}
.card-content p {
  flex-grow: 1;
  margin: 8px 0;
  color: #555;
}
.card-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.preco {
  font-weight: bold;
  color: #2a9d8f;
}
.btn-add {
  background: #2a9d8f;
  color: white;
  border: none;
  padding: 6px 12px;
  border-radius: 4px;
  cursor: pointer;
}
.btn-add:hover {
  background: #23877c;
}
</style>

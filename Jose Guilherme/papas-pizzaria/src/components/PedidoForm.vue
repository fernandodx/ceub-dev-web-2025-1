<template>
  <form @submit.prevent="fazerPedido">
    <input v-model="form.nome" placeholder="Nome do cliente" />
    <select v-model="form.tipoMassa">
      <option disabled value="">Tipo de massa</option>
      <option>Tradicional</option>
      <option>Integral</option>
    </select>
    <select v-model="form.sabor">
      <option disabled value="">Escolha o sabor</option>
      <option>Quatro Queijos</option>
      <option>Calabresa</option>
    </select>
    <select v-model="form.tamanho">
      <option disabled value="">Tamanho</option>
      <option>Pequena</option>
      <option>Média</option>
      <option>Grande</option>
    </select>

    <Mensagem
      tipo="alerta"
      texto="Preencha todos os campos"
      :visivel="erro"
    />

    <button type="submit">Enviar pedido</button>
  </form>
</template>

<script>
import axios from 'axios'
import Mensagem from './Mensagem.vue'

export default {
  components: { Mensagem },
  data() {
    return {
      form: { nome: '', tipoMassa: '', sabor: '', tamanho: '' },
      erro: false
    }
  },
  methods: {
    async fazerPedido() {
      const { nome, tipoMassa, sabor, tamanho } = this.form
      if (!nome || !tipoMassa || !sabor || !tamanho) {
        this.erro = true
        return
      }
      this.erro = false
      await axios.post('http://localhost:3000/pedidos', {
        nome,
        tipoMassa,
        sabor,
        tamanho,
        status: 'Em preparo'
      })
      this.$emit('pedidoConfirmado')
      this.form = { nome: '', tipoMassa: '', sabor: '', tamanho: '' }
    }
  }
}
</script>

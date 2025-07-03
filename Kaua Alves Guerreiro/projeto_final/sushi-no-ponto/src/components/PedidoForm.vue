<template>
  <form @submit.prevent="fazerPedido">
    <input v-model="form.nome" placeholder="Nome do cliente" />

    <select v-model="form.escolhaDoSushi">
      <option disabled value="">Escolha seu sushi</option>
      <option>Temaki de salmão</option>
      <option>Combinado 20 peças</option>
      <option>Hot Roll</option>
    </select>

    <select v-model="form.molho">
      <option disabled value="">Escolha o molho</option>
      <option>Shoyu</option>
      <option>Tare</option>
      <option>Wasabi</option>
      <option>Gengibre</option>
    </select>

    <label>
      <input type="checkbox" v-model="form.hashis" />
      Hashis
    </label>
    <label>
      <input type="checkbox" v-model="form.guardanapos" />
      Guardanapos
    </label>
    <label>
      <input type="checkbox" v-model="form.molheiras" />
      Molheiras
    </label>

    <MensagemComponente
      tipo="alerta"
      texto="Por favor, preencha todos os campos obrigatórios."
      :visivel="erro"
    />

    <button type="submit">Enviar pedido</button>

    <MensagemComponente
      v-if="sucesso"
      tipo="sucesso"
      texto="Pedido enviado com sucesso!"
      :visivel="true"
    />
  </form>
</template>

<script>
import axios from 'axios'
import MensagemComponente from './MensagemComponente.vue'

export default {
  name: 'PedidoForm',
  components: { MensagemComponente },
  data() {
    return {
      form: {
        nome: '',
        escolhaDoSushi: '',
        molho: '',
        hashis: false,
        guardanapos: false,
        molheiras: false
      },
      erro: false,
      sucesso: false
    }
  },
  methods: {
    async fazerPedido() {
      // Validação
      if (
        !this.form.nome ||
        !this.form.escolhaDoSushi ||
        !this.form.molho ||
        !this.form.hashis ||
        !this.form.guardanapos ||
        !this.form.molheiras
      ) {
        this.$emit('pedidoConfirmado')
        this.erro = true
        this.sucesso = false

        return
      }


      try {
        await axios.post('http://localhost:3001/pedidos', {
          nome: this.form.nome,
          escolhaDoSushi: this.form.escolhaDoSushi,
          molho: this.form.molho,
          hashis: this.form.hashis,
          guardanapos: this.form.guardanapos,
          molheiras: this.form.molheiras,
          status: 'Em preparo'
        })
        
        this.$emit('pedidoConfirmado')

        this.sucesso = true
        setTimeout(() => (this.sucesso = false), 3000)

        // Reset do formulário
        this.form = {
          nome: '',
          escolhaDoSushi: '',
          molho: '',
          hashis: false,
          guardanapos: false,
          molheiras: false
        }
      } catch (err) {
        console.error('Erro ao enviar pedido:', err)
      }
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin: 8px 0;
}
button {
  margin-top: 16px;
  padding: 8px 16px;
  background-color: #42b983;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}
button:hover {
  background-color: #36966e;
}
</style>

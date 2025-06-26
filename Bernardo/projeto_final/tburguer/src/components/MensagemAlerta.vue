<!-- components/MensagemAlerta.vue -->
<template>
    <div v-if="visivel" :class="['mensagem-alerta', tipo]" @click="fechar">
        {{ texto }}
    </div>
</template>

<script>
export default {
    name: "MensagemAlerta",
    props: {
        texto: String,
        tipo: {
            type: String,
            default: 'sucesso' // ou 'erro'
        },
        visivel: {
            type: Boolean,
            default: false
        }
    },
    emits: ['fechou'],
    methods: {
        fechar() {
            this.$emit('fechou');
        }
    }
};
</script>

<style scoped>
.mensagem-alerta {
    padding: 15px 20px;
    margin: 10px 0 20px;
    border-radius: 8px;
    font-weight: bold;
    text-align: center;
    cursor: pointer;
    transition: 0.4s;
}

.sucesso {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.erro {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}
</style>

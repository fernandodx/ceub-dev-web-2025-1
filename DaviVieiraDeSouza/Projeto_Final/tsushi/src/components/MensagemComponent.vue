<template>
    <div v-if="mostrar" :class="['mensagem', `mensagem-${tipo}`]">
        <div class="mensagem-content">
            <span class="mensagem-icon">{{ icone }}</span>
            <span class="mensagem-texto">{{ texto }}</span>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MensagemComponent',
    props: {
        tipo: {
            type: String,
            default: 'info',
            validator: (value) => ['sucesso', 'alerta', 'erro', 'info'].includes(value)
        },
        texto: {
            type: String,
            required: true
        },
        mostrar: {
            type: Boolean,
            default: false
        }
    },
    computed: {
        icone() {
            const icones = {
                sucesso: '✓',
                alerta: '⚠',
                erro: '✗',
                info: 'ℹ'
            };
            return icones[this.tipo] || icones.info;
        }
    }
}
</script>

<style scoped>
.mensagem {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    min-width: 300px;
    max-width: 500px;
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s ease-out;
}

.mensagem-content {
    display: flex;
    align-items: center;
    gap: 12px;
}

.mensagem-icon {
    font-size: 20px;
    font-weight: bold;
}

.mensagem-texto {
    flex: 1;
    font-size: 14px;
    line-height: 1.4;
}

.mensagem-sucesso {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.mensagem-sucesso .mensagem-icon {
    color: #28a745;
}

.mensagem-alerta {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
}

.mensagem-alerta .mensagem-icon {
    color: #ffc107;
}

.mensagem-erro {
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
}

.mensagem-erro .mensagem-icon {
    color: #dc3545;
}

.mensagem-info {
    background-color: #d1ecf1;
    color: #0c5460;
    border: 1px solid #bee5eb;
}

.mensagem-info .mensagem-icon {
    color: #17a2b8;
}

@keyframes slideIn {
    from {
        transform: translateX(100%);
        opacity: 0;
    }
    to {
        transform: translateX(0);
        opacity: 1;
    }
}
</style> 
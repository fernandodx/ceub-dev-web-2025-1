<template>
    <div v-show="mostrar" class="mensagem-container">
        <div :class="['mensagem', tipoClasse]" role="alert">
            <div class="mensagem-conteudo">
                <span class="mensagem-icone">{{ icone }}</span>
                <span class="mensagem-texto">{{ texto }}</span>
            </div>
            <button 
                v-if="permitirFechar" 
                @click="fecharMensagem" 
                class="mensagem-fechar"
                aria-label="Fechar mensagem"
            >
                ×
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MensagemComponent",
    props: {
        tipo: {
            type: String,
            required: true,
            validator: function (value) {
                return ['alerta', 'sucesso'].indexOf(value) !== -1
            }
        },
        texto: {
            type: String,
            required: true
        },
        mostrar: {
            type: Boolean,
            default: false
        },
        permitirFechar: {
            type: Boolean,
            default: true
        },
        autoFechar: {
            type: Number,
            default: 0
        }
    },
    computed: {
        tipoClasse() {
            return `mensagem-${this.tipo}`
        },
        icone() {
            return this.tipo === 'sucesso' ? '✓' : '⚠'
        }
    },
    watch: {
        mostrar(novoValor) {
            if (novoValor && this.autoFechar > 0) {
                setTimeout(() => {
                    this.fecharMensagem()
                }, this.autoFechar)
            }
        }
    },
    methods: {
        fecharMensagem() {
            this.$emit('fechar')
        }
    }
}
</script>

<style scoped>
.mensagem-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    max-width: 400px;
    animation: slideIn 0.3s ease-out;
}

.mensagem {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 12px 16px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    font-weight: 500;
    min-width: 300px;
}

.mensagem-conteudo {
    display: flex;
    align-items: center;
    gap: 8px;
    flex: 1;
}

.mensagem-icone {
    font-size: 18px;
    font-weight: bold;
}

.mensagem-texto {
    font-size: 14px;
    line-height: 1.4;
}

.mensagem-fechar {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    padding: 0;
    width: 24px;
    height: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    transition: background-color 0.2s;
    margin-left: 8px;
}

.mensagem-fechar:hover {
    background-color: rgba(0, 0, 0, 0.1);
}

/* Estilos para mensagem de sucesso */
.mensagem-sucesso {
    background-color: #d4edda;
    color: #155724;
    border: 1px solid #c3e6cb;
}

.mensagem-sucesso .mensagem-icone {
    color: #28a745;
}

/* Estilos para mensagem de alerta */
.mensagem-alerta {
    background-color: #fff3cd;
    color: #856404;
    border: 1px solid #ffeaa7;
}

.mensagem-alerta .mensagem-icone {
    color: #ffc107;
}

/* Animação de entrada */
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

/* Responsividade */
@media (max-width: 768px) {
    .mensagem-container {
        top: 10px;
        right: 10px;
        left: 10px;
        max-width: none;
    }
    
    .mensagem {
        min-width: auto;
    }
}
</style> 
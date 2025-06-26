<template>
    <div v-show="show" class="message-container" :class="messageType">
        <div class="message-content">
            <span class="message-icon">{{ icon }}</span>
            <span class="message-text">{{ message }}</span>
            <button v-if="showCloseButton" @click="closeMessage" class="close-button">&times;</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "MessageComponent",
    props: {
        type: {
            type: String,
            default: 'success',
            validator: value => ['success', 'alert', 'error'].includes(value)
        },
        message: {
            type: String,
            required: true
        },
        show: {
            type: Boolean,
            default: false
        },
        showCloseButton: {
            type: Boolean,
            default: true
        },
        autoHide: {
            type: Boolean,
            default: true
        },
        autoHideDelay: {
            type: Number,
            default: 3000
        }
    },
    computed: {
        icon() {
            const icons = {
                success: '✓',
                alert: '⚠',
                error: '✗'
            };
            return icons[this.type] || 'ℹ';
        },
        messageType() {
            return `message-${this.type}`;
        }
    },
    watch: {
        show(newVal) {
            if (newVal && this.autoHide) {
                setTimeout(() => {
                    this.$emit('close');
                }, this.autoHideDelay);
            }
        }
    },
    methods: {
        closeMessage() {
            this.$emit('close');
        }
    }
}
</script>

<style scoped>
.message-container {
    position: fixed;
    top: 20px;
    right: 20px;
    z-index: 1000;
    min-width: 300px;
    max-width: 400px;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    animation: slideIn 0.3s ease-out;
}

.message-content {
    display: flex;
    align-items: center;
    padding: 16px;
    position: relative;
}

.message-icon {
    font-size: 20px;
    margin-right: 12px;
    font-weight: bold;
}

.message-text {
    flex: 1;
    font-size: 14px;
    font-weight: 500;
}

.close-button {
    background: none;
    border: none;
    font-size: 20px;
    cursor: pointer;
    margin-left: 12px;
    opacity: 0.7;
    transition: opacity 0.2s;
}

.close-button:hover {
    opacity: 1;
}

.message-success {
    background-color: #d4edda;
    border: 1px solid #c3e6cb;
    color: #155724;
}

.message-alert {
    background-color: #fff3cd;
    border: 1px solid #ffeaa7;
    color: #856404;
}

.message-error {
    background-color: #f8d7da;
    border: 1px solid #f5c6cb;
    color: #721c24;
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
<template>
    <div v-if="visible" :class="['message-alert', type]" @click="close">
        {{ message }}
        <span class="close-btn">×</span>
    </div>
</template>

<script>
export default {
    name: "MessageAlert",
    props: {
        message: { type: String, required: true },
        type: { type: String, default: "info" }, // 'success', 'error', 'info'
        duration: { type: Number, default: 4000 }
    },
    data() {
        return {
            visible: true,
        };
    },
    mounted() {
        this.autoClose();
    },
    methods: {
        autoClose() {
            setTimeout(() => {
                this.visible = false;
            }, this.duration);
        },
        close() {
            this.visible = false;
        },
    },
};
</script>

<style scoped>
.message-alert {
    position: fixed;
    top: 20px;
    right: 20px;
    padding: 15px 25px;
    border-radius: 8px;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    user-select: none;
    box-shadow: 0 4px 12px rgb(0 0 0 / 0.3);
    z-index: 9999;
    min-width: 250px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.message-alert.success {
    background-color: #4caf50;
    /* verde */
}

.message-alert.error {
    background-color: #f44336;
    /* vermelho */
}

.message-alert.info {
    background-color: #2196f3;
    /* azul */
}

.close-btn {
    margin-left: 15px;
    font-size: 20px;
    line-height: 20px;
}
</style>

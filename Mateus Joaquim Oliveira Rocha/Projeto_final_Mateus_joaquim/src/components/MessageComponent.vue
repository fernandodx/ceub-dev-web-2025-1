<template>
  <div v-show="show" :class="['message', typeClass]">
    {{ text }}
  </div>
</template>

<script>
export default {
  name: "MessageComponent",
  props: {
    type: {
      type: String,
      default: "success", // 'success' ou 'alert'
    },
    text: {
      type: String,
      required: true,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    typeClass() {
      return this.type === "alert" ? "message-alert" : "message-success";
    },
  },
};
</script>

<style scoped>
.message {
  padding: 10px 18px;
  margin-bottom: 20px;
  border-radius: 5px;
  font-weight: bold;
  max-width: 400px;
  margin-left: auto;
  margin-right: auto;
}
.message-success {
  background: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
.message-alert {
  background: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style>
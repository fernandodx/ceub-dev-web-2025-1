<template>
  <div v-show="show" :class="['message', type]">
    {{ message }}
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    type: {
      type: String,
      default: 'success',
      validator: value => ['success', 'alert'].includes(value)
    },
    message: {
      type: String,
      required: true
    },
    show: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
.message {
  padding: 12px 20px;
  border-radius: 4px;
  margin: 10px 0;
  font-weight: bold;
  font-size: 1rem;
  transition: opacity 0.3s;
}
.success {
  background-color: #d4edda;
  color: #155724;
  border: 1px solid #c3e6cb;
}
.alert {
  background-color: #f8d7da;
  color: #721c24;
  border: 1px solid #f5c6cb;
}
</style> 
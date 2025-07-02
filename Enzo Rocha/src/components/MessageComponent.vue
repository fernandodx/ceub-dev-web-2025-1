<template>
  <div v-show="msg" :class="`message ${type}`">
    <span>{{ msg }}</span>
  </div>
</template>

<script>
export default {
  name: 'MessageComponent',
  props: {
    msg: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'success'
    }
  }
}
</script>

<style scoped>
.message {
  padding: 12px;
  border-radius: 5px;
  margin: 16px auto;
  max-width: 450px;
  position: fixed;
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 9999;
}

.success {
  background-color: #c3e6cb;
  border: 2px solid #8edd8e;
  color: #155724;
}

.alert {
  background-color: #f8d7da;
  border: 2px solid #f5c6cb;
  color: #721c24;
}
</style>
<template>
  <div>
    <home-component-vue/>
  </div>
</template>
<div>
  <h1>VUE</h1>
  <br>
</div>
<script>
import HomeComponentVue from './components/HomeComponent.vue'



export default {
  name: 'App',
  components: {
    HomeComponentVue
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

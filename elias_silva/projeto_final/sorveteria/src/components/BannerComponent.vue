<template>
  <div id="main-banner">
    <!-- <h1>Sorveteria Medrano 🍨</h1> -->
  </div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
#main-banner {
  width: 100%;
  min-height: 650px;
  background-image: url("../assets/img/image.png");
  background-size: cover; /* ou use 'contain' para evitar cortes */
  background-position: center center;
  background-repeat: no-repeat;

  display: flex;
  align-items: center;
  justify-content: center;
}

#main-banner h1 {
  font-size: 40px;
  color: antiquewhite;
  text-align: center;
  background: #333;
  padding: 25px;
  border-radius: 100px 0px 0px 100px;
}
</style>

<template>
  <div id="main-banner"></div>
</template>

<script>
export default {
  name: "BannerComponent",
};
</script>

<style scoped>
#main-banner {
  width: 100%;
  height: 500px;
  background-color: #15161a;
  background-image: url("../assets/img/image.png");
  background-size: cover; /* cobre todo o espaço, sem distorcer */
  background-position: center center; /* centraliza */
  background-repeat: no-repeat; /* impede que repita */

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

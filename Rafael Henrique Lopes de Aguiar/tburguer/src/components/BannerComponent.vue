<template>
    <div id="main-banner">
        <h1>Pizza artesanal de forno a lenha</h1>
    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("https://www.skymsen.com/uploads/blog/forno-a-lenha-pizzarias-vem-substituindo-a-lenha-por-fornos-mais-sustentaveis.jpg");
        background-position: 0;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
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
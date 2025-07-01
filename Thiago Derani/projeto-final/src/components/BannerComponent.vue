<template>
    <div id="main-banner">
        <h1>Pizzaria Melhor de Brasília </h1>
    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("https://www.estadao.com.br/resizer/v2/SGSA2RXZQRASROXQVI2STOP4UU.jpg?quality=80&auth=dbf67e9a85a08e95d0a0df51c22bc71c6cbf5bbd6f6b939183d2b1cfec0ca598&width=720&height=410&smart=true");
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
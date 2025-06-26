<template>
    <div id="main-banner">
        <h1>Tacos Mexicanos</h1>

    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("https://images.unsplash.com/photo-1565299585323-38d6b0865b47?w=1200");
        background-position: center;
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
<template>
    <div id="main-banner">
    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("/public/img/banner.png   ");
        background-position: center;
        background-size: cover;
        height: 500px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

</style>
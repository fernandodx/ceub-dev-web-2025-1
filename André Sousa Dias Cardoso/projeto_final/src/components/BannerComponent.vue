<template>
    <div>
        <footer id="main-banner">
            <h1>Pizzaria Artesanal</h1>
        </footer>
    </div>

</template>
<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

#main-banner{
    background-image: url("https://images.unsplash.com/photo-1513104890138-7c749659a591?w=1200&h=500&fit=crop");
    background-position: center;
    background-size: cover;
    height: 500px; 
    display: flex;
    align-items: center;
    justify-content: flex-end;
}

#main-banner h1{
    font-size: 40px;
    color: antiquewhite;
    text-align: center;
    background-color: #333;
    padding: 25px;
    border-radius: 100px 0px 0px 100px;
}
</style>
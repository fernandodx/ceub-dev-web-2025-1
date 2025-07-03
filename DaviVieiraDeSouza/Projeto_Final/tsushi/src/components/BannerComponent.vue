<template>
    <div id="main-banner">
        <h1>Sushify</h1>
    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("/public/img/sushi.jpg");
        background-position: 0;
        background-size: cover;
        height: 300px;
        display: flex;
        align-items: center;
        justify-content: flex-end;
    }

    #main-banner {
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
}

#main-banner h1 {
    font-size: 32px;
    color: white;
    background: Black;
    padding: 20px 40px;
    border-radius: 50px; 
    text-align: center;

    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    margin-top: -40px;

    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.3); 
}


</style>
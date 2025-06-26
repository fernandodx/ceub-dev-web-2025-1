<template>
    <div id="main-banner">
        <div class="banner-content">
            <h1>
                Aproveite seu <span>SUSHI</span>
            </h1>
            <hr>

            <router-link to="/menu">Exibir menu</router-link>
        </div>
    </div>
</template>

<script>
export default {
    name: "BannerComponent"
}
</script>

<style scoped>
#main-banner {
    background-image: url("/public/img/banner.jpg");
    background-size: cover;
    background-position: center;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 60px;
}

#main-banner a {
    color: darkgoldenrod;
    text-decoration: none;
    transition: .5s;
}

.banner-content h1 {
    font-size: 36px;
    color: #ffffff;
    font-weight: 300;
    background-color: rgba(0, 0, 0, 0.6);
    border: 1px solid rgba(255, 255, 255, 0.7);
    padding: 20px 30px;
    text-align: right;
    font-family: 'Segoe UI', sans-serif;
    max-width: 350px;
    line-height: 1.4;
}

.banner-content h1 span {
    font-weight: 600;
    color: #ffdd57;
}
</style>

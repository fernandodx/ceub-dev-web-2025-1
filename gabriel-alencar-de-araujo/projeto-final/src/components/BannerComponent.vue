<template>
    <div id="main-banner">
        <h1>Pizzaria Artesanal</h1>
    </div>
</template>

<script>
    export default {
        name: "BannerComponent"
    }
</script>

<style scoped>

    #main-banner {
        background-image: url("https://imgs.search.brave.com/tp4ajryGjvC2kgsrFsFYXj3OvbQcXFe3CUZpZbqm0kY/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA2LzM2LzMwLzI2/LzM2MF9GXzYzNjMw/MjYwOV9UYjFKdERU/UTR6YXdPMHViNkwy/Zkh6bHJXNTg2Zjl0/ci5qcGc");
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
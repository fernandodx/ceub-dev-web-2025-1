<template>
    <div>
        <footer id="footer">
            2025 Cerbino Pizzaria
        </footer>
    </div>
</template>

<script>
export default {
    name: "FooterComponent"
}
</script>

<style scoped>
#footer {
    height: 50px;
    background-color: #c40000;
    /* vermelho vivo */
    color: #fff5cc;
    /* amarelo claro */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    user-select: none;
}
</style>

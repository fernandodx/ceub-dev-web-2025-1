<template>
    <div>

        <footer id="footer">
            <p>&copy; 2025 Be Sushi. Todos os direitos reservados.</p>
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
    height: 75px;
    background-color: #333;
    color: goldenrod;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer p {
    font-size: 14px;
}
</style>
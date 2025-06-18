<template>
    <div>
        <footer id="footer">
            <p>Construido por Kauã Nascimento &copy; 2025</p>
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
    height: 80px;
    background: #333;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
}

#footer p {
    font-size: 14px;
}


</style>
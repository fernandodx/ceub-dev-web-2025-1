<template>
    <div>
        <footer id="footer">
            <p>Construído por Amanda Monteiro &copy; 2025</p>
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
        color: whitesmoke;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    #footer p {
        font-size: 14px;
    }


</style>
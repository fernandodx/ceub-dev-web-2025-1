<template>
    <div>
        <footer id="footer">
            <p>Construido por Victor Hugo &copy; 2025</p>
        </footer>
    </div>
</template>

<script>
    export default {
        name: "FooterComponent"
    }
</script>

<style scooped>

#footer{
    height: 80px;
    background: #333;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
}

#footer p {
    font-size: 14px;
}

</style>
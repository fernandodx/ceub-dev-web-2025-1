<template>
    <div>
        <footer id="footer">
            <p>Construido por Thiago Derani &copy; 2025</p>
        </footer>

    </div>
</template>
<script>
   export default{
    name: "Footer Componet"
   }

</script>

<style scoped>

#footer{
    height: 80px;
    background: #333;
    color: gold;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 900;
}
#footer p {
    font-size: 14px;
}

</style>
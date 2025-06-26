<template>
    <div>
        <footer id="footer">
            Restaurante do Pedro — Petiscos & Pratos
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
    background-color: #8b0000;
    /* vermelho escuro */
    color: #fffaf0;
    /* tom claro e suave */
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 600;
    font-family: 'Segoe UI', sans-serif;
    font-size: 14px;
    user-select: none;
    border-top: 2px solid #a0522d;
    /* detalhe marrom médio */
}
</style>

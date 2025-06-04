<template>
    <div>
        <h1>Título Padrão</h1>
        <p class="subtitulo"> Subtítulo estiloso</p>
    </div>
</template>

<script>
    export default {
        name: "EstiloComponent"
    }
</script>

<style scoped>

    h1 {
        color: red;
    }

    .subtitulo {
        text-align: center;
        font-family: 'Gill Sans';
        color: black;
    }

</style>
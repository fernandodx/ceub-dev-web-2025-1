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
    color: palevioletred
}

.subtitulo{
    text-align: center;
    font-family: 'Gill Sans';
    color: brown;
}

</style>
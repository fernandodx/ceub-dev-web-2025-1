<template>
    <div>
        <h1>Titulo Padrão</h1>
        <p class="subtitulo">Subtitulo Estiloso</p>
    </div>
</template>

<script>
    export default{
        name:"EstiloComponent"
    }
</script>

<style scoped>

    h1{
        color: blue;

    }

    .subtitulo{
        text-align: center;
        font-family: 'Courier New', Courier, monospace;
        color: brown;
    }

</style>
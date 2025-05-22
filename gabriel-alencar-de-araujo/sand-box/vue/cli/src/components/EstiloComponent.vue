<template>
    <div>
        <h1>Titulo Padrão</h1>
        <p class="subtitulo">Sub Titulo Estiloso</p>
    </div>
</template>

<script>
    export default{
        name: "EstiloComponente"
    }

</script>

<style scoped>
    h1{
        color: blue

    }
    .subtitulo{
        text-align: center;
        font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        color: purple;
        font-size: xx-large;
    }
</style>
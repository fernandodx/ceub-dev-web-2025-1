<template>
    <div>
        <h1>Titulo Padrão</h1>
        <p class="subtitulo">Subtitulo</p>
        <p></p>
    </div>
</template>

<script>
    export default {
        name: "EstiloComponent",
        data() {
            return {
            }
        },
        methods: {
        }

    }

</script>

<style scoped>
    h1{
        color: blue;
    }
    .subtitulo {
        text-align: center;
        font-family: 'Times New Roman', Times, serif;
        color: Brown;
    }
</style>
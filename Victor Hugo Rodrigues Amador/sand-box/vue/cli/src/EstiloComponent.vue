<template>
    <div>
        <h1>Titulo Padrão</h1>
        <p class="subtitulo"> Subtitulo estiloso</p>
    </div>
</template>

<script>
    export default {
        name: "EstiloComponent"
    }
        
</script>


<style>

    h1 {
        color : palevioletred
    }

    .subtitulo {
        text-align: center;
        font-family: 'Gill Sans';
        color: brown;
    }

    button {
        padding: 12px;
        font-weight: bold;
        color: darkcyan;
        background: azure;
        border: solid 2px darkcyan;
        border-radius: 8px;
        cursor: pointer;
        transition: 0.5s;
    }

    button:hover {
        background-color: darkcyan;
        color: azure;
    }

    .container {
        display: flex;
        flex-direction: column;
        width: 50%;
        align-items: center;
        margin: 16px;
        border-bottom: solid 2px lightblue;
        padding: 16px;
    }
    

</style>
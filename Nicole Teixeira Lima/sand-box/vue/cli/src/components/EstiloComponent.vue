<template>
    <div>
        <h1>Titulo Padrão</h1>
        <p class="subtitulo" Subtitulo estiloso></p>
    </div>
</template>
<script>
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
    setup() {
        
    },
})
</script>


<style scoped>
    h1 {
        color : palevioletred

    }
    .subtitulo {
        text-align: center;
        font-family:'Gill Sans';
        color: brown;

    }
    </style>



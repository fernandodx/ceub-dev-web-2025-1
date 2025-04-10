<template>
    <div>
        <footer id= "footer">
    </footer>
    <p>Bem vindo: {{ nome }} Olá mundo <b> Vue com Cli</b></p>

    </div>

</template>
<script>
export default {
    name:"HomeComponent",
    data() {
        return {
            nome: "Livia"
        }
    }
}
</script>
<template>
    <div>
        <footer id="footer">
            <p>Bem Vindo: {{ nome }} Olá mundo do <b>Vue com ClI</b></p>
        </footer>

    </div>
</template>

<script>
export default {
    name : "HomeComponent",
    data() {
        return {
            nome : "Jhonathan"
        }
    }
}
</script>
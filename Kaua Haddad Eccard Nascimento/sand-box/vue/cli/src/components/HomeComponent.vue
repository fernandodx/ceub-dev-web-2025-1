<template>
    <div>
        <footer id="footer">
           <p>Bem Vindo: {{ nome }} Olá mundo no <b>Vue com CLI</b> </p> 
        </footer>
    </div>
</template>

<script>
export default {
    name : "HomeComponent",
    data() {
        return{
            nome : "Kaua"
        }
    }
}
</script>
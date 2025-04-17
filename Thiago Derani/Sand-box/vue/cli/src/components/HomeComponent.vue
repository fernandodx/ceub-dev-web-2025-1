<template>
    <div>
        <footer id="footer">
            <p>Bem vindo:{{ nome }} Olá mundo do Vue com CLI</p>
        </footer>
    </div>
</template>
<script>
export default {
    name : "HomeComponent",
    data(){
        return{
            nome : "Thiago Derani" 
        }
    }
}
</script>
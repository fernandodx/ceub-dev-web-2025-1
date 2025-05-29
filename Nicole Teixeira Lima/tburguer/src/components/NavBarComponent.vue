<template>
    <div>
<nav id="nav">
<router-link to="/">Home</router-link>
<router-link to="/menu">Home</router-link>
<router-link to="/pedido">Home</router-link>
    </nav>
    </div>
</template>

<script>
export default {
    name:"NavBarComponent"
}
</script>


<style scoped>
 #nav {
    background-color: #333;
    border-bottom:  3px solid darkgoldenrod;
    padding: 15px 50px;
    display: flex;
    justify-content: flex-end;
    align-items: center;
 }
 #nav a {
    color: darkgoldenrod;
    text-decoration: none;
    margin: 12px;
    transition: .5s;
 }

    #nav a:hover {
        color: antiquewhite;
        font-size: 20px;

    }
 
</style>
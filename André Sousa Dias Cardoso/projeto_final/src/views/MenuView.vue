<template>
    <div>
        <h1>Menu</h1>
        <div id="scroll-horizoltal">
            <div id="card-content" v-for="pizza in listaMenuPizzas" :key="pizza.id">
            <div id="card-linha">
            <div class="foto-pizza">
                <img :src="pizza.foto" 
                :alt="pizza.nome">
                <div class="card-coluna">
                    <p id="nome-content">{{ pizza.nome }}</p>
                    <p id="preco-content">R$ {{ pizza.valor }}</p>
                    <p id="descricao-content">{{ pizza.descricao }}</p>
                    <button @click="selecionarPizza(pizza)">Selecionar</button>

                    
                    </div>
                </div>
            </div>
        </div>
     </div>

    </div>
</template>

<script>

export default {
     name : "MenuView",
     data() {
        return{
            listaMenuPizzas: []
        };
     },
     methods: {
        async consultarMenu() {
            const response = await fetch(" http://localhost:3000/menu");
            const dados = await response.json();
            this.listaMenuPizzas = dados.pizzas;
            console.log(this.listaMenuPizzas);

        },

        selecionarPizza(pizzaSelecionada) {

            const param = JSON.stringify(pizzaSelecionada);
            const pizzaJson = encodeURIComponent(param);
            //Pegar o router e dar um push na nova tela.
            this.$router.push({path: '/config-pedido', query: {pizza : pizzaJson}});


        }

     },
     mounted() {
        this.consultarMenu();

        }
     
}

</script>

<style scoped>

#card-content {

    display: inline-block;
    width: 280px;
    min-height: 500px;
    margin: 20px;
    border: 1px solid #ddd;
    border-radius: 10px;
    overflow: hidden;
    box-shadow:  0 4px 8px #444;
    position: relative;



}

#scroll-horizoltal { 

    flex: 1;
    overflow-x:auto;
    white-space: nowrap;
    width: 700px;
    margin: 0 auto;
    box-shadow: inset -10px 0px 15px -20px grey;




}


.foto-pizza {

    flex-shrink: 0;
}


.foto-pizza img {

    width: 100%;
    max-height: 200px;
    object-fit: cover;
    border-radius: 10px 0 0;

}

#nome-content {

    font-size: 30px;
    font: bold;
    text-align: center;
    width: 100%;
    margin: 12px;


}

#preco-content {

font-size: 35px;
font: bold;
text-align: center;
width: 100%;
color: darkgreen;

}

#descricao-content {

font-size: 16px;
text-align: left;
color:gray;
margin: 16px; 
white-space: pre-line;
overflow: hidden;
text-overflow: ellipsis;
display: -webkit-box;
-webkit-line-clamp: 6; /*numeros de linha pra cortar */
-webkit-box-orient: vertical;


}

.card-coluna p {

    margin: 0;


}

.card-coluna button {

    margin-top: auto;
    padding: auto;
    background-color: #ff6b35;
    color: white;
    font-weight: bold;
    border-radius: 5px;
    border:none;
    font-size: 14px;
    width: 100%;
    transition: 0,5;
    cursor: pointer;

}

.card-coluna button:hover {
background-color: transparent;
color: #ff6b35;
border-radius: 5px;
border:solid 1px #ff6b35;

}

.card-linha{

    display: flex;
    flex-direction: row;
    height: 100%;


}

.card-coluna {

    flex-grow: 1;
    padding: 15px;
    height: 100%;


}








</style>

<template>
    <div>
        <h1>Menu</h1>
        <div id="scroll-horizontal">
            <div id="card-content">
                <div class="card-linha">
                    <div id="foto-hamburger">
                        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRwZUSs2sPHsmsKWlljqGXg_2ODrYl10ThPBQ&s" alt="Imagem do Hamburger">
                        <div class="card-coluna">
                            <p id="nome-content">Nome Do Hamburger</p>
                            <p id="preco-content">R$ 45,99</p>
                            <p id="descricao-content">Descrição</p>
                            <button>Selecionar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name : "MenuView"
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
        box-shadow: 0 4px 8px #444;
        position: relative;
    }

    #scroll-horizontal{
        flex: 1;
        overflow-x:auto;
        white-space: nowrap;
        width: 700px;
        margin: 0 auto;
        box-shadow: inset -10px 0px 15px -20px grey;
    }

    .foto-hamburguer{
        flex-shrink: 0;
        width: 100%;
        max-height: 200px;
        object-fit: cover;
        border-radius: 10px 0 0;
    }

    #nome-content {
        font-size: 20px;
        font-weight: bold;
        text-align: center;
        color: orangered;
    } 

    #preco-content {
        font-size: 35px;
        font-weight: bold;
        text-align: center;
        width: 100%;
        color: darkgreen;
    }

    #descricao-content {
    font-size: 16px;
    text-align: left;
    color: gray;
    margin-top: 16px;
    margin-bottom: 16px;
    white-space: pre-line;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    }

    .card-coluna p{
        margin: 0;
    }

    .card-coluna button{
        margin-top: auto;
        padding: 10px;
        background-color: yellowgreen;
        color: darkslategray;
        font-weight: bold;
        border-radius: 5px;
        border: none;
        font-size: 14px;
        width: 100%;
        transition: 0.5;
        cursor: pointer;
    }

    .card-coluna button:hover{
        background-color: transparent;
        color: darkslategray;
        border: solid 1px yellowgreen;
        font-size: 14px;
        border-radius: 5px;
    }

    .card-linha {
        display: flex;
        flex-direction: row;
        height: 100%;
    }

    .card-coluna{
        flex-grow: 1;
        padding: 15px;
        height: 100%;
    }
</style>
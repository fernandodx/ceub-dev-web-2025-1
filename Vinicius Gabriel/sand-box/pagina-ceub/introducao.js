










function log (valor)
{
    console.log(valor);
}


let frutas = ["abacate", "tomate", "pêra"];
log(frutas.length);
log(frutas[2])
frutas.push("tomate")
frutas.pop();

// if(idade >= 12)
//     {
//         console.log("adulto")
//     }
// else if(idade >= 18)
// {
//        console.log("pre-adolescente")
// }'

const comidaFavorita = "lasanha"

switch(comidaFavorita)
{
    case "hamburguer" : log("errou")
        break;
    case "pizza" : log("errou")
        break;
    case "hamburguer" : log("acertou")
        break;
    default: log("tosco")
}

//Estrutura de repetição
for (let loop = 0; loop < 5; loop++) {
    log(`Meu valor no loop: ${loop}`);
  }
  
  let valorWhile = 0;
  while (valorWhile < 5) {
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
  }


//Funções Assíncronas permitem executar operações
// sem bloquear a execução do código
async function BuscarDados()
{
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados Recebidos"), 4*1000 )
    });
}


async function ExecutarBusca()
{
    log("Buscando...")
    let resultado = await BuscarDados();
    log(resultado);
}

ExecutarBusca();


const objTeste = 
{
    oi()
    {
        log("oi");
    },

    xau()
    {
        log("tchau");
    }
}

objTeste.oi();

objTeste.xau();

//manipulacao do DOM 
//CRIAR UM ELEMENTO DINAMICAMENTE NO CORPO DA PAGINA

document.addEventListener("DOMContentLoaded", () =>{
    let titulo = document.createElement("h2");
    titulo.innerText = "Olá DOM";
    document.body.appendChild(titulo);
});

function toggleImagem(){
    //document usa muito
    let img = document.getElementById("1");          //visivel  invisivel   
    img.style.display = img.style.display === "none" ? "block" : "none"
}
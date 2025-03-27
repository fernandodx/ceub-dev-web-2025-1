// Se precisar comentar use //

var ola= "olá Mundo! JS";
console.log(ola);

function log(valor){
    console.log(valor);
}

//Tipos de variavel

var valor =10;
log(typeof valor); //number

var palavra ="Livia";
log(typeof palavra); //string

var isOK =true;
log(typeof isOK); //boolean

var meuObj ={}; //object
var meuArray =[]; //Array
var nulo = null; // null
var variavelFlamengo; //

//Escopo de variável 

function compararEscopo() {
    if(true){
        var varDentro ="Var dentro do bloco";
        let letDentro ="Let dentro do bloco";
        const constDentro = "Const dentro do bloco";
        
        log(varDentro); //funciona
        log(letDentro);// funciona
        log(constDentro); //funciona
    }

    log(palavra); //funciona! (global)
    log(varDentro); //funciona! (escopo)
    //(letDentro); //erro! (acesso somente no bloco)
    //log(constDentro); // erro!(acesso somente no bloco)
}
compararEscopo();


//operações simples
const n1= 1;
const n2= 5;
const valorNumericoStr= "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2);//false
log(n2 ==valorNumericoStr); //true
log(n2 ===valorNumericoStr) //false

log((n2> n1) ||(n2> n1) && (1>2)); //false

//manipulação de arrays
let frutas =["Maça", "Banana", "Laranja"];
log(frutas.length); //3
log(frutas[1]); //Banana

//adicionado novo item 
frutas.push("manga");

log(frutas);

//remover o último elemento
frutas.pop();

log(frutas);

//estruturas condicionais
const idade= 18;
if(idade>=18){
log("sou Adulto");
} else if (idade>=2){
    log("sou uma criança");
}else{
    log("sou bebê");
}

const instituicao = "CEM10";

switch(instituicao){
    case "CEM10": log ("Escola");
    break;
    case "CIL": log("escola de linguas");
    break;
    case "CEUB": log ("faculdade");
    break;
    defaut:
    log("Não é instituição");

}

// estrutura de repetição
for(let loop = 0; loop< 5; loop++){
log(`Meu valor no loop: ${loop}`);
}

let valorWhile = 0;
while(valorWhile <5){
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
}

 async function buscarDados() {
return new Promise(resolve =>{
    setTimeout (()=> resolve("Dados Recebidos"), 4*1000);
});

}


async function executaBusca() {
    log ("Buscando...")

    let resultado = await buscarDados();
    
    log(resultado);
}

executaBusca();

const meuMetodo = function exemploMetodo(){
    log("Executei por metodo normal");

}
log(meuMetodo);

const objTeste = {
    oi(){
        log ("oi");  
    },
    xau(){
        log ("xau");

    }
};

objTeste.oi();
objTeste.xau();

//Manipulação do DOM
//Aqui criamos um elemento dinamicamente eo adicionamos ao corpo da página
document.addEventListener("DOMContentLoaded",() =>{
    let titulo = document.createElement("h2");
    titulo.innerText ="Olá DOM";
    document.body.appendChild (titulo);
}); 

function toggleImagem(){
    let img= document.getElementById("minhaImagem");
    img.style.display = img.style.display ==="none" ? "block":"none";
}
function mostrarValorCombo(){
    let combo= document.getElementById("meuCombo");
    alert("Valor selecionado: " + combo.value);
}

  function mostrarValorRadio(){
    let radios= document.getElementsByName("tamanho");
    for(let radio of radios){
        if(radio.checked){
            alert("Opção selecionada:"+ radio.value);
            break;
        }
    }
  }

  function mostrarValorCheckbox(){
    let checkboxs = document.getElementsByName("Interesse");
    let selecionados = [];
    let resultado ="";
    for(let checkbox of checkboxs){
        if(checkbox.checked){
            selecionados.push(checkbox.value);
        }
        }
        alert("Selecionados:"+ (selecionados.length> 0? selecionados.join(",") :"Nenhum")
    );
    
    
  }
    
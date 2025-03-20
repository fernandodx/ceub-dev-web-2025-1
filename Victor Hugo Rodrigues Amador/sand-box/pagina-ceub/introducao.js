// Se precisar comentar use "//"

var ola = "Oá Mundo! 35";
console.log(ola);

function log(valor){
    console.log(valor);
}

//Tipos de variáveis

var valor = 10;
log(typeof valor);

var palavra = "Victor";
log(typeof palavra); //String

var isOK = true;
log(typeof isOK); //Boolean

var meuObj = {}; //Objetc
var meuArray = []; //Array
var nulo = null; //Null
var variavelFlamenego; //Undefined

//Escopo de variável

function compararEscopo() {
    if(true){
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona
    }

    log(palavra); //Funciona! (Variável Global)
    log(varDentro); //Funciona! (Variável Escopo)
  //  log(letDentro); //Erro! (Acesso somente no bloco)
  //  log(constDentro) //Erro! (Acesso somente no bloco)
}
compararEscopo();

//Operações Simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); //False
log(n2 == valorNumericoStr); //True
log(n2 === valorNumericoStr); //False

log(((n2 > n1) || (n2 > n1)) && (1 > 2)); //False

//Manipulação de arrays

let frutas = ["maça", "Banana", "Laranja"];
log(frutas.lenght); //3
log(frutas [1]); //Banana

//Adicionando novo item

frutas.push("Manga");
log(frutas);

// Remover último elemento

frutas.pop();

log(frutas);

//Estruturas condicionais 

const idade = 18;
if(idade>= 18) {
    log("Sou adulto");
}else if(idade >= 2) {
    log("Sou uma criança");
}else{
    log("Sou bebê");
}

const instituicao = "CEM10"

switch(instituicao){
    case "CEM10" : log("ESCOLA");
    case "CIL": log("ESCOLA DE LÍNGUAS");
    case "CEUB" : log("FACULDADE");
    default: log("Não é institui~]ao");
}

//Funçções Assíncronas permitem executar operações 
//sem bloquear a execução do código

async function buscarDados() {
    return new Promise(resolve => {
        setTimeout(() => resolve("Dados recebidos"), 4*1000);
    });
}

async function executarBusca() {
    log("Buscando...");

    let resultado = buscarDados();

    log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo() {
    log("Executei por metodo normal");
}

log(meuMetodo);

const objTeste = {
    oi(){
        log("OI");
    },
    xau() {
        log("XAU");
    }
}

objTeste.oi();
objTeste.xau();


//Manipulação do DOM
//Aqui criamos um elemento dinamicamente e o
//adicionamos ao corpo da página

document.addEventListener("DOMContentLoaded", () => {
    let titulo = document.createElement("h2");
    titulo.innerText = "Olá DOM";
    document.body.appendChild(titulo);
})


function toggleImagem() {
    let img = document.getElementById("minhaImagem");
    img.style.display = img.style.display === "none" ? "block" : "none";
}
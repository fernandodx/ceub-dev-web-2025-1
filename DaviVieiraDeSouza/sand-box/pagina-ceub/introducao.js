//Se precisar comentar use //

var ola = "Ola Mundo! JS";

console.log(ola);

function log(valor) {
    console.log(valor);
}

//Tipos de Variáveis

var valor = 10;
log(typeof valor); //number

var palavra = "Davi Blinder"
log(typeof palavra);

var isOk = true;
log(typeof isOk);

var meuObj = {}; //Object
var meuArray = []; //Array
var nulo = null; //Nulo
var variavelFlamengo; //Undefined

function comapararEscopo() {
    if (true) {
        var varDentro = "var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro); //Funciona
        log(letDentro); //Funciona
        log(constDentro); //Funciona

    }

    log(palavra); //Funciona! (Global)
    log(varDentro); //Funciona (Escopo)
    //   log(letDentro); //Erro (Acesso somente no bloco)
    //   log(constDentro); //Erro! (Acesso somente no bloco)

}
comapararEscopo();

//Operações Simples

const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log(n1 + n2); //6
log(n1 - n2); //-4
log(n1 / n2); //0.2
log(n1 * n2); //5

log(n1 == n2); //False
log(n2 == valorNumericoStr); // True
log(n2 === valorNumericoStr); //False

log(((n2 > n1) || (n2 > n1)) && (1 > 2)); //False

let frutas = ["Maçã", "Banana", "Laranja"];
log(frutas.length); // 3
log(frutas[1]); // Banana

//Adicionando Novo Item
frutas.push("Manga");

log(frutas);

//Remover o Ultimo Elemento

frutas.pop();

log(frutas);

//Estruturas Condicionais

const idade = 18;
if (idade >= 18) {
    log("Sou maior de idade")
} else if (idade >= 2) {
    log("Sou uma criança");
} else {
    log("Sou bebe")
}

const instituicao = "CEM10"

switch (instituicao) {
    case "CEM10":
        log("Escola");
        break;
    case "CIL":
        log("ESCOLA DE LÍNGUAS");
    case "CEUB":
        log("FACULDADE");
    default:
        log("Não é instituição");
}

//Estrutura de repetição

for (let loop = 0; loop < 5; loop++) {
    log(`Meu valor no loop: ${loop}`)

}

let valorWhile = 0;
while (valorWhile < 5) {
    log(`Meu valor no loop: ${valorWhile}`)
    valorWhile++;
}
//Funções Assíncronas permitem executar operações
// sem bloquear a execução do código
async function buscarDados() {
    return new Promise((resolve) => {
        setTimeout(() => resolve("Dados Recebidos"), 4 * 1000);
    });
}

async function executarBusca() {
    log("Buscando...");

    let resultado = await buscarDados();

    log(resultado);
}

executarBusca();

const meuMetodo = function exemploMetodo() {
    log("Execeutei por metodo normal");
};

log(meuMetodo);

const objTeste = {
    oi() {
        log("OI");
    },
    xau() {
        log("XAU");
    },
};

objTeste.oi();
objTeste.xau();

//Manipulação do DOM
//Aqui criamos um elemento dinamicamente e o adicionamos ao corpo da página
document.addEventListener("DOMContentLoaded", () => {
    let titulo = document.createElement("h2");
    titulo.innerText = "Olá DOM";
    document.body.appendChild(titulo);
});

function toggleImagem() {
    let img = document.getElementById("minhaImagem");
    img.style.display = img.style.display === "none" ? "block" : "none";
}

function mostrarValorCombo() {
    let combo = document.getElementById("meuCombo");
    alert("Valor Selecionado: " + combo.value);
}

function mostrarValorRadio() {
    let radios = document.getElementsByName("tamanho");

    for (let radio of radios) {
        if (radio.checked) {
            alert("Opção selecionada: " + radio.value);
            break;
        }
    }
}

function mostrarInteresses() {
    let interesses = document.getElementsByName("interesse");
    let arr = []
    let str = ", "

    for (let interesse of interesses) {
        if (interesse.checked)
            arr += interesse.value + str
    }
    alert("Interesses Selecionados" + arr);

}

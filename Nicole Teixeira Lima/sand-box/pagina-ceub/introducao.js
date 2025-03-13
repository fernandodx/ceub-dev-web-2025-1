var ola= "Olá Mundo! JS";
console.log(ola);
function log (valor)
{
    console.log(valor);
}
//Tipos variáveis
var valor=10;
log (typeof valor); //isso é um number

var palavra = "Nicole";
log (typeof palavra); //string

var isOK = true;
log (typeof isOK); //boolean

var meuObj={}; //object
var meuArray= []; //array
var nulo = null; //nulo
var variavelBotaFogo; //undefined

//escopo de variável
function compararEscopo ()
{
    if (true)
        {
        var varDentro = "Var dentro do bloco";
        let letDentro = "Let dentro do bloco";
        const constDentro = "Const dentro do bloco";

        log(varDentro);
        log(letDentro);
        log(constDentro);
    }
    log (palavra); //variável global funciona
    log(varDentro);  //funcionavel
    //log(letDentro); //erro,acesso somente no bloco
    //log(constDentro); //erro,acesso somente no bloco
}
compararEscopo();
 
//Operações simples
const n1 = 1;
const n2 = 5;
const valorNumericoStr = "5";

log (n1 + n2) ;
log (n1 - n2) ;
log (n1 / n2) ;
log (n1 * n2) ;

log (n1 == n2) ;
log (n2 == valorNumericoStr) ;
log (n2 === valorNumericoStr) ;

log (((n2 > n1) || (n2 > n1)) && (1 > 2));

//manipulação de arrays
let frutas = ("Maça", "Banana","Laranja");
log (frutas.lenght); 
log(frutas[1]);

//adicionando novo item
frutas.push ("Manga");

log(frutas);

//remover o último elemento
frutas.pop();
log (frutas);


//estruturas condicionais
const idade = 18;
if(idade>=18)
{
    log ("Sou adulto");
}
else if (idade >= 2) 
{
    log ("Sou criança");
}
else
{
    log("Sou bebê");
}

const instituicao = "CEM10";

switch(instituicao)
{
    case "CEM10" : 
    log("ESCOLA");
    break;
    case "CIL" : 
    log ("ESCOLA DE LÍNGUAS");
    case "CEUB" :
    log("FACULDADE");
    break;
    default:
        log("Não é instituicao");
}

//Estrutura de repeticao
for (let loop =0; loop<5; loop++)
{
    log(`Meu valor no loop: ${loop}`);
}
let valorWhile =0;
while (valorWhile < 5)
{
    log(`Meu valor no loop: ${valorWhile}`);
    valorWhile++;
}

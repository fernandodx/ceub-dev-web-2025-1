
var ola= "ola mundo!"
console.log(ola)

function log(valor){
    console.log(valor)
}

var valor = 10;
log(typeof valor)

var palavra = "Enzo"
log(typeof palavra)

var isOK = true
log(typeof isOK)

var meuObj = {}
var meuArrey = []
var nulo = null
var variavelFlamengo 

function compararEscopo() {
    if(true){
        var varDentro = "Var dentro do bloco"
        let letDentro = "let dentro do bloco"
        const constDentro= "const dentro do bloco"

        log(varDentro)
        log(letDentro)
        log(constDentro)
    }

   // log(palavra)
  //  log(varDentro)
   // log(letDentro)
    //log(constDentro)
}
compararEscopo()

const n1 = 1 
const n2 = 5
const valorNumericoStr = "5"

log(n1 + n2)
log(n1 - n2)
log(n1 / n2)
log(n1 * n2)

log(n1 == n2)
log(n2 == valorNumericoStr)












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
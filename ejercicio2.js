/* 
 * Dado un valor saber si es par.
 * 
 */
const _ = require("lodash");

function esPar(numero) {
    return numero % 2 == 0
}

/* 
 * Dado una lista de elementos saber si todos los elementos excepto el primero son pares
 * 
 */
function laColaEsPar(lista) {
    const [primerNumero, ...resto] = lista;

    if(resto.length == 0){
        return false;
    }

    return _.every(resto,esPar);
}

module.exports = { esPar, laColaEsPar };
/* 
 * Dado un valor saber si es par.
 * 
 */
function esPar(numero) {
    return numero % 2 == 0
}


/* 
 * Dado una lista de elementos saber si todos los elementos excepto el primero son pares
 * 
 */


/*function laColaEsPar(lista) 
{
    const [p, ...r] = lista;

    for(i=0;i<=r.length;i++)
    {
        if(!esPar(r[i]))
        {
            return false;
        }
    }
    return true;
}*/
[1,2,4,6]

function laColaEsPar(lista) {
    const [primerNumero, ...resto] = lista;

    /*if(lista.length < 2){
        return false;
    }*/

    if(resto.length == 0){
        return false;
    }

    for(i=0;i<resto.length;i++){
       if(!esPar(resto[i])){
        return false;
       } 
    }
    return true;

}



module.exports = { esPar, laColaEsPar };

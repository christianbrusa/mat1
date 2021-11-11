/* 
 * Dado un valor saber si es par
 * 
 */
function esPar(x) {
    if(x % 2 == 0)
    {
    	return x;
    }
}


/* 
 * Dado una lista de elementos saber si todos los elementos excepto el primero son pares
 * 
 */
function laColaEsPar(lista) 
{
    const [p, ...r] = lista;

    for(i=0;i<r.length;i++)
    {
        if(!esPar(r[i]))
        {
            return false;
        }
        else
        {
            return true;
        }
    }
    

    return esPar(r);
}



module.exports = { esPar, laColaEsPar };

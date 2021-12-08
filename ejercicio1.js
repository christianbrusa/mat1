/* 
 * Pasar la primer letra de la palabra a mayuscula y dejar el resto como esta
 * Ejemplo capitalizeFirstLetter("hola") => capitalizeFirstLetter("Hola")
 * Tip: Un caracter entiende toUpperCase(https://www.w3schools.com/jsref/jsref_touppercase.asp)
 */
function capitalizeFirstLetter(palabra) { 
    const [p, ...r] = palabra;
    if(palabra.length == 0){
    	return palabra;
    }
    p1 = p.toUpperCase();
	return p1+r.join('');
}

module.exports = capitalizeFirstLetter;
/**
 * Ejemplo de vehiculo
 *     const autoBase = {
        nafta: 0,
        capacidadTanque: 100,
        km: 0,
        marca: "Audi"
    }
 */

/* 
 * Deberia cambiar nafta si estoy en menos de un 10% de la capacidad del tanque
 * 
 */
function deberiaRegargarNafta(auto) {
	return auto.nafta < 10
}


/* 
 * Necesita cambiar el aceite si supere los 15000 km
 * 
 */
function necesitaCambiarAceite(auto) {
	return auto.km > 15000;
}



module.exports = { deberiaRegargarNafta, necesitaCambiarAceite };

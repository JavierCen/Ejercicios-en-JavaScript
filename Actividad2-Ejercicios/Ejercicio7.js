/*   7.	Determina si dada una lista, ésta se encuentra ordenada. Se debe devolver verdadero o falso.  */
const arreglo = [2, 8, 10, 1, 9, 3, 20, 33];
console.log("Antes de ordenar: ",arreglo);
arreglo.sort((unNumero, otroNumero) => unNumero - otroNumero);
console.log("Después de ordenar: ",arreglo);
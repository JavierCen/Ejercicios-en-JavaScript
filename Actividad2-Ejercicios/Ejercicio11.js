/*  11.	Realiza una función que permita cargar calcular la unión, intersección y diferencia de dos conjuntos dados.   */
var conjunto1 = new Set([0, 1, 2, 3, 4, 5]);
var conjunto2 = new Set([2, 5, 6, 7, 8, 9, 10]);

let union = new Set ([...conjunto1, ...conjunto2]);
let interseccion = new Set(Array.from(conjunto1).filter(x => conjunto2.has(x)));
let diferencia = new Set(Array.from(conjunto1).filter(x => !conjunto2.has(x)));
console.log("UNIÓN = ",union);
console.log("INTERSECCIÓN = ",interseccion);
console.log("DIFERENCIA = ",diferencia);

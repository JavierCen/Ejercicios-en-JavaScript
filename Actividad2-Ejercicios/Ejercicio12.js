/*  12.	Realiza una función que permita definir un mapa de datos y permita encontrar un valor a partir de su clave.   */
var obj1 = {
  a: 1,
  b: 2
};

var obj2 = {
  a: 1,
  b: 2
};

var map = new Map();
map.set( obj1, 1 );

console.log( 'map.has(obj1) = ', map.has(obj1) );
console.log( 'map.has(obj2) = ', map.has(obj2) );


/*   8.	Dadas dos listas, determine si son iguales. Devolver verdadeo o falso.  */
var lista1 = {a:1, b:2, c:3};
var lista2 = {c:3, b:2, a:1};

function compararLista(a, b) {
    var aKeys = Object.keys(a).sort();
    var bKeys = Object.keys(b).sort();
    if (aKeys.length !== bKeys.length) {
        return false;
    }
    if (aKeys.join('') !== bKeys.join('')) {
        return false;
    }
    for (var i = 0; i < aKeys.length; i++) {
        if ( a[aKeys[i]]  !== b[bKeys[i]]) {
            return false;
        }
    }
    return true;
}
console.log("lista1 {a:1, b:2, c:3} ES IGUAL AL lista2 {c:3, b:2, a:1}",compararLista(lista1, lista2));
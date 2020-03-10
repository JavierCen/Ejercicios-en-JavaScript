/*   5.	Calcula la suma de una lista (arreglo) de elementos.  */
function sum(arreglo){
    var acum = 0;
    for (var i = 0; i <arreglo.length; i++){
      acum = acum + arreglo[i];
      }
      return acum;
    }
    console.log(("SUMA 1+2+3+4 = "),sum([1,2,3,4]));

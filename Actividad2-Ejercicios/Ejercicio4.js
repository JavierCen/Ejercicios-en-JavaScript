/*   4.	Determine el mayor de 4 enteros.  */
var arreglo  = [13,23,45,6,19];
    maximo = 0;

for(var i=0,len=arreglo .length;i<len;i++){
    if(maximo < arreglo [i]){
        maximo = arreglo [i];
    }
}
console.log("NUMEROS [13,23,45,6,19] EL MAYOR ES: ",(maximo));
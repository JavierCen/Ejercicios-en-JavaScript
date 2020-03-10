/*  10.	Realizar una función que reciba una lista y devuelva empleando recursividad otra lista de los elementos pares.  */
let num =[1,3,4,6,7,8];
const pares = lista => {
    let result =[];
    if(lista.length ==0){
        return result;
    }if(lista[0]%2 ==0){
        result.push(lista[0]);
    }return result.concat(pares(lista.slice(1)));
}
console.log(("Lista: "+num+" ===>> Números Pares ="), pares(num));

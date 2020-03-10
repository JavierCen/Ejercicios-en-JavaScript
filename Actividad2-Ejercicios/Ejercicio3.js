/*   3.	Dado un número entero en segundos, determinar la cantidad de horas, minutos y segundos que contiene.  */
segundos = [1341];
var d=new Date(segundos*1000);
var horas = (d.getHours()==0)?23:d.getHours()-1;
var minutos = (d.getMinutes()<9)?"0"+d.getMinutes():d.getMinutes();
var segundos = (d.getSeconds()<9)?"0"+d.getSeconds():d.getSeconds();
let resultado = horas + ":" + minutos + ":" + segundos;
console.log("SEGUNDOS [1341] CANTIDAD EN H:MM:SS ES: ",resultado);
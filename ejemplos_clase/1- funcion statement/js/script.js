"use strict";

console.log("Declaración de función con retorno")
let numero1 = 1
function numeroMasUno(numero1) {
    numero1 = numero1 + 1;
    return numero1;
}

numero1 = numeroMasUno(numero1);
console.log(numero1);


console.log("Declaración de función sin retorno")
numero1 = 1
function numeroMasUnoSinRetorno(numero1) {
   numero1 = numero1 + 1;
}
 
numeroMasUnoSinRetorno(numero1);
console.log(numero1);

console.log("Función valores pasados por referencia")
let numero2 = {valor: 1}
function numeroMasUnoPorReferencia(numero2) {
    numero2.valor = numero2.valor + 1;
}
 
numeroMasUnoPorReferencia(numero2);
console.log(numero2.valor);

console.log("Función de alto orden - funciones como objetos")
function suma(a, b) {
	return a + b;
}
function operacionMatematica(a, b, funcionOperacion){
	return funcionOperacion(a, b);
}
console.log(operacionMatematica(3, 5, suma));


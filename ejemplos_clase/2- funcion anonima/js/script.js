"use strict";

console.log("Declaración de función una función anónima");

// Almacenar una función como un objeto en una variable
const ejemplo = function() {}

console.log("Declaración y uso de una función anónima");
let numero = 1
const numeroMasDos = function (numero) {
    numero += 2;
    return numero;
}

numero = numeroMasDos(numero)
console.log(numero);

console.log("Constructor de una función");
const prueba = function(){}
console.log(prueba.constructor);


console.log("Función invocada inmediatamente (IIFE)");
( function () {
    let nombre = 'Max'
    console.log(`Hola ${nombre}`);
})();

"use strict";

console.log("Uso de variables globales en una función");
let a = 2;
let b = 3;
function suma() {
    return a + b;
 }
  
let resultado = suma();
console.log(resultado);

console.log("Uso de variables globales de una función dentro de otra función");
function externa() {
    const a = "variable en funcion externa";

    function interna() {
        console.log(a);
    }
    interna();
}
externa();

console.log("Uso de variables globales y locales de una función dentro de otra función");
function externa2() {
    const a = "variable en funcion externa";

    function interna2() {
        const a = "variable en funcion interna";
        console.log(a);
    }
    interna2();
}
externa2();

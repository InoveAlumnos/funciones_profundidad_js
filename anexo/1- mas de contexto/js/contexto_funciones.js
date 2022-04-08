"use strict";

console.log(`"this" a nivel script: ${this}`);

let numero = 5;
console.log(`El valor de numero a nivel global: ${numero}`);

function aumentar(numero) {
    numero++;
    console.log(`El valor de numero dentro de aumentar: ${numero}`);
}

aumentar(numero);
console.log(`El valor de numero después de aumentar: ${numero}`);

const funcionArrow = (numero) => {
    numero++;
    console.log(`El valor de numero dentro de arrow function: ${numero}`);
}

funcionArrow(numero);
console.log(`El valor de numero después de la arrow function: ${numero}`);

let objectoNumero = {numero: 5};
console.log(`El valor de objectoNumero a nivel global: ${objectoNumero.numero}`);

function aumentarObjecto(obj) {
    obj.numero++;
    console.log(`El valor de objectoNumero dentro de aumentar: ${obj.numero}`);
}

aumentarObjecto(objectoNumero);
console.log(`El valor de objectoNumero después de aumentar: ${objectoNumero.numero}`);

const funcionArrowObjecto = (obj) => {
    obj.numero++;
    console.log(`El valor de objectoNumero dentro de arrow function: ${obj.numero}`);
}

funcionArrowObjecto(objectoNumero);
console.log(`El valor de numero después de la arrow function: ${objectoNumero.numero}`);

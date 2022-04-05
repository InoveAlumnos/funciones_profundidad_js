"use strict";

console.log(`"this" a nivel script: ${this}`)

const tarjeta = document.querySelector("article");

// Esto funciona
tarjeta.addEventListener("mouseout", function() {
    // Removemos la clase planta
    tarjeta.classList.add("dark-mode");
});

// Esto funciona, dentro de una función de callback
// se bindea el contexto a "tarjeta"
// this === tarjeta
tarjeta.addEventListener("mouseout", function() {
    // Removemos la clase planta
    console.log(`"this" a nivel callback: ${this}`)
    this.classList.add("dark-mode");
});

// Esto funciona, la arrow function toma el contexto
// del padre, en este caso, el contexto donde está tarjeta
tarjeta.addEventListener("mouseout", () => {
    // Removemos la clase planta
    tarjeta.classList.add("dark-mode");
});

// Esto NO funciona, la arrow function toma el contexto
// del padre, en este caso, el contexto donde está tarjeta
// por lo tanto this === window
tarjeta.addEventListener("mouseout", () => {
    // Removemos la clase planta
    console.log(`"this" a nivel arrow function: ${this}`)
    this.classList.add("dark-mode");
});

// Ejemplo de referencia
// https://www.30secondsofcode.org/articles/s/javascript-arrow-function-event-listeners

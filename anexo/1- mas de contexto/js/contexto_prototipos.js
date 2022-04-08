"use strict";

console.log(`"this" a nivel script: ${this}`);

function funcionContenedora() {

    this.numero = 5;
    console.log(`"this" a nivel de funcion contenedora: ${this}`);
    console.log(`El valor de numero inicializado en el contenedor: ${this.numero}`);

    function aumentar(numero) {
        numero++;
        console.log(`"this" a nivel aumentar: ${this}`);
        console.log(`El valor de numero dentro de aumentar: ${numero}`);
    }

    aumentar(this.numero);
    console.log(`El valor de numero después de aumentar: ${this.numero}`);

    const funcionArrow = (numero) => {
        numero++;
        console.log(`"this" a nivel de arrow function: ${this}`);
        console.log(`El valor de numero dentro de arrow function: ${numero}`);
    }

    funcionArrow(this.numero);
    console.log(`El valor de numero después de la arrow function: ${this.numero}`);

    const funcionArrowThis = () => {
        this.numero++;
        console.log(`"this" a nivel de arrow function + this: ${this}`);
        console.log(`El valor de numero dentro de arrow function + this: ${this.numero}`);
    }

    funcionArrowThis(this.numero);
    console.log(`El valor de numero después de la arrow function + this: ${this.numero}`);
}

const contenedor = new funcionContenedora();
console.log(`El valor de numero al finalizar la creació de contenedor: ${contenedor.numero}`);
"use strict";

console.log(`Ensayando el "this" dentro de una función`);

function myFuncion() {
    return this;
}

let objeto = {
    variableFuncion: myFuncion
};

console.log(`"this" dentro de una función "suelta":`);
console.log(myFuncion());
console.log(`"this" dentro de una función como variable en un objeto:`);
console.log(objeto.variableFuncion());


console.log("Declarando una función dentro de un objeto");

let miObjeto = {
    nombre: "Max",
    apellido: "Power",

    nombreCompleto: function() {
        console.log(`"this" dentro de la función dentro del objeto: ${this}`);
        const nombre = "nombre variable local";
        return this.nombre + " " + this.apellido;
    }
};

console.log(miObjeto.nombreCompleto());

console.log("Declarando una función arrow dentro de un objeto");

let miObjeto2 = {
    nombre: "Max",
    apellido: "Power",

    nombreCompleto: () => {
        console.log(`"this" dentro de la función arrow dentro del objeto: ${this}`);
        return this.nombre + " " + this.apellido;
    }
};

console.log(miObjeto2.nombreCompleto());

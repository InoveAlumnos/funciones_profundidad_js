"use strict";

console.log("Declarando una función dentro de un objeto");

function Persona(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  this.nombreCompleto = function() {
    console.log(`"this" dentro de la función dentro del prototipo: ${this}`);
    return this.nombre + " " + this.apellido;
  }
}

console.log("Declarando una función flecha dentro de un objeto");

const personaMax = new Persona("Max", "Power");
console.log(personaMax.nombreCompleto());

function Persona2(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;

  this.nombreCompleto = () => {
    console.log(`"this" dentro de la función flecha dentro del prototipo: ${this}`);
    return this.nombre + " " + this.apellido;
  }
}

const personaMaxArrow = new Persona2("Max", "Power");
console.log(personaMaxArrow.nombreCompleto());

console.log("Modificando los valores internos de un objeto");

const juan = {nombre: "Juan", apellido: "Perez"};
juan.apellido = "Gomez";
console.log(`El nombre completo de Juan es: ${juan.nombre} ${juan.apellido}`);

console.log("Modificando los valores internos de un objeto función prototipo");

const persona1 = new Persona("Scott", "Summers");
const persona2 = new Persona("Jean", "Grey");

// Modificar el apellido de la persona 1
persona1.apellido = "Ciclope";

console.log(`Persona 1: ${persona1.nombreCompleto()}`);
console.log(`Persona 1: ${persona2.nombreCompleto()}`);
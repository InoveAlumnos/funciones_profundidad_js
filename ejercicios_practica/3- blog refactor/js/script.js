"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Deberá tomar esta versión de la aplicación de blog
vista en la última clase y refactorizar:
* Dividir la app en archivos (app.js, events.js, etc).
* Usar funciones flecha en los eventos.
* Crear un prototipo "Post" que represente la estructura de 
  datos de un post e implemente la función "render" 
  (tal cual lo realizado con el prototipo Pokemons).

 */


// Apuntamos a nuestro titulo y lo guardamos en una constante
const tituloPrincipal = document.querySelector(".main-title");

// Accedemos al texto de nuestro titulo
console.log(tituloPrincipal.textContent);

// Generamos la fecha que queremos insertar
const hoy = new Date();

// Alteramos el texto de nuestro titulo con un "template string"
tituloPrincipal.textContent = `Publica tu aprendizaje: ${hoy.getDate()}/${
  hoy.getMonth() + 1
}/${hoy.getFullYear()}`;

// ----------------------------------------------------
// Generar contenido dinamicamente con bucles y objetos

const data = [
  {
    titulo: "Einstein y su intelecto",
    avatar: "./images/avatar1.png",
    texto: `Gracias a su biógrafo, somos capaces de saber que Einstein tan
            solo a la edad de 16 años, ya tenía una temprana concepción del
            funcionamiento de la gravedad, acercándose a la idea de que la
            gravedad y la aceleración se comportaban de maneras similares.
            Esta forma de entender la gravedad, fue la que tiempo después como
            le permitió extrapolar muchos de sus conocimientos sobre la
            aceleración a la teoría de la relatividad especia y posteriormente
            a la relatividad general.`
  },
  {
    titulo: "React y su seguridad",
    avatar: "./images/avatar2.png",
    texto: `Cuando manipulamos componentes en React, estos han de pasar
            previamente por un filtro el cual se encarga de aplicar un proceso
            de "sanitizacion" previa a desplegarlo, esto evita que cosas como
            el innerHTML, no puedan derivar en un problema.`
  },
  {
    titulo: "Algoritmos y su velocidad",
    avatar: "./images/avatar3.png",
    texto: `A la hora de tener que manipular datos desordenados y tener que
            ordenarlos, casi siempre será mejor optar por quicksort que por
            heapsort, ya que la implementación de quicksort resulta mucho más
            sencilla y su velocidad de ordenamiento es muy superior en casi
            todos los casos, sin embargo, su versión iterativa resulta algo
            difícil de implementar, por lo cual siempre será más rápido optar
            por la versión recursiva, siempre y cuando el desborde de memoria
            no sea un problema.`
  }
]

let accumulator = ""
for(const post of data){

  accumulator += `
  <article class="post">
    <div class="post-header">
      <img
      src= "${post.avatar}"
        class="icon-avatar"
        alt="avatar icon"
        width="75"
      />
      <h2>${post.titulo}</h2>
    </div>
    <div>
      <p>
        ${post.texto}
      </p>
    </div>
  </article>
  `
};

const section = document.querySelector("section");
// innerHTML reemplaza todo el contenido HTML de ese elemento,
// todos los hijos, por lo que si habia código HTML se perderá
// y reemplazará por el nuevo.
// Es recomendable no invocar innerHTML muchas veces ya que
// no es muy performante
section.innerHTML = accumulator;

// ----------------------------------------------------
/* Nueva forma de recorrer todos los posts y agregar la funcionalidad
  de mostrar/ocultar
*/
const posts = document.getElementsByClassName("post");

for (const post of posts) {
  post.classList.add("closed");

  post.addEventListener("mouseover", function () {
    // Removemos la clase de cerrado
    post.classList.remove("closed");
    // Agregamos la clase de abierto
    post.classList.add("open");
  });

  post.addEventListener("mouseout", function () {
    // Agregamos la clase de cerrado
    post.classList.add("closed");
    // Quitamos la clase de abierto
    post.classList.remove("open");
  });
}

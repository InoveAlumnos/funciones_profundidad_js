"use strict";

/* Tarea
 * Objetivos: adquirir herramientas y poner
 * en práctica lo visto en clase
 */

/* Enunciado

Transforme el array de objetos de posteos brindado como 
variable "data" y cree una lista de protitopos Post

*/

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

/*

1 - Primero arme su prototipo "Post" el cual deberá recibir como parámetro
--> titulo
--> avatar
--> texto

*/



/*

2 - Utilice un bucle para recorrer "data" y en cada iteración:
--> Genere un objeto del prototipo con los datos del objeto de esa iteración
--> Almacene el objeto generado dentro de una lista "posts"

*/


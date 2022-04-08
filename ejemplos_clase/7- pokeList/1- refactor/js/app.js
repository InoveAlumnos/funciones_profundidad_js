"use strict";

/* Renderizar datos */
let accumulator = ""
for(const pokemon of data) {
    accumulator+=    
    `
    <article>
        <img
        src=${pokemon.thumbnail}
        class="icon-type"
        alt="icon type"
        />
        <p>
            ${pokemon.name}
        </p>
    </article>
    `
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPokemonMouseEvents();


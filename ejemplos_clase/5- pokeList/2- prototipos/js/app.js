"use strict";

/* Crear los objetos pokemon */
let pokemons = [];
for(const pokeData of data) {
    pokemons.push(new Pokemon(
                    pokeData.id,
                    pokeData.name,
                    pokeData.thumbnail
                        )
                );
}

/* Renderizar datos */
let accumulator = ""
for(const pokemon of pokemons) {
    accumulator += pokemon.render();
};

const section = document.querySelector("section");
section.innerHTML = accumulator;

/* Agregar eventos */
addPokemonMouseEvents();


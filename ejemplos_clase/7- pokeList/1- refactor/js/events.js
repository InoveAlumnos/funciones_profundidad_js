
"use strict";

function addPokemonMouseEvents() {
    // Apuntar a todas las tarjetas de pokemons (article)
    const tarjetas = document.querySelectorAll("article");

    for (const tarjeta of tarjetas) {
        tarjeta.addEventListener("mouseover", () => {
            // Agregar la clase planta
            tarjeta.classList.add("planta")
        });

        tarjeta.addEventListener("mouseout", () => {
            // Removemos la clase planta
            tarjeta.classList.remove("planta");
        });
    }
}
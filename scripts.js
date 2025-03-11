console.log(document.title);

// Ejercicio 1
const titleGen1 = document.getElementById("gen-1");
titleGen1.innerText = "Generasión 1 Pokimon";

// Ejercicio 2
const pokeGen1 = document.querySelector(".infocard-list.infocard-list-pkmn-lg");
pokeGen1.style.backgroundColor = "yellow";

// Ejercicio 3
console.log(document.URL);

// Ejercicio 4
console.log(document.domain);

// Ejercicio 5
console.log(document.querySelectorAll(".img-fixed.img-sprite"));

// Ejercicio 6
const imgs = document.querySelectorAll("img");
imgs.forEach((pokemon) => {
    pokemon.setAttribute(
        "src",
        "https://media.giphy.com/media/2v170e71aanfi/giphy.gif"
    );
});

// Ejercicio 7
const pokemons = document.querySelectorAll(".infocard");
pokemons.forEach((pokemon) => {
    if (pokemon.innerHTML.includes("Flying")) {
        pokemon.style.backgroundColor = "#b6ecc3";
    }
});

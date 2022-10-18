let nextPage = null;
let prevPage = null;

// pagina siguiente
function getNextPage() {
    console.log("Next: " + nextPage)
    // vaciamos el contenedor de pokemon al cambiar de pagina (se podria hacer una funcion para esto, evitando duplicar codigo)
    let pokemonContainer = document.getElementById("pokemon-container");
    pokemonContainer.innerHTML = "";
    getPokemons(nextPage);
}

// pagina anterior
function getPrevPage() {
    if (prevPage != null) {
        let pokemonContainer = document.getElementById("pokemon-container");
        pokemonContainer.innerHTML = "";
        getPokemons(prevPage);
    } else {
        console.log("No hay página anterior");
    }
}

// peticion ajax con XMLHttpRequest
function getPokemons(pageUrl = "https://pokeapi.co/api/v2/pokemon/") {
    let request = new XMLHttpRequest();
    // abrir peticion, indicando metodo, url y si es async
    request.open("get", pageUrl, true);
    // enviar peticion
    request.send();
    // cuando cambia el estado de la peticion, comprobamos si se ha completado
    request.onreadystatechange = function () {
        // se puede encontrar mas info de readyState, status y responseText en la documentacion de XMLHttpRequest
        if (this.readyState == 4 && this.status == 200) {
            // la respuesta llega como texto y la pasamos a objeto JS (JSON)
            const response = JSON.parse(this.responseText);
            nextPage = response.next;
            prevPage = response.previous;
            console.log({ response });
            const results = response.results;
            // obtener elemento html por id
            let pokemonContainer = document.getElementById("pokemon-container");
            console.log(pokemonContainer)
            // añadir nombre de cada pokemon como enlace
            for (let i = 0; i < results.length; i++) {
                let pokemon = results[i];
                console.log(pokemon);
                // modificar el html interno de un elemento
                pokemonContainer.innerHTML += '<a title="' + pokemon.name + '" href="' + pokemon.url + '">' + pokemon.name + '</a><br />';
            }
        }
    };
}
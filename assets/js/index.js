const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

let limit = 3;
let offset = 0;
let newLimit = 0;

loadMoreButton.addEventListener('click', function() {    
    newLimit += limit
    loadPokemonItems(offset, newLimit)
})


function loadPokemonItems(offset,limit) {

    PokeApi.getPokemons(offset,limit).then((PokeApiList = []) => {
        pokemonList.innerHTML = PokeApiList.map((pokemon) => convertToHTML(pokemon)).join('');
    })
    
}


function convertToHTML(pokemon) {
    return `<div class="bg-white rounded-md shadow-md p-4 flex flex-col justify-between transform hover:scale-105 transition-transform duration-300">
                <div>
                    <img src="${pokemon.img}" alt="${pokemon.name}" class="mx-auto h-40">
                    <h2 class="text-xl font-bold text-center mt-4">${pokemon.name}</h2>
                    <p class="text-gray-700 text-center">Types: ${ pokemon.types.map((type) => `${type}`).join(',')} </p>
                </div>
                <button class="bg-blue-500 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300">
                    View Details
                </button>
            </div>`
}






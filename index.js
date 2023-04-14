
const pokemonList = document.getElementById('pokemonList');
const loadMoreButton = document.getElementById('loadMoreButton');

let limit = 1;
let offset = 0;

loadMoreButton.addEventListener('click', function() {
    limit += 10
    loadPokemonItems(offset, limit)
})


function loadPokemonItems(offset,limit) {

    PokeApi.getPokemons(offset,limit).then((PokeApiList = []) => {

        pokemonList.innerHTML = PokeApiList.map((pokemon) => convertToHTML(pokemon)).join('');
        
    })
    
}


function convertToHTML(pokemon) {
    return `<li class='my-5 w-[350px] ${pokemon.type} rounded-lg p-2'>
    <div class=''>
      <div class='flex justify-between items-center'>
      <p class="text-lg">${pokemon.name}</p>
      <p class="text-xs">#${pokemon.number}</p>
      </div>
      <div class="grid grid-cols-2">
        <div>
          
          <div class="flex flex-wrap  gap-2 justify-start items-center gap-x-2">
            ${ pokemon.types.map((type) => `<p class="px-3 text-sm rounded-full font-thin shadow-xl border-2 border-gray-300 ${type}">${type}</p>`).join('')}
          </div>
        </div>
        <div class="flex justify-end items-center">
          <img class="h-40 w-40 drop-shadow-2xl" src="${pokemon.img}"
        </div>
      </div>
    </div>
</li>`
}






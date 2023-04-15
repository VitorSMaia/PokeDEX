const PokeApi = {}

function convertPokemonApiDetailToPokemon(pokeDetail) {

    const pokemon = new Pokemon();
    pokemon.id = pokeDetail.id;
    pokemon.number = pokeDetail.order;
    pokemon.name = pokeDetail.name.charAt(0).toUpperCase() + pokeDetail.name.substr(1);
    pokemon.img = pokeDetail.sprites.other.dream_world.front_default

    const types =  pokeDetail.types.map((typeSlot) => typeSlot.type.name.charAt(0).toUpperCase() + typeSlot.type.name.substr(1));
    const [type] = types;

    pokemon.types = types;
    pokemon.type = type;

    return pokemon;
}


PokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokemonApiDetailToPokemon)
}



PokeApi.getPokemons = (offset = 0, limit = 0) => {

    let url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}set&limit=${limit}`;

    return fetch(url)
    .then((response) => response.json())
    .then((responseJson) => responseJson.results )
    .then((pokemonList) => pokemonList.map((pokemon) => PokeApi.getPokemonDetail(pokemon)))
    

    .then(detailRequest => Promise.all(detailRequest))
    .then(pokemonList => pokemonList)
 
    .catch((error) => console.log(error))
    .finally(() => {
        
    });
}

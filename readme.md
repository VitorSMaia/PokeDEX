
<img src="https://github.com/VitorSMaia/PokeDEX/blob/master/assets/img/pokedex.gif"/>
______________________________________________________________________________________________________________________________

### Poke Api <br>

O arquivo HTML que cria uma página da web simples para exibir uma lista de pokémons usando a API do **PokéAPI**. A página usa uma combinação de HTML, CSS e JavaScript para exibir os dados.



Ao abrir a página em um navegador, a lista de pokémons é exibida em um layout de grade, usando o TailwindCSS para ajudar a estilizar a página. Há também um botão **"Load More"** que permite carregar mais pokémons na lista.

O código JavaScript é responsável por obter dados da API do **PokéAPI**, converter os dados em um formato adequado e exibir esses dados na página. O arquivo pokemon-model.js define um modelo de objeto para representar um pokémon e o arquivo poke-api.js contém a lógica para fazer chamadas à API do **PokéAPI** e processar os resultados. O arquivo index.js é o arquivo principal que usa essas outras duas bibliotecas para buscar os dados da API e exibir os pokémons na lista.

Ao personalizar este código para o seu próprio projeto, você pode modificar o layout, estilo e comportamento da página para atender às suas necessidades. Você também pode usar outras APIs de terceiros para buscar dados relevantes para o seu projeto e exibi-los na página.

### poke-api.js

______________________________________

O código apresentado define um objeto JavaScript chamado PokeApi, que contém duas funções. A primeira função **convertPokemonApiDetailToPokemon(pokeDetail)** recebe um objeto pokeDetail como entrada e converte os dados em um objeto Pokemon personalizado. O objeto Pokemon possui as propriedades id, number, name, img, types e type, que são preenchidos a partir dos dados de pokeDetail.

A segunda função PokeApi.getPokemonDetail(pokemon) recebe um objeto pokemon que contém a URL para recuperar detalhes de um Pokémon. A função faz uma solicitação HTTP para a URL usando a função fetch() do JavaScript. Em seguida, converte os dados recebidos em um objeto Pokemon usando a função **convertPokemonApiDetailToPokemon(pokeDetail)** definida anteriormente e retorna esse objeto.

A terceira função PokeApi.getPokemons(offset, limit) é a principal função que é chamada para recuperar uma lista de Pokémon da API do **PokéAPI**. A função aceita um valor offset e um valor limit como entrada. Esses valores são usados para especificar o número de resultados que serão retornados pela API. A função constrói uma URL para recuperar a lista de Pokémon com base nos valores offset e limit fornecidos. Ele usa a função fetch() novamente para fazer a solicitação HTTP para a URL.

Em seguida, a função usa a função map() do JavaScript para iterar sobre cada objeto pokemon na lista de resultados e chama a função PokeApi.getPokemonDetail(pokemon) para obter os detalhes de cada Pokémon individual. Os detalhes de cada Pokémon são recuperados usando a função fetch() e convertidos em um objeto Pokemon usando a função **convertPokemonApiDetailToPokemon(pokeDetail)**.

Em seguida, a função usa Promise.all() para aguardar todas as solicitações detalhadas serem concluídas e retornar a lista completa de Pokémon como uma matriz de objetos Pokemon.

Se ocorrer algum erro durante o processo, a função exibirá uma mensagem de erro no console.

export const GetApiRoutes = (endpoint)=> {
    const routes = {
        GetPokemons: `/Biuni/PokemonGO-Pokedex/master/pokedex.json`
    };

    return routes[endpoint];
};

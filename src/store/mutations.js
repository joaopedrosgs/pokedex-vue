export const setPokemonData = (state, list) => {
    state.statePokemonDataList = list
}
export const setFavoritePokemonList = (state, list) => {
    state.stateFavoritePokemon = list
}
export const addFavorite = (state, pokemon) => {
    var index = state.stateFavoritePokemon.indexOf(pokemon);
    if (index > -1) {
        state.stateFavoritePokemon.splice(index, 1);
        return false;
    } else {
        state.stateFavoritePokemon.push(pokemon)
        return true;
    }

}
export const changeSelected = (state, id) => {
    state.stateSelectedPokemon = id;
}
export const deleteFavorite = (state, item) => {
    state.stateFavoritePokemon.splice(item, 1)
}
export const eraseFavoritePokemonList = state => {
    state.stateFavoritePokemon = []
}
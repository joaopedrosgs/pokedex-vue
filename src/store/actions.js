export default {
    setPokemonData({
        commit
    }, payload) {
        commit('setPokemonData', payload)
    },
    setFavoritePokemonList({
        commit
    }, payload) {
        commit('setFavoritePokemonList', payload)
    },
    addFavorite({
        commit
    }, payload) {
        commit('addFavorite', payload)
    },
    deleteFavorite({
        commit
    }, payload) {
        commit('deleteFavorite', payload)
    },
    changeSelected({
        commit
    }, payload) {
        commit('changeSelected', payload)
    }
}
import Vue from 'vue'
import Vuex from 'vuex'
import createPersistedState from 'vuex-persistedstate'
import actions from "./actions"
import * as mutations from "./mutations"

Vue.use(Vuex)



const store = new Vuex.Store({
    plugins: [createPersistedState({
        key: 'pokedex'
    })],
    state: {
        statePokemonDataList: [],
        stateFavoritePokemon: [],
        stateSelectedPokemon: 1
    },
    actions,
    mutations
})

export default store
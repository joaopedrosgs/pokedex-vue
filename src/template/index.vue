<template>
  <div id="app">
    <evolutionChain :pokemonId="pokemonSelectedId" id="pokecard" />
    <div id="pokelist-wrapper">
      <PokeList @pokemonSelected="setEvolutionChain" :pokemonList="statePokemonDataList" />
    </div>
  </div>
</template>

<script>
import PokeList from "../organisms/PokeList";
import evolutionChain from "../organisms/EvolutionChain";
import { mapState, mapActions } from "vuex";

export default {
  name: "Index",
  components: {
    PokeList,
    evolutionChain
  },
  data: function() {
    return {
      pokemonSelectedId: 1
    };
  },
  computed: {
    ...mapState(["statePokemonDataList"]),
    getSelectedPokemonId() {
      return this.pokemonSelectedId;
    }
  },
  async created() {
    const pokemonData = await this.getPokemonData();
    this.setPokemonData(pokemonData);
  },

  methods: {
    async getPokemonData() {
      const data = await fetch("https://pokeapi.co/api/v2/pokemon?limit=151");
      const json = await data.json();
      return json.results;
    },
    setEvolutionChain(id) {
      /* eslint-disable no-console */
      console.log(id);
      /* eslint-enable no-console */
      this.pokemonSelectedId = id;
    },
    ...mapActions(["setPokemonData", "addFavorite", "deleteFavorite"])
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#pokecard {
  position: fixed;
  height: 100vh;
  width: calc(30% - 20px);
}
#pokelist-wrapper {
  float: right;
  background: white;
  padding: 10px;
  width: 70%;
  min-height: calc(100vh - 20px);
  border-left: 3px solid #24a068;
}
</style>

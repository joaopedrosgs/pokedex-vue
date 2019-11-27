<template>
  <div class="pokeCard">
    <evolutionNode v-if="pokemonEvolutionChain" :pokeData="pokemonEvolutionChain.chain" />
  </div>
</template>

<script>
import evolutionNode from "../molecules/EvolutionNode";
import { mapState } from "vuex";

export default {
  name: "EvolutionChain",
  components: { evolutionNode },
  props: {
    pokemonId: {
      type: Number,
      required: true
    }
  },
  data: function() {
    return {
      pokemonEvolutionChain: null
    };
  },
  computed: {
    ...mapState(["stateSelectedPokemon"])
  },

  watch: {
    stateSelectedPokemon: async function(newValue) {
      this.pokemonEvolutionChain = await this.loadPokemonEvolutionChain(
        newValue
      );
    }
  },
  async created() {
    this.pokemonEvolutionChain = await this.loadPokemonEvolutionChain(
      this.stateSelectedPokemon
    );
  },
  methods: {
    async loadPokemonEvolutionChain(value) {
      const data = await fetch(
        `http://pokeapi.co/api/v2/pokemon-species/${value}/`
      );
      const result = await data.json();
      const url = result.evolution_chain.url;
      const evolutionChain = await fetch(url);
      return await evolutionChain.json();
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#pokecard {
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
}
</style>

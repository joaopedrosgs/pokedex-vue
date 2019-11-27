<template>
  <div v-if="pokemonData" class="pokeNode" @click="select" @dblclick="favorite">
    <transition name="fade">
      <favoriteOverlay v-if="favoritado" />
    </transition>
    <pokeImage :id="pokemonData.id" />
    <div class="name">{{pokemon.name}}</div>
  </div>
</template>

<script>
import favoriteOverlay from "../atoms/FavoriteOverlay";

import pokeImage from "../atoms/PokeImage";
import { mapActions } from "vuex";

export default {
  name: "PokeNode",
  components: { pokeImage, favoriteOverlay },
  props: {
    pokemon: {
      type: Object,
      required: true
    }
  },
  data: function() {
    return {
      favoritado: false,
      pokemonData: null,
      pokemonDescription: null
    };
  },

  async created() {
    this.pokemonData = await this.getDataSpecificPokemon(this.pokemon.name);
  },
  methods: {
    async getDataSpecificPokemon(name) {
      const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}/`);
      return await data.json();
    },
    ...mapActions(["changeSelected", "addFavorite"]),
    select() {
      this.changeSelected(this.pokemonData.id);
    },
    favorite() {
      if (this.addFavorite(this.pokemon)) {
        this.favoritado = true;
        setTimeout(() => {
          this.favoritado = false;
        }, 1000);
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokeNode {
  position: relative;
  text-align: center;
  padding: 20px;
  border: 1px solid rgba(51, 51, 51, 0.2);
  border-radius: 15px;
  min-width: calc(25% - 62px);
  max-width: calc(50% - 62px);
  margin: 10px;
  background: white;
  box-shadow: 0px 2px 5px rgba(51, 51, 51, 0.1);
  transition: box-shadow 0.1s linear;
  user-select: none;
}
.pokeNode:hover {
  box-shadow: 0px 4px 10px rgba(51, 51, 51, 0.5);
}
.name {
  text-transform: capitalize;
  font-weight: bold;
}
.v-lazy-image {
  filter: blur(10px);
  transition: filter 0.7s;
}
.v-lazy-image-loaded {
  filter: blur(0);
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active em versões anteriores a 2.1.8 */ {
  opacity: 0;
}
</style>

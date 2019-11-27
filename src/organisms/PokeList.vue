<template>
  <div class="pokemonList">
    <searchBar @search="doSearch" @favoriteToggle="toggleFavorite"></searchBar>
    <pokeNode
      v-for="pokemon in paginedPokemon"
      v-bind:key="`${favoritesOnly}${pokemon.name}`"
      :pokemon="pokemon"
    />
    <paginator v-if="numPages!==1" @goTo="changePage" :pageNumber="numPages"></paginator>
  </div>
</template>

<script>
import pokeNode from "../molecules/PokeNode";
import searchBar from "../molecules/SearchBar";
import paginator from "../molecules/Paginator";
import { mapState } from "vuex";

export default {
  name: "PokeList",
  components: { pokeNode, searchBar, paginator },
  data: function() {
    return {
      search: "",
      page: 0,
      itemsPerPage: 25,
      favoritesOnly: false
    };
  },
  props: {
    pokemonList: {
      type: Array,
      required: true
    }
  },

  methods: {
    toggleFavorite(value) {
      this.page = 0;
      this.favoritesOnly = value;
    },
    doSearch(value) {
      this.search = value;
      this.page = 0;
    },
    changePage(value) {
      this.page = value - 1;
    },
    pokemonPaginate() {
      return this.filteredList.slice(
        this.page * this.itemsPerPage,
        this.itemsPerPage * this.page + this.itemsPerPage
      );
    }
  },
  computed: {
    numPages() {
      return Math.ceil(this.filteredList.length / this.itemsPerPage);
    },
    list() {
      if (this.favoritesOnly) {
        return this.stateFavoritePokemon;
      } else {
        return this.pokemonList;
      }
    },

    filteredList() {
      return this.list.filter(pokemon => {
        return pokemon.name.indexOf(this.search.toLowerCase()) !== -1;
      });
    },
    paginedPokemon() {
      return this.pokemonPaginate();
    },
    ...mapState(["stateFavoritePokemon"])
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.pokemonList {
  min-height: 1vw;
  display: flex;
  flex-wrap: wrap;
  justify-items: center;
  padding: 20px;
}
</style>

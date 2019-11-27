<template>
  <div id="search-bar-wrapper">
    <input
      id="search-bar"
      type="text"
      v-on:change="onSearchChanged"
      v-model="search"
      placeholder="Pequise algum pokemon"
    />
    <favoriteSwitch v-on:click="onToggleFavorite" :value="favorite"></favoriteSwitch>
  </div>
</template>

<script>
import favoriteSwitch from "../atoms/FavoriteSwitch";
export default {
  name: "SearchBar",
  props: {},
  data: function() {
    return {
      search: "",
      favorite: false
    };
  },
  components: { favoriteSwitch },
  methods: {
    onToggleFavorite() {
      this.favorite = !this.favorite;
      this.$emit("favoriteToggle", this.favorite);
    },
    onSearchChanged() {
      this.$emit("search", this.search);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#search-bar-wrapper {
  width: 100%;
  margin: 10px;
  display: flex;
  align-items: center;
  line-height: 30px;
  padding: 10px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.2);
}
#search-bar {
  width: 100%;
  line-height: 30px;
  margin: 0 10px;
  border: none;
}
#favoriteCheckbox[type="checkbox"]:checked {
  color: 0.2;
}
#favoriteBox {
  display: flex;
  align-items: center;
}
</style>

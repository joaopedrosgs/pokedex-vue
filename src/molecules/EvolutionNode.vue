<template>
  <div v-if="pokeData">
    <EvolutionNode :pokeData="pokeData.evolves_to[0]" />
    <div class="arrow" v-if="pokeData.evolves_to && pokeData.evolves_to.length ">
      <img src="arrow.png" />
    </div>
    <div class="avatar">
      <pokeImage :id="pokeData.species.url.match(/\d+/g)[1]" />
      <div class="name">{{pokeData.species.name}}</div>
    </div>
  </div>
</template>

<script>
import pokeImage from "../atoms/PokeImage";
export default {
  name: "EvolutionNode",
  components: { pokeImage },
  props: {
    pokeData: Object
  }
};
</script>

<style>
.avatar {
  overflow: hidden;
  border-radius: 50%;
  background: white;
  animation: shown 0.3s linear forwards;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
}
@keyframes shown {
  from {
    width: 0;
    height: 0;
  }
  to {
    width: 10vw;
    height: 10vw;
  }
}
.arrow {
  text-align: center;
  padding: 20px 0px;
}

.name {
  text-align: center;
  font-weight: bold;
  width: 100%;
  padding: 0px 0px 10px 0px;
  color: rgba(0, 0, 0, 0.8);
  text-transform: uppercase;
  text-shadow: 0px -1px 0px rgba(255, 255, 255, 1);
}
</style>
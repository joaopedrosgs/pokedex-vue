<template>
  <v-lazy-image
    :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`"
    alt
    src-placeholder="https://cdn-images-1.medium.com/max/80/1*xjGrvQSXvj72W4zD6IWzfg.jpeg"
  />
</template>

<script>
export default {
  name: "PokeImage",
  props: {
    id: {
      Type: Number,
      required: true
    }
  }
};
</script>

<style>
</style>
<template>
  <a v-on:click="onClick" href="#">
    <slot />
    {{page}}
  </a>
</template>

<script>
export default {
  name: "PaginatorButton",
  props: {
    page: Number
  },
  methods: {
    onClick() {
      this.$emit("buttonSelected", this.page);
    }
  }
};
</script>

<style>
</style>
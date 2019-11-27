<template>
  <div id="paginator">
    <ul>
      <li v-for="page in pageNumber" v-bind:key="page">
        <paginatorButton @buttonSelected="buttonSelected" :page="page"></paginatorButton>
      </li>
    </ul>
  </div>
</template>

<script>
import paginatorButton from "../atoms/PaginatorButton";
export default {
  name: "Paginator",
  components: { paginatorButton },
  props: {
    pageNumber: Number
  },
  methods: {
    buttonSelected(page) {
      this.$emit("goTo", page);
    }
  }
};
</script>

<style>
#paginator {
  width: 100%;
  text-align: center;
  padding-top: 30px;
}
#paginator ul {
  margin: 0;
  padding: 0 30px;
  line-height: 20px;

  list-style: none;
  display: inline-block;

  border-radius: 10px;
}
#paginator ul li {
  display: inline;
}
#paginator ul li a {
  text-decoration: none;
  margin: 0px 10px;
  color: white;
  background: #42b983;
  border-radius: 50%;
  padding: 8px 13px;
  display: inline-block;
  transition: all 400ms linear;
}
#paginator ul li a:hover {
  background: #2edd8d;
  text-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);

  box-shadow: 0px 10px 10px rgba(0, 0, 0, 0.2);
}
#paginator ul li a:active,
#paginator ul li a:visited {
  color: white;
}
</style>
<template>
  <div id="favoriteBox">
    Favoritos
    <div class="onoffswitch">
      <input
        :value="value"
        type="checkbox"
        name="onoffswitch"
        class="switch"
        id="switch"
        v-on:click="click"
      />
      <label class="onoffswitch-label" for="switch"></label>
    </div>
  </div>
</template>

<script>
export default {
  name: "FavoriteSwitch",
  props: {
    value: Boolean
  },
  methods: {
    click() {
      this.$emit("click");
    }
  }
};
</script>

<style>
.onoffswitch {
  position: relative;
  margin-left: 20px;
  width: 55px;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
}
.switch {
  display: none;
}
.onoffswitch-label {
  display: block;
  overflow: hidden;
  cursor: pointer;
  height: 20px;
  padding: 0;
  line-height: 20px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  background-color: #9e9e9e;
  transition: background-color 0.3s ease-in;
}
.onoffswitch-label:before {
  content: "";
  display: block;
  width: 20px;
  margin: 0px;
  background: #eeeeee;
  position: absolute;
  top: 0;
  bottom: 0;
  right: 33px;
  border: 2px solid #ffffff;
  border-radius: 20px;
  transition: all 0.3s ease-in 0s;
}
.switch:checked + .onoffswitch-label {
  background-color: #42a5f5;
}
.switch:checked + .onoffswitch-label,
.switch:checked + .onoffswitch-label:before {
  border-color: #42a5f5;
}
.switch:checked + .onoffswitch-label:before {
  right: 0px;
}
</style>
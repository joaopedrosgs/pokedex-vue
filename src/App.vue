<template>
  <div>
    <Index />
  </div>
</template>

<script>
import Index from "./template/index";

export default {
  name: "app",
  components: {
    Index
  }
};
</script>

<style>
body {
  background: linear-gradient(270deg, #42adb9, #42b983);
  background-size: 400% 400%;

  -webkit-animation: AnimationName 28s ease infinite;
  -moz-animation: AnimationName 28s ease infinite;
  animation: AnimationName 28s ease infinite;

  @-webkit-keyframes AnimationName {
    0% {
      background-position: 91% 0%;
    }
    50% {
      background-position: 10% 100%;
    }
    100% {
      background-position: 91% 0%;
    }
  }
  @-moz-keyframes AnimationName {
    0% {
      background-position: 91% 0%;
    }
    50% {
      background-position: 10% 100%;
    }
    100% {
      background-position: 91% 0%;
    }
  }
  @keyframes AnimationName {
    0% {
      background-position: 91% 0%;
    }
    50% {
      background-position: 10% 100%;
    }
    100% {
      background-position: 91% 0%;
    }
  }
}
html,
body {
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 0;
}
/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: white;
}

/* Handle */
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: white;
  margin: 5px;
  border: 2px solid #555555;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  border: 2px solid #333333;
}
</style>

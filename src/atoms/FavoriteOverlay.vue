<template>
  <div class="liked">
    <span>Adicionado/removido dos favoritos!</span>
  </div>
</template>

<script>
export default {
  name: "FavoriteOverlay"
};
</script>

<style>
.liked {
  position: absolute;
  left: 0px;
  top: 0px;
  display: flex;
  border-radius: 15px;
  justify-content: center;
  z-index: 1;
  height: 100%;
  width: 100%;
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.8) 0%,
    rgba(0, 0, 0, 0.3) 50%
  );
}
.liked span {
  align-self: flex-end;
  margin-bottom: 20px;
  color: white;
}
</style>
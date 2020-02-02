<template>
  <div class="background bg-bluegreen" />
</template>

<script>
export default {
  name: "Background"
};
</script>

<style scoped>
.background {
  position: absolute;
  z-index: -1;
  width: 100%;
  height: 100%;
  /* background-color: #fff; */
}
</style>

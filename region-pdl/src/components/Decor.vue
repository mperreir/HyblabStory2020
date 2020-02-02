<template>
  <div class="decor">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Decor"
};
</script>

<style scoped>
.decor {
  position: absolute;
  width: 100vw;
  height: 100vh;
  overflow-x: hidden;
  overflow-y: hidden;
}
</style>

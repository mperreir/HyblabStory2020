<template>
  <div
    :style="{ width: width + '%', left: x + '%', top: y + '%' }"
    class="innerContent darkblue title"
  >
    <slot />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 100
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  }
};
</script>

<style scoped>
.innerContent {
  position: absolute;
  font-size: 4vh;
  line-height: 5.5vh;
}
</style>

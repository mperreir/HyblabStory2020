<template>
  <div class="carousel">
    <slot />
  </div>
</template>

<script>
  export default {
    data() {
      return {
        slides: []
      }
    },
    mounted () {
      this.slides = this.$children
      // this.slides.forEach((slide, i) => {
      //   slide.index = i
      // })
    }
  }
</script>

<style>
.carousel {
  position: relative;
  height: 100vh;
}
</style>

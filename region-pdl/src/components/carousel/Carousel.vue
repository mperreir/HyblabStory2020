<template>
  <div style="{ overflow: hidden; }">
    <div
      class="blackBand-left"
      :style="bandWidthStyle"
    />
    <div
      ref="carousel"
      class="carousel"
    >
      <slot />
    </div>
    <div
      class="blackBand-right"
      :style="bandWidthStyle"
    />
  </div>
</template>

<script>
  export default {
    data: () => ({
      bandWidthStyle: { width: '100px'},
      slides: []
    }),
    mounted () {
      this.slides = this.$children
      this.updateBandWidth();
    },
    created() {
      window.addEventListener('resize', this.updateBandWidth);
    },
    destroyed() {
      window.removeEventListener('resize', this.updateBandWidth);
    },
    methods: {
      updateBandWidth () {
        this.bandWidthStyle = { width: ((window.innerWidth - this.$refs.carousel.offsetWidth)/2)+1+'px' }
      },
    }
  }
</script>

<style>
.carousel {
  position: relative;
  height: 100vh;
}

.blackBand-left {
  position: absolute;
  left:0;
  top:0;
  height: 100vh;
  background-color: black;
  z-index: 100;
}

.blackBand-right {
  position: absolute;
  right:0;
  top:0;
  height: 100vh;
  background-color: black;
  z-index: 100;
}
</style>

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
    data() {
      return {
        slides: []
      }
    },
    data: () => ({
      bandWidthStyle: { width: '100px'},
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
<<<<<<< HEAD
      updateBandWidth () { 
        this.bandWidthStyle = { width: ((window.innerWidth - this.$refs.carousel.offsetWidth)/2)+1+'px' } 
=======
      updateBandWidth () {
        this.bandWidthStyle = { width: (window.innerWidth - this.$refs.carousel.offsetWidth)/2+'px' }
>>>>>>> 689d046f36714e8957532d201198613d8d2c9f71
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

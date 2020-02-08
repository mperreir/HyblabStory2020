<template>
  <div style="{ overflow: hidden; }">
    <div
      class="black-band black-band-left"
      :style="bandWidthStyle"
    />
    <div
      ref="carousel"
      class="carousel"
    >
      <slot />
    </div>
    <div
      class="black-band black-band-right"
      :style="bandWidthStyle"
    />
  </div>
</template>

<script>
export default {
  data: () => ({
    bandWidthStyle: { width: "100px" },
    slides: []
  }),
  mounted() {
    this.slides = this.$children;
    this.updateBandWidth();
  },
  created() {
    window.addEventListener("resize", this.updateBandWidth);
  },
  destroyed() {
    window.removeEventListener("resize", this.updateBandWidth);
  },
  methods: {
    updateBandWidth() {
      this.bandWidthStyle = {
        width:
          (window.innerWidth - this.$refs.carousel.offsetWidth) / 2 + 1 + "px"
      };
    }
  }
};
</script>

<style>
.carousel {
  position: relative;
  height: 100vh;
}

.black-band {
  /* position: absolute; */
  position: fixed;
  top: 0;
  height: 100vh;
  background-color: black;
  z-index: 100;

}

.black-band-left {
  left: 0;
}

.black-band-right {
  right: 0;
}
</style>

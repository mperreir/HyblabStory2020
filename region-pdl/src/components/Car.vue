<template>
  <div>
    <CarSVG class="car-svg" />
    <WheelSVG class="wheel" :class="{moving: moving}" style="left: 31.1%" />
    <WheelSVG class="wheel" :class="{moving: moving}" style="left: 56.7%" />
  </div>
</template>

<script>
import CarSVG from "@/assets/Car/car-body.svg";
import WheelSVG from "@/assets/Car/wheel.svg";

export default {
  components: {
    WheelSVG,
    CarSVG
  },
  props: ['moving'],
  data: () => ({}),
  methods: {}
};
</script>

<style scoped>
.car-svg {
  position: absolute;
  width: 37%;
  left: 30%;
  top: 70%;
  z-index: 3;
}

.wheel {
  position: absolute;
  top: 84.5%;
  width: 7%;
  z-index: 4;
}

.moving {
  animation: rotating 2s linear infinite;
  -webkit-animation: rotating 2s linear infinite;
  -moz-animation: rotating 2s linear infinite;
  -ms-animation: rotating 2s linear infinite;
  -o-animation: rotating 2s linear infinite;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
  to {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
}
</style>

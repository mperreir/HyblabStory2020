<template>
  <div>
    <CarSVG class="car-svg " :class="{rollingOut: rollingOut}"/>
    <WheelSVG class="wheel left-wheel" :class="{moving: moving, rollingOutLeft: rollingOut}" />
    <WheelSVG class="wheel right-wheel" :class="{moving: moving, rollingOutRight: rollingOut}" />
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
  props: ['moving', 'rollingOut'],
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

  transition: left 5s linear;
}

.wheel {
  position: absolute;
  top: 84.5%;
  width: 7%;
  z-index: 4;

  transition: left 5s linear;
}

.left-wheel {
  left: 31.1%;
}

.right-wheel {
  left: 56.7%;
}

.moving {
  animation: rotating 1.6s linear infinite reverse;
  -webkit-animation: rotating 1.6s linear infinite reverse;
  -moz-animation: rotating 1.6s linear infinite reverse;
  -ms-animation: rotating 1.6s linear infinite reverse;
  -o-animation: rotating 1.6s linear infinite reverse;
}

.rollingOut {
  left: 100%;
}

.rollingOutLeft {
  left: 101%;
}

.rollingOutRight {
  left: 127%;
}

@-webkit-keyframes rotating /* Safari and Chrome */ {
  from {
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}

@keyframes rotating {
  from {
    -ms-transform: rotate(360deg);
    -moz-transform: rotate(360deg);
    -webkit-transform: rotate(360deg);
    -o-transform: rotate(360deg);
    transform: rotate(360deg);
  }
  to {
    -ms-transform: rotate(0deg);
    -moz-transform: rotate(0deg);
    -webkit-transform: rotate(0deg);
    -o-transform: rotate(0deg);
    transform: rotate(0deg);
  }
}
</style>

<template>
  <div>
    <CarGirlSVG
      v-if="getCharacterGender === 'mme'"
      class="car-svg"
      :class="{rollingOut: rollingOut}"
    />
    <CarBoySVG
      v-else
      class="car-svg"
      :class="{rollingOut: rollingOut}"
    />
    <WheelSVG
      class="wheel left-wheel"
      :class="{moving: moving, rollingOutLeft: rollingOut}"
    />
    <WheelSVG
      class="wheel right-wheel"
      :class="{moving: moving, rollingOutRight: rollingOut}"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CarBoySVG from '@/assets/svg/Car/car-boy.svg';
import CarGirlSVG from '@/assets/svg/Car/car-girl.svg';
import WheelSVG from '@/assets/svg/Car/wheel.svg';

export default {
  components: {
    WheelSVG,
    CarGirlSVG,
    CarBoySVG
  },
  props: ['moving', 'rollingOut'],
  computed: {
    ...mapGetters(['getCharacterGender'])
  }
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

.car-svg-boy {
  width: 40%;
  left: 28.5%;
  top: 67%;
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
  -webkit-animation: rotating 3s linear infinite reverse;
  -moz-animation: rotating 3s linear infinite reverse;
  -ms-animation: rotating 3s linear infinite reverse;
  animation: rotating 3s linear infinite reverse;
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

@-webkit-keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-moz-keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-ms-keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes rotating {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

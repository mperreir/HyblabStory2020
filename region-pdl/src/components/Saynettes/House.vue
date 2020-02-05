<template>
  <div class="saynette">
    <Background class="svg" />
    <transition name="bounce">
      <LittleHouse
        v-show="indexHouse == 1"
        class="little"
      />
    </transition>
    <transition name="bounce">
      <MediumHouse
        v-show="indexHouse == 2"
        class="medium"
      />
    </transition>
    <transition name="bounce">
      <BigHouse
        v-show="indexHouse == 3"
        class="big"
      />
    </transition>
    <Slider
      class="slider"
      @input="onChange"
    />
    <!-- <ul>
      <li>
        <PlusButton class="plus1" @open="closePopover(1)" v-model="closePopover1">
          <p class="text">1. Ceci est une information sur la transition énergétique</p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus2" @open="closePopover(2)" v-model="closePopover2">
          <p class="text">2. Ceci est une information sur la transition énergétique</p>
        </PlusButton>
      </li>
    </ul> -->
  </div>
</template>

<script>
import Background from "@/assets/House/background-house.svg";
import LittleHouse from "@/assets/House/little-house.svg";
import MediumHouse from "@/assets/House/medium-house.svg";
import BigHouse from "@/assets/House/big-house.svg";
import Slider from "@/components/Slider.vue";

export default {
  name: "House",
  components: {
    Background,
    LittleHouse,
    MediumHouse,
    BigHouse,
    Slider,
  },
  data: () => ({
    indexHouse: 1,
    closePopover1: false,
    closePopover2: false
  }),
  methods: {
    onChange(value) {
      this.indexHouse = value;
    },
    closePopover(i) {
      switch (i) {
        case 1:
          this.closePopover1 = false;
          this.closePopover2 = true;
          this.closePopover3 = true;
          break;
        case 2:
          this.closePopover2 = false;
          this.closePopover1 = true;
          this.closePopover3 = true;
          break;
        case 3:
          this.closePopover3 = false;
          this.closePopover1 = true;
          this.closePopover2 = true;
          break;
      }
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

.little {
  position: absolute;
  width: 30%;
  top: 68%;
  left: 35%;
}

.medium {
  position: absolute;
  width: 30%;
  top: 65%;
  left: 35%;
}

.big {
  position: absolute;
  width: 50%;
  top: 65%;
  left: 25%;
}

.slider {
  position: absolute;
  top: 90%;
  left: 33%;
  display: flex;
  flex-direction: column;
}

ul li {
  position: absolute;
  top: 0;
  left: 0;
}

ul li .plus1 {
  position: relative;
  top: 20vh;
  left: 14vw;
}

ul li .plus2 {
  position: relative;
  top: 38vh;
  left: 26vw;
}

ul li .plus3 {
  position: relative;
  top: 30vh;
  left: 40vw;
}

.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@-webkit-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@-ms-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

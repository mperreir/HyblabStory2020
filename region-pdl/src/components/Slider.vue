<template>
  <div>
    <p class="text size">
      {{ 50 * value }}m²
    </p>
    <div class="slider">
      <Moins
        class="button"
        :class="{'spinnin-minus': spinninMinus, minus: clickableMinus}"
        @click="minusClick"
      />
      <input
        v-model="value"
        type="range"
        min="1"
        max="3"
        @input="onValueChange"
      >
      <Plus
        class="button"
        :class="{'spinnin-plus': spinninPlus, plus: clickablePlus}"
        @click="plusClick"
      />
    </div>
  </div>
</template>

<script>
import Moins from "@/assets/Slider/minus.svg";
import Plus from "@/assets/Slider/plus.svg";

export default {
  name: "Slider",
  components: {
    Moins,
    Plus
  },
  data: () => ({
    value: 1,
    spinninMinus: false,
    spinninPlus: false,
    clickableMinus: true,
    clickablePlus: true
  }),
  created: function() {
    this.onValueChange();
  },
  methods: {
    onValueChange() {
      this.$emit("input", this.value);

      if (this.value > 1) {
        this.clickableMinus = true;
      } else {
        this.clickableMinus = false;
      }

      if (this.value < 3) {
        this.clickablePlus = true;
      } else {
        this.clickablePlus = false;
      }
    },
    minusClick() {
      if (this.value > 1) {
        this.value--;
        this.spinninMinus = true;
      }

      setTimeout(() => {
        this.spinninMinus = false;
      }, 200);

      this.onValueChange();
    },
    plusClick() {
      if (this.value < 3) {
        this.value++;
        this.spinninPlus = true;
      }

      setTimeout(() => {
        this.spinninPlus = false;
      }, 200);

      this.onValueChange();
    }
  }
};
</script>

<style scoped>
.slider {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.size {
  margin: 0;
}

.button {
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 45%;
  fill: #00324e;
}

.plus:hover,
.minus:hover {
  opacity: 0.5;
  cursor: pointer;
}

input[type="range"] {
  -webkit-appearance: none;
  background-color: #00324e;
  height: 0.5vh;
  border-radius: 5px;
  margin: 0 2vh;
  width: 40vh;
}

input[type="range"]:focus {
  outline: none;
}

input[type="range"]::-moz-focus-outer {
  border: 0;
}

input[type="range"]::-moz-range-thumb {
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 50%;
  cursor: pointer;
  background-image: radial-gradient(#f31512 50%, #f99a04 75%);
  /* box-shadow: 2px 2px 1px rgba(0, 0, 0, 0.5); */
  border: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 50%;
  cursor: pointer;
  background-image: radial-gradient(#f31512 50%, #f99a04 75%);
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.5);
  border: none;
}

input[type="range"]::-ms-thumb {
  width: 20px;
  background: #f99a04;
  cursor: pointer;
  height: 40px;
  border: none;
}

.spinnin-plus {
  animation: spin-plus 0.2s cubic-bezier(0.8, 0.2, 0.6, 0.8);
}

.spinnin-minus {
  animation: spin-minus 0.2s cubic-bezier(0.8, 0.2, 0.6, 0.8);
}

@-webkit-keyframes spin-plus {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-moz-keyframes spin-plus {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-ms-keyframes spin-plus {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin-plus {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes spin-minus {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-moz-keyframes spin-minus {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@-ms-keyframes spin-minus {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
@keyframes spin-minus {
  from {
    transform: rotate(360deg);
  }
  to {
    transform: rotate(0deg);
  }
}
</style>

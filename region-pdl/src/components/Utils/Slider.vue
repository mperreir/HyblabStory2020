<template>
  <div>
    <div class="slider">
      <Minus class="button minus" :class="{clickable: clickableMinus}" @click="minusClick" />
      <input v-model="value" type="range" min="1" max="3" @input="onValueChange" />
      <Plus class="button plus" :class="{clickable: clickablePlus}" @click="plusClick" />
    </div>
  </div>
</template>

<script>
import Minus from "@/assets/svg/Utils/minus-slider.svg";
import Plus from "@/assets/svg/Utils/plus-slider.svg";

export default {
  name: "Slider",
  components: {
    Minus,
    Plus
  },
  data: () => ({
    value: 1,
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
      }

      this.onValueChange();
    },
    plusClick() {
      if (this.value < 3) {
        this.value++;
      }

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

.button {
  cursor: default;
  fill: #00324e;
  width: 3vh;
}

.clickable:hover {
  opacity: 0.5;
  cursor: pointer;
}

input[type="range"] {
  -webkit-appearance: none;
  background-color: #00324e;
  height: 0.6vh;
  margin: 0 3vh;
  width: 45vh;
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
  background: #fff;
  border: none;
}

input[type="range"]::-webkit-slider-thumb {
  -webkit-appearance: none;
  height: 2.5vh;
  width: 2.5vh;
  border-radius: 50%;
  cursor: pointer;
  background: #fff;
  border: none;
}
</style>

<template>
  <div
    class="classic-btn bg-darkblue"
    :style="{width: width+'%', left: x+'%', top: y+'%'}"
    @click="onClick"
  >
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
import { Howl } from "howler";

export default {
  props: {
    text: {
      type: String,
      default: "Click me !"
    },
    width: {
      type: Number,
      default: 100
    },
    x: {
      type: Number,
      default: 0
    },
    y: {
      type: Number,
      default: 0
    }
  },
  mounted() {
    this.clickSound = new Howl({
      src: ["sounds/click.mp3"],
      volume: 0.2
    });
  },
  methods: {
    onClick() {
      this.clickSound.play();
    }
  }
};
</script>

<style scoped>
.text {
  margin-top: 6%;
  margin-bottom: 6%;
  font-size: 2.2vh;
  user-select: none;
}

.classic-btn {
  position: absolute;
  border-radius: 1vh;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
}

.classic-btn:hover {
  background-color: #015787;
  cursor: pointer;
}
</style>

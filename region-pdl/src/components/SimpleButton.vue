<template>
  <div class="classic-btn bg-darkblue" :style="{width: width+'%', left: x+'%', top: y+'%'}">
    <div class="text">{{ text }}</div>
  </div>
</template>

<script>
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
  border-radius: 10px 10px;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  border: 2px solid #fff;
}

.classic-btn:hover {
  background-color: #015787;
  cursor: pointer;
}
</style>

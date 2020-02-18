<template>
  <div
    class="classic-btn bg-darkblue"
    :style="{ width: width + '%', height: height + '%', left: x + '%', top: y + '%' }"
  >
    <div
      :class="{ 'cursor-toggle': true, 'bg-lightgrey': !state, on: state, 'bg-lightblue': state }"
      @click="toggleOn"
    >
      <span
        :class="{ text: true, adaptiveText: true, darkblue: !state, lightgrey: state }"
      >{{ state === true ? "ON" : "OFF" }}</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 15
    },
    height: {
      type: Number,
      default: 5
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
  data: () => ({
    state: false
  }),
  methods: {
    toggleOn () {
      this.state = true;
      this.$emit('toggle');
    }
  }
};
</script>

<style scoped>
.adaptiveText {
  font-size: 2.5vh;
  transform: translateY(5%);
}

.classic-btn {
  color: #fff;
  position: absolute;
  border-radius: 0.3vh;
  text-align: center;
}

.cursor-toggle {
  user-select: none;
  position: absolute;
  width: 50%;
  height: 80%;
  border-radius: 0.3vh;
  left: 5%;
  top: 10%;
  transition: background-color 1s ease, left 1s ease;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.on {
  left: 45%;
  user-select: none;
}

.onText {
  color: #fff;
}
</style>

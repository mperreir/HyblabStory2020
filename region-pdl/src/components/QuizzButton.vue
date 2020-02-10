<template>
  <div
    class="quizz-button"
    :class="{ 'bg-lightblue': answer !== 'vrai' && selected, 'bg-darkblue': answer !== 'vrai' && !selected, 'bg-green': answer === 'vrai' && selected, 'bg-lightgreen': answer === 'vrai' && !selected }"
    :style="{ selected: selected, answer: '' }"
  >
    <div class="text">
      {{ text }}
    </div>
  </div>
</template>

<script>
export default {
  props: {
    text: {
      type: String,
      default: "Click me !"
    },
    answer: {
      type: String,
      default: "waiting"
    },
    selected: {
      type: Boolean,
      default: false
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

.quizz-button {
  border-radius: 1vh;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  width: 22vh;
}

.quizz-button:hover {
  opacity: 0.8;
  cursor: pointer;
}
</style>

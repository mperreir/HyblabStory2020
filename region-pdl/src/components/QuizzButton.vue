<template>
    <div :class="{ classicbtn:answer==='waiting',lightgreen:answer==='vrai'&&selected , green:answer==='vrai'&& !selected,'bg-lightblue': selected, 'bg-darkblue':!selected,}"
     :style="{selected: selected, answer: '', width: width+'%', left: x+'%', top: y+'%'}">
      <div class="text">{{ text }}</div>
    </div>
</template>

<script>
export default {

  data: () => ({
  }),

  methods: {
  },

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
    },
    answer: {
      type: String,
      default: 'waiting'
    },
    selected: {
      type: Boolean,
      default: false
    }
  },
  watch: {
  answer: {
    function (val, oldVal) {
      console.log('Prop changed: ', val, ' | was: ', oldVal)
    },
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

.classicbtn {
  position: absolute;
  border-radius: 1vh;
  text-transform: uppercase;
  text-align: center;
  color: #fff;
  /*border: 0.3vh solid #fff;*/
}

.classicbtn:hover {
  background-color: #015787;
  cursor: pointer;
}

.lightgreen {
  position: absolute;
  border-radius: 1vh;
  text-transform: uppercase;
  text-align: center;
  color:ivory;
  background-color: #88B309;
  /*border: 0.3vh solid #fff;*/
}
.lightgreen:hover {
  background-color: #B7DF41;
  cursor: pointer;
}

.green {
  position: absolute;
  border-radius: 1vh;
  text-transform: uppercase;
  text-align: center;
  color:ivory;
  background-color: #598104;
  /*border: 0.3vh solid #fff;*/
}

.green:hover {
  background-color: #B7DF41;
  cursor: pointer;
}
</style>

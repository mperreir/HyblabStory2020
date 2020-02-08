<template>
  <div>
    <div class="progress-line bg-darkblue">
      <div class="percentage bg-yellow" :style="{'width': percentage + '%'}" />
    </div>
    <div class="progress">
      <div
        v-for="n in number"
        :key="n"
        class="dot"
        :class="{'current bg-lightgreen': n === index && animCurrent, 'bg-yellow': n < index, 'bg-blue': n > index || (!animCurrent && n === index)}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    number: Number
  },
  data: () => {
    return {
      percentage: 0,
      index: 1,
      animCurrent: true,
      transition: false
    };
  },
  watch: {
    index: function() {
      this.animCurrent = false;

      let newPercentage = ((this.index - 1) / (this.number - 1)) * 100;

      setInterval(() => {
        if (
          newPercentage > 0 &&
          newPercentage <= 100 &&
          this.percentage < newPercentage
        ) {
          this.percentage += 0.2;
          this.transition = true;
        }
      }, 25);
    },
    percentage: function() {
      if (this.percentage > ((this.index - 1) / (this.number - 1)) * 100 - 2) {
        this.animCurrent = true;
      }
    },
    "$store.state.currentSceneIndex": function() {
      this.index++;
    }
  }
};
</script>

<style scoped>
.progress {
  position: absolute;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  top: 3vh;
  margin-left: 45vh;
  height: 5vh;
  width: 40vh;
  align-items: center;
}

.progress-line {
  position: absolute;
  top: 5.3vh;
  margin-left: 46vh;
  height: 0.35vh;
  width: 38.5vh;
}

.percentage {
  height: 100%;
  left: 0;
}

.dot {
  height: 1.5vh;
  width: 1.5vh;
  border-radius: 50%;
  animation: animation-dot-reverse 0.4s linear;
}

.current {
  height: 2vh;
  width: 2vh;
  animation: animation-dot 0.4s linear;
}

@-webkit-keyframes animation-dot-reverse {
  from {
    height: 2vh;
    width: 2vh;
  }
  to {
    height: 1.5vh;
    width: 1.5vh;
  }
}
@-moz-keyframes animation-dot-reverse {
  from {
    height: 2vh;
    width: 2vh;
  }
  to {
    height: 1.5vh;
    width: 1.5vh;
  }
}
@-ms-keyframes animation-dot-reverse {
  from {
    height: 2vh;
    width: 2vh;
  }
  to {
    height: 1.5vh;
    width: 1.5vh;
  }
}
@keyframes animation-dot-reverse {
  from {
    height: 2vh;
    width: 2vh;
  }
  to {
    height: 1.5vh;
    width: 1.5vh;
  }
}

@-webkit-keyframes animation-dot {
  from {
    height: 1.5vh;
    width: 1.5vh;
  }
  to {
    height: 2vh;
    width: 2vh;
  }
}
@-moz-keyframes animation-dot {
  from {
    height: 1.5vh;
    width: 1.5vh;
  }
  to {
    height: 2vh;
    width: 2vh;
  }
}
@-ms-keyframes animation-dot {
  from {
    height: 1.5vh;
    width: 1.5vh;
  }
  to {
    height: 2vh;
    width: 2vh;
  }
}
@keyframes animation-dot {
  from {
    height: 1.5vh;
    width: 1.5vh;
  }
  to {
    height: 2vh;
    width: 2vh;
  }
}
</style>

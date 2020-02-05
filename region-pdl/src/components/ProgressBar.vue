<template>
  <div>
    <div class="progress-line bg-darkblue">
      <div
        class="percentage bg-yellow"
        :style="{'width': percentage + '%'}"
      />
    </div>
    <div class="progress">
      <div
        v-for="n in number"
        :key="n"
        class="dot"
        :class="{current: n === index && animCurrent, 'bg-green': n === index && animCurrent, 'bg-blue': !animCurrent || n !== index}"
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
      animCurrent: true
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
        }
      }, 15);
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
  top: 8vh;
  margin-left: 20vh;
  height: 6vh;
  width: 100vh;
  align-items: center;
}

.progress-line {
  position: absolute;
  top: 10.5vh;
  margin-left: 22vh;
  height: 1vh;
  width: 96vh;
}

.percentage {
  height: 100%;
  left: 0;
}

.dot {
  height: 4vh;
  width: 4vh;
  border-radius: 50%;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.5);
  animation: animation-dot-reverse 0.4s linear;
}

.current {
  height: 6vh;
  width: 6vh;
  animation: animation-dot 0.4s linear;
}

@-webkit-keyframes animation-dot-reverse {
  from {
    height: 6vh;
    width: 6vh;
  }
  to {
    height: 4vh;
    width: 4vh;
  }
}
@-moz-keyframes animation-dot-reverse {
  from {
    height: 6vh;
    width: 6vh;
  }
  to {
    height: 4vh;
    width: 4vh;
  }
}
@-ms-keyframes animation-dot-reverse {
  from {
    height: 6vh;
    width: 6vh;
  }
  to {
    height: 4vh;
    width: 4vh;
  }
}
@keyframes animation-dot-reverse {
  from {
    height: 6vh;
    width: 6vh;
  }
  to {
    height: 4vh;
    width: 4vh;
  }
}

@-webkit-keyframes animation-dot {
  from {
    height: 4vh;
    width: 4vh;
  }
  to {
    height: 6vh;
    width: 6vh;
  }
}
@-moz-keyframes animation-dot {
  from {
    height: 4vh;
    width: 4vh;
  }
  to {
    height: 6vh;
    width: 6vh;
  }
}
@-ms-keyframes animation-dot {
  from {
    height: 4vh;
    width: 4vh;
  }
  to {
    height: 6vh;
    width: 6vh;
  }
}
@keyframes animation-dot {
  from {
    height: 4vh;
    width: 4vh;
  }
  to {
    height: 6vh;
    width: 6vh;
  }
}
</style>

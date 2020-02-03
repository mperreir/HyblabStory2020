<template>
  <div>
    <div class="progress-line bg-lightgrey">
      <div
        class="percentage bg-orange"
        :style="{'height': percentage + '%'}"
      />
    </div>
    <div class="progress">
      <div
        v-for="n in number"
        :key="n"
        class="dot"
        :class="{current: n === index, 'bg-green': n === index, 'bg-darkblue': n !== index}"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "ProgressBar",
  props: {
    number: Number,
    index: Number
  },
  data: () => {
    return {
      percentage: 0
    };
  },
  watch: {
    index: function() {
      let newPercentage = ((this.index - 1) / (this.number - 1)) * 100;

      setInterval(() => {
        if (
          newPercentage > 0 &&
          newPercentage <= 100 &&
          this.percentage < newPercentage
        ) {
          this.percentage += 0.2;
        }
      }, 1);
    }
  }
};
</script>

<style scoped>
.progress {
  position: absolute;
  display: flex;
  flex-direction: column-reverse;
  justify-content: space-between;
  top: 10vh;
  left: 10vh;
  height: 45vh;
  width: 6vh;
  align-items: center;
}

.progress-line {
  position: absolute;
  top: 12vh;
  left: 12.5vh;
  height: 40vh;
  width: 1vh;
}

.percentage {
  width: 100%;
  bottom: 0;
  position: absolute;
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

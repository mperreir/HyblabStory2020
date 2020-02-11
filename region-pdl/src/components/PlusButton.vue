<template>
  <div class="plus-button">
    <span class="qs">
      <Plus class="plus" :class="{ spinnin: popover, pulse: pulse }" @click="plusOnClick" />
      <span
        v-if="popover"
        class="text"
        :class="{ popover: popover }"
        :style="{ width: width + 'vh'}"
      >
        <slot />
      </span>
    </span>
  </div>
</template>

<script>
import { Howl } from "howler";

import Plus from "@/assets/plus.svg";

export default {
  name: "PlusButton",
  components: {
    Plus
  },
  props: ["value", "width"],
  data: () => ({
    popover: false,
    pulse: true
  }),
  watch: {
    value: function(oldValue, newValue) {
      if (newValue === false) {
        this.close();
      }
    }
  },
  methods: {
    plusOnClick() {
      this.popover = !this.popover;

      this.clickSound.play();

      if (this.pulse === true) {
        this.pulse = false;
      }

      if (this.popover === true) {
        this.$emit("open");
      }
    },
    close() {
      if (this.popover === true) {
        this.popover = false;
      }
    }
  },
  mounted() {
    this.clickSound = new Howl({
      src: ["sounds/click-swoosh.mp3"],
      volume: 0.1
    });
  }
};
</script>

<style scoped>
.plus-button {
  position: absolute;
}

.plus {
  flex-wrap: wrap;
  position: absolute;
  border-radius: 1vh;
  width: 5vh;
  border: 0.3vh solid #fff;
}

.plus:hover {
  cursor: pointer;
}

.qs {
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.qs .popover {
  opacity: 0.9;
  bottom: 2vh;
  font-size: 2.2vh;
  border-radius: 0.5vh;
  padding: 1vh 2vh;
  background-color: #fff;
  position: absolute;
  text-align: center;
  -webkit-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  -moz-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  -ms-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
}

.qs .popover::before {
  border-top: 1vh solid #fff;
  border-right: 0.8vh solid transparent;
  border-left: 0.8vh solid transparent;
  bottom: -0.8vh;
  content: "";
  left: 50%;
  margin-left: -0.8vh;
  position: absolute;
}

.spinnin {
  -webkit-animation: spin 0.3s cubic-bezier(0.8, 0.2, 0.6, 0.8);
  -moz-animation: spin 0.3s cubic-bezier(0.8, 0.2, 0.6, 0.8);
  -ms-animation: spin 0.3s cubic-bezier(0.8, 0.2, 0.6, 0.8);
  animation: spin 0.3s cubic-bezier(0.8, 0.2, 0.6, 0.8);
}

.pulse {
  box-shadow: 0 0 0 0 #00324e;
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}

@-webkit-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-moz-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@-ms-keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}
@keyframes fade-in {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

@-webkit-keyframes move-up {
  from {
    bottom: -2vh;
  }
  to {
    bottom: 2vh;
  }
}
@-moz-keyframes move-up {
  from {
    bottom: -2vh;
  }
  to {
    bottom: 2vh;
  }
}
@-ms-keyframes move-up {
  from {
    bottom: -2vh;
  }
  to {
    bottom: 2vh;
  }
}
@keyframes move-up {
  from {
    bottom: -2vh;
  }
  to {
    bottom: 2vh;
  }
}

@-webkit-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-moz-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@-ms-keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@-webkit-keyframes pulse {
  to {
    box-shadow: 0 0 0 2vh rgba(61, 115, 232, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 2vh rgba(61, 115, 232, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 2vh rgba(61, 115, 232, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 2vh rgba(61, 115, 232, 0);
  }
}
</style>

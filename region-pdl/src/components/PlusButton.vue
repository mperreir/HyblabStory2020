<template>
  <div class="plus-button">
    <span class="qs">
      <Plus
        class="plus"
        v-on:click="plusOnClick"
        v-bind:class="{ spinnin: popover, pulse: pulse }"
      />
      <span
        class="bg-darkblue cream"
        v-if="popover"
        v-bind:class="{ popover: popover }"
      >{{ popoverText }}</span>
    </span>
  </div>
</template>

<script>
import Plus from "@/assets/plus.svg";

export default {
  components: {
    Plus
  },
  name: "PlusButton",
  props: {
    popoverText: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    popover: false,
    pulse: true
  }),
  methods: {
    plusOnClick() {
      this.popover = !this.popover;

      if (this.pulse === true) this.pulse = false;
    },
    outsideOnClick() {}
  }
};
</script>

<style scoped>
.plus-button {
  position: absolute;
}

.plus {
  height: 6vh;
  width: 6vh;
  border-radius: 50%;
}

.plus:hover {
  cursor: pointer;
}

.spinnin {
  animation: spin 0.3s cubic-bezier(0.8, 0.2, 0.6, 0.8);
}

.pulse {
  box-shadow: 0 0 0 0 rgb(61, 115, 232);
  -webkit-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -moz-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  -ms-animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
  animation: pulse 1.25s infinite cubic-bezier(0.66, 0, 0, 1);
}

.qs .popover {
  opacity: 0.95;
  font-weight: bold;
  border-radius: 5px;
  bottom: 80px;
  box-shadow: 2px 2px 1.5px rgba(0, 0, 0, 0.3);
  font-size: 25px;
  left: -117px;
  padding: 30px 20px;
  position: absolute;
  width: 250px;
  text-align: center;
  display: block;
  -webkit-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  -moz-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  -ms-animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
  animation: fade-in 0.2s linear 1, move-up 0.2s linear 1;
}

.qs .popover::before {
  border-top: 7px solid #2c4068;
  border-right: 7px solid transparent;
  border-left: 7px solid transparent;
  bottom: -7px;
  content: "";
  left: 50%;
  margin-left: -7px;
  position: absolute;
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
    bottom: 70px;
  }
  to {
    bottom: 80px;
  }
}
@-moz-keyframes move-up {
  from {
    bottom: 70px;
  }
  to {
    bottom: 80px;
  }
}
@-ms-keyframes move-up {
  from {
    bottom: 70px;
  }
  to {
    bottom: 80px;
  }
}
@keyframes move-up {
  from {
    bottom: 70px;
  }
  to {
    bottom: 80px;
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
    box-shadow: 0 0 0 20px;
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 20px rgba(61, 115, 232, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 20px rgba(61, 115, 232, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 20px rgba(61, 115, 232, 0);
  }
}
</style>
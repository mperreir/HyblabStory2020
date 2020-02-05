<template>
  <div class="plus-button">
    <span class="qs">
      <Plus
        class="plus"
        :class="{ spinnin: popover, pulse: pulse }"
        @click="plusOnClick"
      />
      <span
        v-if="popover"
        class="bg-yellow-orange lightgrey"
        :class="{ popover: popover }"
      >
        <slot />
      </span>
    </span>
  </div>
</template>

<script>
import Plus from "@/assets/plus.svg";

export default {
  name: "PlusButton",
  components: {
    Plus
  },
  props: ["value"],
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
  }
};
</script>

<style scoped>
.plus-button {
  position: absolute;
}

.plus {
  height: 3vw;
  max-width: auto;
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
  font-size: 25px;
  left: -117px;
  padding: 0 20px;
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
  border-top: 7px solid #faaf04;
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
    box-shadow: 0 0 0 1.5vw rgba(61, 115, 232, 0);
  }
}
@-moz-keyframes pulse {
  to {
    box-shadow: 0 0 0 1.5vw rgba(61, 115, 232, 0);
  }
}
@-ms-keyframes pulse {
  to {
    box-shadow: 0 0 0 1.5vw rgba(61, 115, 232, 0);
  }
}
@keyframes pulse {
  to {
    box-shadow: 0 0 0 1.5vw rgba(61, 115, 232, 0);
  }
}
</style>

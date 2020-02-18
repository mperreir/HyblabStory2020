<template>
  <transition name="slide">
    <div
      v-show="visible"
      class="carouselSlide"
    >
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    index: {
      type: Number,
      default: 0
    }
  },
  computed: {
    visible () {
      return this.index === this.$store.state.currentSceneIndex;
    }
  }
};
</script>

<style>
.carouselSlide {
  height: 100%;
}

.slide-enter-active {
  -webkit-animation: slideIn 3s;
  -moz-animation: slideIn 3s;
  -ms-animation: slideIn 3s;
  animation: slideIn 3s;
  pointer-events: none;
}

.slide-leave-active {
  -webkit-animation: slideOut 3s;
  -moz-animation: slideOut 3s;
  -ms-animation: slideOut 3s;
  animation: slideOut 3s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

@-webkit-keyframes slideIn {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-ms-keyframes slideIn {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@-moz-keyframes slideIn {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}
@keyframes slideIn {
  from {
    -webkit-transform: translateX(100%);
    transform: translateX(100%);
  }
  to {
    -webkit-transform: translateX(0%);
    transform: translateX(0%);
  }
}

@-webkit-keyframes slideOut {
  from {
    -webkit-transform: translateX(0.1%);
    transform: translateX(0.1%);
  }
  to {
    -webkit-transform: translateX(-99.9%);
    transform: translateX(-99.9%);
  }
}
@-ms-keyframes slideOut {
  from {
    -webkit-transform: translateX(0.1%);
    transform: translateX(0.1%);
  }
  to {
    -webkit-transform: translateX(-99.9%);
    transform: translateX(-99.9%);
  }
}
@-moz-keyframes slideOut {
  from {
    -webkit-transform: translateX(0.1%);
    transform: translateX(0.1%);
  }
  to {
    -webkit-transform: translateX(-99.9%);
    transform: translateX(-99.9%);
  }
}
@keyframes slideOut {
  from {
    -webkit-transform: translateX(0.1%);
    transform: translateX(0.1%);
  }
  to {
    -webkit-transform: translateX(-99.9%);
    transform: translateX(-99.9%);
  }
}
</style>

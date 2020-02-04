<template>
  <div @click="click()">
    <Carousel>
      <CarouselSlide :index="0">
        <Intro />
      </CarouselSlide>
      <CarouselSlide :index="1">
        <House />
      </CarouselSlide>
    </Carousel>
  </div>
</template>

<script>
import Intro from "@/components/Saynettes/Intro";
import House from "@/components/Saynettes/House";
import Carousel from "@/components/carousel/Carousel";
import CarouselSlide from "@/components/carousel/CarouselSlide";
import { Scenes } from "@/utils/scenes.js";

export default {
  name: "Views",
  components: {
    Intro,
    House,
    Carousel,
    CarouselSlide
  },
  data: () => ({
    Scenes: Scenes
  }),
  computed: {
    currentScene() {
      return this.$store.state.currentScene;
    }
  },
  methods: {
    click() {
      this.$store.dispatch("nextScene", { sceneId: 1 });
    }
  }
};
</script>

<style scoped>
.mainScene {
  text-align: center;
  margin: auto;
  height: 100vh;
}

.swipe-enter-active,
.swipe-leave-active {
  transition: 1s;
  transform: translateX(50%);
}
.swipe-enter, .swipe-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transition: 1s;
  transform: translateX(-50%);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

/* Enter and leave animations can use different */
/* durations and timing functions.              */
.slide-fade-enter-active {
  transition: all 0.3s ease;
}
.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  transform: translateX(10px);
  opacity: 0;
}
</style>

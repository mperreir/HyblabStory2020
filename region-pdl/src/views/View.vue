<template>
  <div>
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
    <ProgressBar v-bind:number="4" v-bind:index="1"/>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
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
    CarouselSlide,
    ProgressBar
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
</style>

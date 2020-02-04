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
</style>

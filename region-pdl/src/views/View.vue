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
    <ProgressBar v-bind:number="4" />
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import Intro from "@/components/Saynettes/Intro.vue";
import House from "@/components/Saynettes/House.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import CarouselSlide from "@/components/carousel/CarouselSlide.vue";

export default {
  name: "Views",
  components: {
    Intro,
    House,
    Carousel,
    CarouselSlide,
    ProgressBar
  },
  data: () => ({}),
  methods: {
    click() {
      //this.$store.dispatch("nextScene", { sceneId: 1 });
    }
  }
};
</script>

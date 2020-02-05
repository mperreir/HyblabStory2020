<template>
  <div>
    <div>
      <Carousel>
        <CarouselSlide :index="0">
          <Intro />
        </CarouselSlide>
        <CarouselSlide :index="1">
          <Persos />
        </CarouselSlide>
        <CarouselSlide :index="2">
          <House />
        </CarouselSlide>
        <CarouselSlide :index="3">
          <Car />
        </CarouselSlide>
        <CarouselSlide :index="4">
          <Borne />
        </CarouselSlide>
        <CarouselSlide :index="5">
          <Company />
        </CarouselSlide>
        <CarouselSlide :index="6">
          <School />
        </CarouselSlide>
        <CarouselSlide :index="7">
          <Quizz />
        </CarouselSlide>
      </Carousel>
    </div>
    <!-- <ProgressBar v-bind:number="8" /> -->
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import Intro from "@/components/Saynettes/Intro.vue";
import Persos from "@/components/Saynettes/Persos.vue";
import House from "@/components/Saynettes/House.vue";
import Car from "@/components/Saynettes/Car.vue";
import Borne from "@/components/Saynettes/Borne.vue";
import Company from "@/components/Saynettes/Company.vue";
import School from "@/components/Saynettes/School.vue";
import Quizz from "@/components/Saynettes/Quizz.vue";
import Carousel from "@/components/carousel/Carousel.vue";
import CarouselSlide from "@/components/carousel/CarouselSlide.vue";

export default {
  name: "Views",
  components: {
    Intro,
    Persos,
    House,
    Car,
    Borne,
    Company,
    School,
    Quizz,
    Carousel,
    CarouselSlide,
    ProgressBar,
  },
  data: () => ({}),
  methods: {
    click() {
      this.$store.dispatch("nextScene", { sceneId: 1 });
    }
  }
};
</script>

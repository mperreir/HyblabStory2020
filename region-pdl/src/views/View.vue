<template>
  <div class="wrapper">
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
          <Podcast />
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
    <LogoRegion class="logo-region" />
    <transition name="fade">
      <ProgressBar
        v-if="$store.state.currentSceneIndex !== 0"
        :number="$store.state.nbScenes - 1"
      />
    </transition>
  </div>
</template>

<script>
import ProgressBar from "@/components/ProgressBar.vue";
import LogoRegion from "@/assets/logo-region.svg";
import Intro from "@/components/Saynettes/Intro.vue";
import Persos from "@/components/Saynettes/Persos.vue";
import House from "@/components/Saynettes/House.vue";
import Podcast from "@/components/Saynettes/Podcast.vue";
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
    Podcast,
    Borne,
    Company,
    School,
    Quizz,
    Carousel,
    CarouselSlide,
    ProgressBar,
    LogoRegion
  },
  data: () => ({}),
  methods: {
    click() {
      this.$store.dispatch("nextScene", { sceneId: 1 });
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 3s cubic-bezier(1, 0.01, 0.65, 0.6);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.logo-region {
  position: absolute;
  left: 6%;
  top: 5%;
  width: 16%;
  height: 7%;
  border-radius: 10px;
  border-radius: 17px;
  background-color: #fff9;
  /* background-color: #ffffffd1; */
}
</style>

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
        <CarouselSlide :index="8">
          <End />
        </CarouselSlide>
      </Carousel>
    </div>
    <LogoRegion class="logo-region" />
    <transition name="fade">
      <ProgressBar
        v-if="$store.state.currentSceneIndex > 0 && $store.state.currentSceneIndex < $store.state.nbScenes - 1"
        :number="$store.state.nbScenes - 2"
      />
    </transition>
  </div>
</template>

<script>
import { Howl } from 'howler';

import LogoRegion from '@/assets/svg/Utils/logo-region.svg';

import ProgressBar from '@/components/Utils/ProgressBar.vue';
import Intro from '@/components/Saynettes/Intro.vue';
import Persos from '@/components/Saynettes/Persos.vue';
import House from '@/components/Saynettes/House.vue';
import Podcast from '@/components/Saynettes/Podcast.vue';
import Borne from '@/components/Saynettes/Borne.vue';
import Company from '@/components/Saynettes/Company.vue';
import School from '@/components/Saynettes/School.vue';
import Quizz from '@/components/Saynettes/Quizz.vue';
import End from '@/components/Saynettes/End.vue';
import Carousel from '@/components/Carousel/Carousel.vue';
import CarouselSlide from '@/components/Carousel/CarouselSlide.vue';

export default {
  name: 'Views',
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
    End,
    LogoRegion
  },
  mounted () {
    const sound = new Howl({
      src: ['sounds/countryside.mp3'],
      loop: true,
      volume: 0.4
    });
    sound.play();
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
}

.fade-enter-active {
  transition: opacity 3s cubic-bezier(1, 0, 0.65, 0.6);
}

.fade-leave-active {
  transition: opacity 3s cubic-bezier(0.6, 0.65, 0, 1);
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.logo-region {
  position: absolute;
  left: 0;
  top: 0;
  width: 20%;
  height: 7%;
  padding: 1% 0;
  background-color: #fff8;
  border-radius: 0 0 2vh 0;
}
</style>

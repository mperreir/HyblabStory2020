<template>
  <div class="views">
    <MainSlide />

    <!-- <Home />
    <Character v-if="(state === 0)" />
    <Story v-if="(state === 1)" />
    <House v-if="(state === 2)" />
    <Car v-if="(state === 3)" />
    <School v-if="(state === 4)" />
    <Ending v-if="(state === 5)" />
    <button @click="state += 1">Suivant</button> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import Home from "@/components/Home.vue";
// import Character from "@/components/Character.vue";
// import Story from "@/components/Story.vue";
// import House from "@/components/House.vue";
// import Car from "@/components/Car.vue";
// import School from "@/components/School.vue";
// import Ending from "@/components/Ending.vue";
import MainSlide from "@/components/MainSlide.vue";

export default {
  name: "views",
  components: {
    MainSlide,
    // Home,
    // Character,
    // Story,
    // House,
    // Car,
    // School,
    // Ending
  },
  data: () => {
    return {
      state: 0
    };
  }
};
</script>

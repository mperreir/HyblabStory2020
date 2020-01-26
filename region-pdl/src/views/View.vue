<template>
  <div class="views">
    <Home />
    <!--<Character v-if="character_render" />
    <Story v-if="story_render" />
    <House v-if="house_render" />
    <Car v-if="car_render" />
    <School v-if="school_render" />
    <Ending v-if="ending_render" />-->
    <Character />
    <Story />
    <House />
    <Car />
    <School />
    <Ending />
  </div>
</template>

<script>
// @ is an alias to /src
import Home from "@/components/Home.vue";
import Character from "@/components/Character.vue";
import Story from "@/components/Story.vue";
import House from "@/components/House.vue";
import Car from "@/components/Car.vue";
import School from "@/components/School.vue";
import Ending from "@/components/Ending.vue";

export default {
  name: "views",
  components: {
    Home,
    Character,
    Story,
    House,
    Car,
    School,
    Ending
  }
};
</script>

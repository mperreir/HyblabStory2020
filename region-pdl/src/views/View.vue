<template>
  <div class="mainScene bg-bluegreen">
    <!-- <Background /> -->
    <!-- <TestDecor /> -->
    <!-- <TestSaynetteButtonPlus /> -->
    <Maison v-if="currentScene === Scenes.house" />
    <!--<SaynetteExample v-if="currentScene == Scenes.example"/>-->
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Background from "@/components/Background";
import House from "@/components/Saynettes/House/House";
import SaynetteExample from "@/components/Saynettes/SaynetteExample";
import Maison from "@/components/Saynettes/Maison.vue";
import TestSaynetteButtonPlus from "@/components/Saynettes/SaynetteMaisonPlus.vue";
import TestDecor from "@/components/Saynettes/DecorExample.vue";
import { Scenes } from "@/utils/scenes.js";

export default {
  name: "Views",
  components: {
    Maison,
    // Background,
    // House,
    // SaynetteExample,
    // SaynetteExample,
    // TestSaynetteButtonPlus,
    // TestDecor
  },
  data: () => ({
    Scenes: Scenes,
  }),
  computed : {
    currentScene() {
      return this.$store.state.currentScene;
    }

  },
  mounted() {
    this.$store.dispatch('initScene', {sceneName: Scenes.house});
  }
};
</script>

<style>
.mainScene {
  text-align:center;
  margin:auto;
  width: 800px;
  height: 564px;
}
</style>

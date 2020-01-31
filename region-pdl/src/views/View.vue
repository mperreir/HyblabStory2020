<template>
  <div class="mainScene">
    <Background />
    <!--<TestSaynetteButtonPlus />-->
    <Maison v-if="currentScene === Scenes.house"/>
    <SaynetteExample v-if="currentScene == Scenes.example"/>
    
</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Background from "@/components/Background.vue";
import Maison from "@/components/Saynettes/Maison.vue";
import TestSaynetteButtonPlus from "@/components/Saynettes/SaynetteMaisonPlus.vue";
import SaynetteExample from "@/components/Saynettes/SaynetteExample";
import { Scenes } from "@/utils/scenes.js";

export default {
  name: "views",
  components: {
    Maison,
    SaynetteExample,
    Background,
    TestSaynetteButtonPlus
  },
  computed : {
    currentScene() {
      return this.$store.state.currentScene;
    }

  },
  data: () => ({
    Scenes: Scenes,
  }),
  mounted() {
    this.$store.dispatch('initScene', {sceneName: Scenes.house});
  }
};
</script>

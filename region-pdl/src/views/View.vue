<template>
  <div class="mainScene bg-bluegreen">
    <Maison v-if="currentScene === Scenes.house" />
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Maison from "@/components/Saynettes/Maison.vue";
import { Scenes } from "@/utils/scenes.js";

export default {
  name: "Views",
  components: {
    Maison,
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

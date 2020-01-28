<template>
<div class="mainScene">
    <Background />
    <Maison v-if="currentScene == 'house'"/>
    <SaynetteExample v-if="currentScene == 'example'"/>
    
</div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex';
import Background from "@/components/Background.vue";
import Maison from "@/components/Saynettes/Maison.vue";
import SaynetteExample from "@/components/Saynettes/SaynetteExample";

export default {
  name: "views",
  components: {
    Maison,
    SaynetteExample,
    Background,
  },
  computed : {
    currentScene() {
      return this.$store.state.currentScene;
    }

  },
  
  mounted() {
    this.$store.dispatch('initScene', {sceneName: "house"});
  }
};
</script>

<template>
  <div class="mainScene">
    <Background />
    <TestSaynette />
    <!--<Maison />-->
    <!-- <Plus /> -->
  </div>
</template>

<script>
// @ is an alias to /src
import Background from "@/components/Background.vue";
import Maison from "@/components/Saynettes/Maison.vue";
import TestSaynette from "@/components/Saynettes/SaynetteMaisonPlus.vue";
import Plus from "@/components/PlusButton.vue";

export default {
  name: "views",
  components: {
    Maison,
    Background,
    Plus,
    TestSaynette
  }
};
</script>

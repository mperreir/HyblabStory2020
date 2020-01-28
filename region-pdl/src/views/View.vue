<template>
<div class="mainScene">
    <Background />
    <Maison />
</div>
</template>

<script>
// @ is an alias to /src
import Background from "@/components/Background.vue";
import Maison from "@/components/Saynettes/Maison.vue";

export default {
  name: "views",
  components: {
    Maison,
    Background,
  }
};
</script>

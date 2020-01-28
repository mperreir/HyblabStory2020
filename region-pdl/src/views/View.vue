<template>
  <SaynetteExample />
</template>

<script>
// @ is an alias to /src
import Saynette from "@/components/Saynette.vue";
import SaynetteExample from "@/components/Saynettes/SaynetteExample.vue";
import MainSlide from "@/components/MainSlide.vue";

export default {
  name: "views",
  components: {
    SaynetteExample,
    MainSlide
  }
};
</script>

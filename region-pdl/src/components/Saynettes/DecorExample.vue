<template>
  <div class="Saynette">
    <Decor>
      <Bg />
    </Decor>
    <Decor>
      <Cloud />
    </Decor>
    <House class="house" />
  </div>
</template>

<script>
import Saynette from "../Saynette";
import Decor from "@/components/Decor.vue";
import Bg from "@/assets/bg-house.svg";
import House from "@/assets/house.svg";
import Cloud from "@/assets/nuages.svg";

export default {
  components: {
    Decor,
    Bg,
    House,
    Cloud
  },
  name: "SaynetteDecor",
  extends: Saynette,
  methods: {
    arrive() {
      console.log("ok nouvelle saynette !");
    }
  }
};
</script>

<style scoped>
.house {
  position: absolute;
  top: 25vh;
  left: 25vw;
  width: 50vw;
}
</style>

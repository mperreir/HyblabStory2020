<template>
  <div class="saynette">
    <Background class="svg" />
    <TrainSVG class="train" />
    <BoatSVG class="boat" />
  </div>
</template>

<script>
import Background from "@/assets/Borne/background-borne.svg";
import TrainSVG from "@/assets/Borne/train.svg";
import BoatSVG from "@/assets/Persos/bateau jauneFichier 4.svg";

export default {
  name: "Borne",
  components: {
    Background,
    TrainSVG,
    BoatSVG
  },
  data: () => ({}),
  methods: {}
};
</script>

<style scoped>

.train {
  position: absolute;
  width: 50%;
  left: -50%;
  top: 57.5%;
  z-index: -1;
  animation: 5s linear infinite train-move;
}

@keyframes train-move {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(500%);
  }
}

.boat {
  position: absolute;
  width: 12%;
  left: 55%;
  top: 59%;
  animation: 1s linear infinite alternate float;
}

@keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
<<<<<<< HEAD
=======

>>>>>>> 90ab1f0eb8972c3024a5fce69785346e8a1d2c21
</style>

<template>
  <div class="saynette">
    <MaisonSVG class="bg-lightgrey svg" />
    <Cloud1 class="cloud" />
    <House class="house" />
    <h1 class="title house-text">Maison {{ text }}</h1>
    <Slider class="slider" @input="onChange" />
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/HOME FOND_Plan de travail 1.svg";
import Cloud1 from "@/assets/HOME/Nuage 1Fichier 7.svg";
import House from "@/assets/house.svg";
import Slider from "@/components/Slider.vue";

export default {
  name: "Maison",
  components: {
    MaisonSVG,
    Cloud1,
    House,
    Slider
  },
  data: () => ({
    text: ""
    //indexMaison: 1
  }),
  methods: {
    onChange(value) {
      this.text = value;
      //this.indexMaison = value;
    }
  }
};
</script>

<style scoped>
.cloud {
  position: absolute;
  top: 25%;
  left: 20%;
  width: 10%;
}

.house {
  position: absolute;
  top: 25%;
  left: 20%;
  width: 10%;
}

.house-text {
  position: absolute;
  top: 40%;
  left: 45%;
}

.slider {
  position: absolute;
  top: 50%;
  left: 40%;
  display: flex;
  flex-direction: column;
}
</style>
</style>

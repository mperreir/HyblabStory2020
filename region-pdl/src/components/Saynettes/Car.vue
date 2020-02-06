<template>
  <div class="saynette">
    <Background class="svg" style="display: hidden"/>
    <BackgroundLarge :class="{test: true,  moved: carHasStarted}"/>
    
    <div :class="{carStartProposal: true, carStartProposalFade: carHasStarted}">
      <TextTitle :style="{textAlign: 'center'}" :y="40">Démarrer la voiture</TextTitle>
      <SwitchButton :width="10" :x="45" :y="47" v-on:toggle="startCar"/>
    </div>
    <RollingCar class="car" />
  </div>
</template>

<script>
import Background from "@/assets/Car/background-car.svg";
import BackgroundLarge from "@/assets/Car/larger.svg";
import SwitchButton from "@/components/SwitchButton";
import RollingCar from "@/assets/Car/voitureFichier 6.svg";
import TextTitle from "@/components/TextTitle";

export default {
  components: {
    Background,
    SwitchButton,
    BackgroundLarge,
    RollingCar,
    TextTitle,
  },
  data: () => ({
    carHasStarted: false,
  }),
  methods: {
    startCar() {
      console.log("Car started");
      this.carHasStarted = true;
    }
  }
};
</script>

<style scoped>
.test {
  position: absolute;
  height: 100vh;
  left: 0;

  transition: left 10s ease;
}

.moved {
  left: -100%;
}

.car { 
  position: absolute;
  width: 37%;
  left: 36%;
  top: 70%;
}

.carStartProposal {
  opacity: 1;
  transition: opacity 2s linear;
  -moz-transition: opacity 2s linear;
  -webkit-transition: opacity 2s linear;
}

.carStartProposalFade {
  opacity: 0;
}

</style>

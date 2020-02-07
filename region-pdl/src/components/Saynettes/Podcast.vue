<template>
  <div class="saynette">
    <Background class="svg" style="display: hidden"/>
    <BackgroundLarge :class="{test: true,  moved: carHasStarted}"/>
    
    <div :class="{carStartProposal: true, carStartProposalFade: carHasStarted}">
      <SimpleText :style="{textAlign: 'center'}" :x="15" :y="15" :width="70">Sur le chemin du travail, {{ character }} observe de nombreux équipements pour la transition énergétique mis en place par la Région Pays de la Loire.</SimpleText>
      <TextTitle :style="{textAlign: 'center'}" :y="40">Démarrer la voiture</TextTitle>
      <SwitchButton :width="10" :x="45" :y="47" v-on:toggle="startCar"/>
    </div>
    
    <div v-show="carGoesOut">
      <SimpleText :style="{textAlign: 'center'}" :x="15" :y="15" :width="70">Pendant le trajet, {{ character }} s'aperçoit que la batterie de sa voitures est faible. Un passage aux bornes de rechargement s'impose.</SimpleText>
    </div>

    <transition name="nextButtonAppear">
      <SimpleButton v-if="outButton" text="Continuer l'histoire" :width="23" :x="75" :y="90" @click.native="onNext"/>
    </transition>

    <Car :moving="carHasStarted" :rollingOut="carGoesOut" />
  </div>
</template>

<script>
import Background from "@/assets/Car/background-car.svg";
import BackgroundLarge from "@/assets/Car/fond_voiture_borne.svg";
import SwitchButton from "@/components/SwitchButton";
import RollingCar from "@/assets/Car/voitureFichier 6.svg";
import Car from "@/components/Car";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

export default {
  components: {
    Background,
    SwitchButton,
    BackgroundLarge,
    RollingCar,
    TextTitle,
    SimpleText,
    SimpleButton,
    Car
  },
  data: () => ({
    carHasStarted: false,
    carGoesOut: false,
    outButton: false,
  }),
  methods: {
    startCar() {
      this.carHasStarted = true;
      setTimeout(() => {
        this.carGoesOut = true;
        setTimeout(() => { this.outButton = true }, 5000)
      }, 5000)
    },
    onNext() {
      this.$store.dispatch('nextScene', { sceneId: null });
    }
  },
  computed: {
    character() {
      const stateChar = this.$store.state.character;
      console.log(stateChar);
      if(stateChar == "moreau") {
        return "M. Moreau";
      }
      else if(stateChar == "dubois") {
        return "Mme Dubois";
      }
      else {
        return "Houston on a un problème";
      }
    }
  }
};
</script>

<style scoped>
.test {
  position: absolute;
  height: 100vh;
  left: 0;

  transition: left 5s ease-in;
}

.moved {
  left: -100%;
}

.car { 
  left: 0%;

  transition: left 5s linear;
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

.carGoesOut {
  left: 100%;
}


.nextButtonAppear-enter-active, .nextButtonAppear-leave-active {
  transition: opacity .5s;
}
.nextButtonAppear-enter, .nextButtonAppear-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}

</style>

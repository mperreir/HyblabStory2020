<template>
  <div class="saynette">
    <LogoRegion class="logoRegion"/>
    <TextTitle :x="40" :y="30">Félicitations !</TextTitle>
    <Background class="svg" />
    <SimpleText :y="40" :style="{textAlign: 'center'}" >
      <p class="text">Désormais, vous en savez davantage sur les actions de la Région des Pays de la Loire pour la transition énergétique. <br>
Pour en savoir plus, rendez-vous sur <a href="https://www.region-paysdelaloire.fr/energies/">www.region-paysdelaloire.fr/energies/</a> </p>
    </SimpleText>

  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

import LogoRegion from "@/assets/logo_region.svg";
import LogoPolytech from "@/components/logo/Polytech.png";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    LogoRegion
  },
  methods: {
    onNext(characterName) {
      this.$store.dispatch("nextScene", { sceneId: null});
    }
  }
};
</script>

<style scoped>

.text{
  color:black;
}
a {
  color: 
}

.logoRegion {
    position: absolute;
    left: 7%;
    top: 4%;
    width: 15%;
}
</style>

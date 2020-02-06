<template>
  <div class="saynette">
    <LogoRegion class="logoRegion"/>
    <TextTitle :x="7" :y="30">La Région Pays de la Loire<br> pour la transition énergétique</TextTitle>
    <Background class="svg" />
    <SimpleText :y="30" :style="{textAlign: 'center'}" >
      MERCI
    </SimpleText>

  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

import LogoRegion from "@/assets/HOME/logo_region.svg";
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

.logoRegion {
    position: absolute;
    left: 7%;
    top: 4%;
    width: 15%;
}
</style>

<template>
  <div class="saynette">
    <LogoRegion class="logoRegion"/>
    <TextTitle :x="7" :y="30">La Région Pays de la Loire<br> pour la transition énergétique</TextTitle>
    <Background class="svg" />
    <SimpleText :y="30" :style="{textAlign: 'center'}" >
      MERCI
    </SimpleText>

  
    <FakePerso class="boat"/>
  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import FakePerso from "@/assets/Persos/PersoFichier 1.svg";

import LogoRegion from "@/assets/HOME/logo_region.svg";
import LogoPolytech from "@/components/logo/Polytech.png";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    FakePerso,
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


.perso {
  position: absolute;
  width: 12%;
}

.p1 {
  left: 24%;
  top: 45%;
}

.p2 {
  left: 64%;
  top: 45%;
}

.boat {
  position: absolute;
  width: 5%;
  left: 15%;
  top: 62%;
  border: solid 1px red;
  animation: 1s linear infinite alternate float;
}

@keyframes float{
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
.logoRegion {
    position: absolute;
    left: 7%;
    top: 4%;
    width: 15%;
}
</style>

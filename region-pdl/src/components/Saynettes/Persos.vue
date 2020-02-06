<template>
  <div class="saynette">
    <Boat class="boat"/>
    <Background class="svg" />
    <TextTitle :y="22" :style="{textAlign: 'center'}" >Qui voulez-vous suivre aujourd'hui ?</TextTitle>
    <SimpleText :y="30" :style="{textAlign: 'center'}" >
      Madame Dubois et Monsieur Moreau vivent dans la région Pays de Loire. <br>
      Ils ont tous les deux une maison au coeur d'un quartier plein de verdure. <br> 
      Ils sont très attentifs à leur impact sur l'environnement. Par souci économique <br> et écologique, ils pratiquent le covoiturage pour 
      se rendre sur leur lieu de travail.
    </SimpleText>
    <PersoFemme class="perso p1"/>
    <SimpleButton text="Mme Dubois" @click.native="() => { onNext('dubois')}" :width="20" :y="90" :x="20"/>
    <PersoHomme class="perso p2"/>
    <SimpleButton text="M. Moreau" @click.native="() => { onNext('moreau')}" :width="20" :y="90" :x="60"/>
  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import FakePerso from "@/assets/Persos/PersoFichier 1.svg";
import PersoHomme from "@/assets/Persos/monsieur.svg";
import PersoFemme from "@/assets/Persos/madame.svg";
import Boat from "@/assets/Persos/bateau jauneFichier 4.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    FakePerso,
    PersoHomme,
    PersoFemme,
    Boat,
  },
  methods: {
    onNext(characterName) {
      this.$store.dispatch("nextScene", { sceneId: null});
      this.$store.dispatch("setCharacter", {name: characterName});
    }
  }
};
</script>

<style scoped>

.perso {
  position: absolute;

}

.p1 {
  left: 24%;
  top: 50%;
  width: 8%;
}

.p2 {
  left: 64%;
  top: 50%;
  width: 11%;
}

.boat {
  position: absolute;
  width: 8%;
  left: 11%;
  top: 66%;
  animation: 25s linear infinite alternate float;
  z-index: 0;
}

@keyframes float{
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}

</style>

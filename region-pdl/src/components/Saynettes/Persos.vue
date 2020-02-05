<template>
  <div class="saynette">
    <Background class="svg" />
    <TextTitle :y="22" :style="{textAlign: 'center'}" >Qui voulez-vous suivre aujourd'hui ?</TextTitle>
    <SimpleText :y="30" :style="{textAlign: 'center'}" >
      Madame Dubois et Monsieur Moreau vivent dans la région Pays de Loire. <br>
      Ils ont tous les deux une maison au coeur d'un quartier plein de verdure. <br> 
      Ils sont très attentifs à leur impact sur l'environnement. Par souci économique <br> et écologique, ils pratiquent le covoiturage pour 
      se rendre sur leur lieu de travail.
    </SimpleText>
    <FakePerso class="perso p1"/>
    <SimpleButton text="Mme Dubois" @click.native="() => { onNext('dubois')}" :width="20" :y="90" :x="20"/>
    <FakePerso class="perso p2"/>
    <SimpleButton text="M. Moreau" @click.native="() => { onNext('moreau')}" :width="20" :y="90" :x="60"/>
  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import FakePerso from "@/assets/Persos/PersoFichier 1.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    FakePerso,
  },
  methods: {
    onNext(characterName) {
      console.log(characterName + ' a été choisi(e) !');
      this.$store.dispatch("nextScene", {sceneId: 2});
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

</style>

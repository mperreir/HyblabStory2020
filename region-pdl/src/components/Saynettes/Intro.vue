<template>
  <div class="saynette">
    <TextTitle :x="7" :y="20">
      La Région des Pays de la Loire
      <br />pour la transition énergétique
    </TextTitle>
    <SimpleText :x="7" :y="35" :width="45">
      Suivez la journée de Monsieur Moreau et Madame Dubois
      <br />et découvrez comment la
      <b>Région des Pays de la Loire</b>
      <br />les accompagne pour réduire leur impact énergétique et construire un avenir plus vert.
    </SimpleText>
    <SimpleButton text="Démarrer l'aventure" :width="23" :x="7" :y="58" @click.native="onNext" />
    <MaisonSVG class="svg" />
  </div>
</template>

<script>
import MaisonSVG from "@/assets/Home/FOND HOME-01.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

export default {
  name: "Intro",
  components: {
    MaisonSVG,
    TextTitle,
    SimpleButton,
    SimpleText
  },
  methods: {
    onNext() {
      this.$store.dispatch("nextScene", {});
    }
  }
};
</script>

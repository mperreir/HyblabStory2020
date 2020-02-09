<template>
  <div class="saynette">
    <Background class="svg" />
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
    <Tree class="tree" />
  </div>
</template>

<script>
import Background from "@/assets/background-intro.svg";
import Tree from "@/assets/Home/tree-home.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

export default {
  name: "Intro",
  components: {
    Background,
    Tree,
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

<style scoped>
.tree {
  position: absolute;
  top: 55%;
  left: 24%;
  width: 12%;
  overflow: visible
}

.poly {
  transform: translateY(0) rotate(-0.5deg);
  /* -webkit-animation: anim 1s linear infinite;
  -moz-animation: anim 1s linear infinite;
  -ms-animation: anim 1s linear infinite; */
  animation: anim 2s ease-in-out infinite alternate;
}

@keyframes anim {
  form {
    transform: translateY(0) rotate(-0.5deg);
  }
  from {
    transform: translateY(1vh) rotate(0.5deg);
  }
}
</style>

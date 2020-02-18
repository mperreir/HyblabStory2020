<template>
  <div class="saynette">
    <Background class="svg" />

    <TextTitle
      :x="7"
      :y="20"
    >
      La Région des Pays de la Loire
      <br>pour la transition énergétique
    </TextTitle>

    <SimpleText
      :x="7"
      :y="35"
      :width="45"
    >
      Suivez la journée de M. Moreau et Mme Dubois
      <br>et découvrez comment la
      <b>Région des Pays de la Loire</b>
      <br>les accompagne pour réduire leur impact énergétique et construire un avenir plus vert.
    </SimpleText>

    <SimpleText
      :x="11"
      :y="51"
      :width="50"
    >
      Pour une expérience plus immersive, vous pouvez activer le
      <b>son.</b>
    </SimpleText>

    <SimpleButton
      text="Démarrer l'aventure"
      :width="23"
      :x="7"
      :y="58"
      @click.native="onNext"
    />

    <Tree class="tree" />

    <Speaker class="speaker" />
  </div>
</template>

<script>
import Background from '@/assets/svg/Home/background-home.svg';
import Tree from '@/assets/svg/Home/tree-home.svg';
import Speaker from '@/assets/svg/Home/volume.svg';

import TextTitle from '@/components/Utils/TextTitle.vue';
import SimpleText from '@/components/Utils/SimpleText.vue';
import SimpleButton from '@/components/Utils/SimpleButton.vue';

export default {
  name: 'Intro',
  components: {
    Background,
    Tree,
    Speaker,
    TextTitle,
    SimpleButton,
    SimpleText
  },
  methods: {
    onNext () {
      this.$store.dispatch('nextScene', {});
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
  overflow: visible;
  pointer-events: none;
}

.poly {
  transform: translateY(0) rotate(-0.5deg);
  -webkit-animation: anim 2s ease-in-out infinite alternate;
  -moz-animation: anim 2s ease-in-out infinite alternate;
  -ms-animation: anim 2s ease-in-out infinite alternate;
  animation: anim 2s ease-in-out infinite alternate;
}

.speaker {
  position: absolute;
  top: 51.5%;
  left: 7.5%;
  width: 2%;
  fill: #00324e;
}

@-webkit-keyframes anim {
  form {
    transform: translateY(0) rotate(-0.5deg);
  }
  from {
    transform: translateY(1vh) rotate(0.5deg);
  }
}
@-moz-keyframes anim {
  form {
    transform: translateY(0) rotate(-0.5deg);
  }
  from {
    transform: translateY(1vh) rotate(0.5deg);
  }
}
@-ms-keyframes anim {
  form {
    transform: translateY(0) rotate(-0.5deg);
  }
  from {
    transform: translateY(1vh) rotate(0.5deg);
  }
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

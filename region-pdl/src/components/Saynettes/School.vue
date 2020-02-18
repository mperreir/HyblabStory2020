<template>
  <div class="saynette">
    <SimpleText :style="{textAlign: 'center'}" :x="15" :y="15" :width="70">
      <p v-if="getCharacterGender === 'mme'">
        Juste à côté de l’entreprise dans laquelle travaille Mme Dubois,
        se trouve une école
        <br />dans laquelle M. Moreau est professeur.
        Cette année, l’école a bénéficié d’une
        <b>aide de la Région</b>
        <br />pour réaliser
        <b>des travaux d’isolation</b>.
      </p>
      <p v-if="getCharacterGender === 'm'">
        M. Moreau est professeur des écoles. Cette année, son école a bénéficié
        <br />
        <b>d’une aide de la Région</b> pour réaliser
        <b>des travaux d’isolation</b>.
      </p>
    </SimpleText>

    <SimpleText :x="48" :y="67.6" :width="45">ÉCOLE</SimpleText>

    <PlusButton v-model="closePopover1" class="plus1" :width="45" @open="closePopover(1)">
      <p class="text">
        En 2018,
        <span class="orange">140 bâtiments publics</span> ont bénéficié des aides de la Région
        <br />pour la réhabilitation et la rénovation
        <br />de leur isolation pour un montant total
        <br />de
        <span class="orange">21 millions d’euros.</span>
      </p>
    </PlusButton>

    <PlusButton v-model="closePopover2" class="plus2" :width="30" @open="closePopover(2)">
      <p class="text">
        En 2018, l’école de M. Moreau
        <br />a pu toucher
        <span class="orange">84 400 €</span> d’aides de la part de la Région.
      </p>
    </PlusButton>

    <SimpleButton text="Continuer l'histoire" :width="23" :x="75" :y="90" @click.native="onNext" />

    <Background class="svg" />

    <RoadSVG v-if="getCharacterGender === 'm'" class="road-svg" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Background from "@/assets/svg/School/background-school.svg";
import RoadSVG from "@/assets/svg/Utils/road.svg";

import SimpleText from "@/components/Utils/SimpleText.vue";
import SimpleButton from "@/components/Utils/SimpleButton.vue";
import PlusButton from "@/components/Utils/PlusButton.vue";

export default {
  name: "School",
  components: {
    SimpleText,
    PlusButton,
    SimpleButton,
    Background,
    RoadSVG
  },
  data: () => ({
    closePopover1: false,
    closePopover2: false
  }),
  computed: {
    ...mapGetters(["getCharacterGender"])
  },
  methods: {
    closePopover(i) {
      switch (i) {
        case 1:
          this.closePopover1 = false;
          this.closePopover2 = true;
          break;
        case 2:
          this.closePopover2 = false;
          this.closePopover1 = true;
          break;
      }
    },
    onNext() {
      this.$store.dispatch("nextScene", {
        sceneId: this.getCharacterGender === "m" ? -1 : 1
      });
    }
  }
};
</script>

<style scoped>
.plus1 {
  position: absolute;
  top: 60%;
  left: 70%;
}

.plus2 {
  position: absolute;
  top: 55%;
  left: 26%;
}
</style>

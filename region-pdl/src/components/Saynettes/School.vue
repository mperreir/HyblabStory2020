<template>
  <div class="saynette">
    <SimpleText :style="{textAlign: 'center'}" :x="15" :y="15" :width="70">
      <p v-if="getChatacterGender === 'mme'">
        Juste à côté de l’entreprise dans laquelle travaille Mme Dubois,
        se trouve une école dans laquelle M. Moreau est professeur.
        Cette année, l’école a bénéficié d’une
        <br />
        <b>aide de la Région</b> pour réaliser
        <b>des travaux d’isolation</b>.
      </p>
      <p v-if="getChatacterGender === 'm'">
        M. Moreau est professeur des écoles. Cette année, son école a bénéficié
        <br />
        <b>d’une aide de la Région</b> pour réaliser
        <b>des travaux d’isolation</b>.
      </p>
    </SimpleText>
    <PlusButton v-model="closePopover1" class="plus1" :width="30" @open="closePopover(1)">
      <p class="text">
        En 2018,
        <span class="data">140 bâtiments publics</span> ont bénéficié des aides de la Région pour la réhabilitation et la rénovation de leur isolation pour un montant total de
        <br />
        <span class="data">21 millions d’euros.</span>
      </p>
    </PlusButton>

    <PlusButton v-model="closePopover2" class="plus2" :width="30" @open="closePopover(2)">
      <p class="text">
        En 2018, l’école de M. Moreau a pu toucher
        <span class="data">84 400 €</span> d’aides de la part de la Région.
      </p>
    </PlusButton>

    <SimpleButton :text="nextButtonText" :width="23" :x="75" :y="90" @click.native="onNext" />
    <Background class="svg" />
    <RoadSVG v-if="getChatacterGender === 'm'" class="road-svg" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Background from "@/assets/School/background-school.svg";
import RoadSVG from "@/assets/road.svg";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import PlusButton from "@/components/PlusButton";

export default {
  name: "School",
  components: {
    Background,
    SimpleText,
    PlusButton,
    SimpleButton,
    RoadSVG
  },
  data: () => ({
    closePopover1: false,
    closePopover2: false
  }),
  computed: {
    ...mapGetters(["getChatacterGender"]),
    nextButtonText() {
      return this.getChatacterGender === "m"
        ? "Voir l'entreprise"
        : "Voir la suite";
    }
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
        sceneId: this.getChatacterGender === "m" ? -1 : 1
      });
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

.plus1 {
  position: absolute;
  top: 72%;
  left: 48%;
}

.plus2 {
  position: absolute;
  top: 55%;
  left: 26%;
}

.plus3 {
  position: absolute;
  top: 30%;
  left: 40%;
}

.data {
  color: red;
}
</style>

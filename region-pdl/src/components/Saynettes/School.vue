<template>
  <div class="saynette">
  <TextTitle :x="7" :y="15">Se chauffer (aides isolation professionnelles)</TextTitle>
    <SimpleText :x="7" :y="25" :width="40">
        <p v-if="getChatacterGender === 'm'" >Juste à côté de l’entreprise dans laquelle travaille Mme Dubois se trouve une école dans laquelle M. Moreau est professeur. Cette année, l’école a bénéficié d’une aide de la Région pour réaliser des travaux d’isolation.  </p>
        <p v-if="getChatacterGender === 'mme'" >M. Moreau est professeur des écoles. Cette année, son école a bénéficié d’une aide de la Région pour réaliser des travaux d’isolation. </p>
    </SimpleText>
    <ul>
      <li>
        <PlusButton class="plus1"  @open="closePopover(1)" v-model="closePopover1">
          <p class="text">En 2018, <span class = "data"> 140 bâtiments publics </span> ont bénéficié des aides de la Région pour la réhabilitation et la rénovation de leur isolation pour un montant total de 21 millions d’euros.</p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus2" @open="closePopover(2)" v-model="closePopover2">
          <p class="text">En 2018, l’école de M. Moreau a pu toucher <span class = "data"> 84 400 € </span> d’aides de la part de la Région.</p>
        </PlusButton>
      </li>
    </ul>
      <SimpleButton text="Voir l'entreprise" @click.native="onNext" :width="23" :y="92" :x="75"/>
    <Background class="svg" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import Background from "@/assets/School/background-school.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton"
import PlusButton from "@/components/PlusButton";

export default {
  name: "School",
  components: {
    Background,
    TextTitle,
    SimpleText,
    PlusButton,
    SimpleButton
  },
  data: () => ({
    closePopover1: false,
    closePopover2: false,
  }),
  computed: {
    ...mapGetters([
      'getChatacterGender'
    ])
  },
  methods: {
    closePopover(i) {
      switch(i) {
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
        sceneId: this.getChatacterGender === 'm' ? -1 : 1
      })
    }
  }
}
</script>

<style scoped>
* {
  list-style: none;
}

ul li {
  position: absolute;
  top: 0;
  left: 0;
}

ul li .plus1 {
  position: relative;
  top: 72vh;
  left: 48vw;
}

ul li .plus2 {
  position: relative;
  top: 50vh;
  left: 26vw;
}

ul li .plus3 {
  position: relative;
  top: 30vh;
  left: 40vw;
}

.data {
  color : red;
}

</style>
<template>
  <div class="saynette">
    <SimpleText
      :style="{textAlign: 'center'}"
      :x="15"
      :y="15"
      :width="70"
    >
      <p v-if="getChatacterGender === 'mme'">
        L’entreprise de Mme Dubois est engagée pour la transition énergétique et profite des aides de la Région. À présent, l’entreprise crée sa propre énergie verte grâce à la biomasse.
      </p>

      <p v-if="getChatacterGender === 'm'">
        À côté de l’école dans laquelle enseigne M. Moreau, se trouve l’entreprise de Mme Dubois. Eux aussi se sont engagés pour la transition énergétique et profitent des aides de la Région. À présent, ils créent leur propre énergie verte grâce à la biomasse.
      </p>
    </SimpleText>

    <PlusButton
      v-model="closePopover1"
      class="plus1"
      :width="20"
      @open="closePopover(1)"
    >
      <p class="text">
        La <span class="red">biomasse</span> utilise le méthane produit par la décomposition de déchets ménagers pour chauffer les bâtiments.
      </p>
    </PlusButton>
    <PlusButton
      v-model="closePopover2"
      class="plus2"
      :width="20"
      @open="closePopover(2)"
    >
      <p class="text">
        Avec la biomasse, une entreprise peut produire <span class="red">113 000 MWh.</span>
      </p>
    </PlusButton>
    <PlusButton
      v-model="closePopover3"
      class="plus3"
      :width="20"
      @open="closePopover(3)"
    >
      <p class="text">
        <span class="red">2 000 m3 </span> de biogaz équivaut à <span class="red">1 tonne de pétrole.</span>
      </p>
    </PlusButton>
    <PlusButton
      v-model="closePopover4"
      class="plus4"
      :width="20"
      @open="closePopover(4)"
    >
      <p class="text">
        En Pays de la Loire, la biomasse produit <span class="red">651 GWh.</span> Cela équivaut à <span class="red">56 000 tonnes de pétrole.</span>
      </p>
    </PlusButton>

    <SimpleButton
      :text="nextButtonText"
      :width="23"
      :x="75"
      :y="90"
      @click.native="onNextSchool"
    />

    <CompanySVG class="svg" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CompanySVG from "@/assets/Company/FOND ENTREPRISE-01.svg"
import PlusButton from "@/components/PlusButton";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

export default {
    name: "Intro",
    components: {
        CompanySVG,
        SimpleButton,
        SimpleText,
        PlusButton,
    },
    data: () => ({
            closePopover1: false,
            closePopover2: false,
            closePopover3:false,
            closePopover4:false,
    }),
    computed: {
      ...mapGetters([
        'getChatacterGender'
      ]),
      nextButtonText() {
        return this.getChatacterGender === 'mme' ? 'Voir l\'école' : 'Voir la suite';
      }
    },
    methods: {
        onNextSchool() {
            this.$store.dispatch("nextScene", {});
        },
        onNextQuizz() {
            this.$store.dispatch("nextScene", {sceneId: 7}); // // TODO: fix this
        },

        closePopover(i) {
        switch (i) {
          case 1:
            this.closePopover1 = false;
            this.closePopover2 = true;
            this.closePopover3 = true;
            this.closePopover4 = true;
            break;
          case 2:
            this.closePopover2 = false;
            this.closePopover1 = true;
            this.closePopover3 = true;
            this.closePopover4 = true;
            break;
          case 3:
            this.closePopover1 = true;
            this.closePopover2 = true;
            this.closePopover3 = false;
            this.closePopover4 = true;
            break;
          case 4:
            this.closePopover1 = true;
            this.closePopover2 = true;
            this.closePopover3 = true;
            this.closePopover4 = false;
            break;
        }
    }
    },
};

</script>

<style scoped>
* {
  list-style: none;
}

.plus1 {
  position: absolute;
  top: 80%;
  left: 85%;
}

.plus2 {
  position: absolute;
  top: 45%;
  left: 70%;
}

.plus3 {
  position: absolute;
  top: 43%;
  left: 13.5%;
}

.plus4 {
  position: absolute;
  top: 90%;
  left: 13.5%;
}
</style>

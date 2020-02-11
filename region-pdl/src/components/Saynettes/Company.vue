<template>
  <div class="saynette">
    <SimpleText :style="{textAlign: 'center'}" :x="15" :y="15" :width="70">
      <span v-if="getCharacterGender === 'mme'">
        L’entreprise de Mme Dubois est engagée pour la transition énergétique et profite des aides de la Région.
        <br />À présent, l’entreprise créée sa
        <b>
          propre énergie verte
          grâce à la biomasse
        </b>.
      </span>
      <span v-if="getCharacterGender === 'm'">
        À côté de l’école dans laquelle enseigne M. Moreau, se trouve l’entreprise de Mme Dubois.
        <br />Elle est engagée pour la transition énergétique et profite des aides de la Région.
        <br />À présent, elle créée sa
        <b>
          propre énergie verte
          grâce à la biomasse
        </b>.
      </span>
    </SimpleText>
    <PlusButton v-model="closePopover1" class="plus1" :width="20" @open="closePopover(1)">
      <p class="text">
        La
        <span class="orange">biomasse</span> utilise le méthane produit par la décomposition de déchets ménagers pour chauffer les bâtiments.
      </p>
    </PlusButton>
    <PlusButton v-model="closePopover2" class="plus2" :width="20" @open="closePopover(2)">
      <p class="text">
        Avec la biomasse, une entreprise peut produire
        <span class="orange">113 000 MWh.</span>
      </p>
    </PlusButton>
    <PlusButton v-model="closePopover3" class="plus3" :width="20" @open="closePopover(3)">
      <p class="text">
        <span class="orange">2 000 m³</span> de biogaz équivalent à
        <span class="orange">1 tonne de pétrole.</span>
      </p>
    </PlusButton>
    <PlusButton v-model="closePopover4" class="plus4" :width="20" @open="closePopover(4)">
      <p class="text">
        En Pays de la Loire, la biomasse produit
        <span class="orange">651 GWh.</span> Cela équivaut à
        <span class="orange">56 000 tonnes de pétrole.</span>
      </p>
    </PlusButton>
    <SimpleButton text="Continuer l'histoire" :width="23" :x="75" :y="90" @click.native="onNext" />
    <CompanySVG class="svg" />
    <RoadSVG v-if="getCharacterGender === 'mme'" class="road-svg" />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import CompanySVG from "@/assets/Company/background-company.svg";
import PlusButton from "@/components/PlusButton";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import RoadSVG from "@/assets/road.svg";

export default {
  name: "Intro",
  components: {
    CompanySVG,
    SimpleButton,
    SimpleText,
    RoadSVG,
    PlusButton
  },
  data: () => ({
    closePopover1: false,
    closePopover2: false,
    closePopover3: false,
    closePopover4: false
  }),
  computed: {
    ...mapGetters(["getCharacterGender"])
  },
  methods: {
    onNext() {
      this.$store.dispatch("nextScene", {
        sceneId: this.getCharacterGender === "m" ? 2 : 1
      });
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
  }
};
</script>

<style scoped>
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

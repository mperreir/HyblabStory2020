<template>
  <div class="saynette">
    <SimpleText
      :style="{textAlign: 'center'}"
      :x="15"
      :y="15"
      :width="70"
    >
      <span v-if="getCharacterGender === 'mme'">
        L’entreprise de Mme Dubois est engagée pour la transition énergétique et profite des aides de la Région.
        <br>À présent, l’entreprise produit sa
        <b>
          propre énergie verte
          grâce à la méthanisation.
        </b>
      </span>
      <span v-if="getCharacterGender === 'm'">
        À côté de l’école dans laquelle enseigne M. Moreau, se trouve l’entreprise de Mme Dubois.
        <br>Elle est engagée pour la transition énergétique et profite des aides de la Région.
        <br>À présent, elle produit sa
        <b>
          propre énergie verte
          grâce à la méthanisation
        </b>.
      </span>
    </SimpleText>

    <PlusButton
      v-model="closePopover1"
      class="plus1"
      :width="20"
      @open="closePopover(1)"
    >
      <p class="text">
        La
        <span class="orange">méthanisation</span> utilise
        <br>le méthane produit par la décomposition de déchets ménagers pour chauffer
        <br>les bâtiments.
      </p>
    </PlusButton>

    <PlusButton
      v-model="closePopover2"
      class="plus2"
      :width="20"
      @open="closePopover(2)"
    >
      <p class="text">
        Avec la méthanisation, une entreprise peut produire
        <span class="orange">
          <br>113 000 MWh.
        </span>
      </p>
    </PlusButton>

    <PlusButton
      v-model="closePopover3"
      class="plus3"
      :width="20"
      @open="closePopover(3)"
    >
      <p class="text">
        <span class="orange">2 000 m³</span> de biogaz équivalent à
        <span class="orange">1 tonne de pétrole.</span>
      </p>
    </PlusButton>

    <PlusButton
      v-model="closePopover4"
      class="plus4"
      :width="20"
      @open="closePopover(4)"
    >
      <p class="text">
        En Pays de la Loire,
        <br>la méthanisation produit
        <span class="orange">651 GWh.</span>
        <br>Cela équivaut
        <br>à
        <span class="orange">
          56 000 tonnes
          <br>de pétrole.
        </span>
      </p>
    </PlusButton>

    <SimpleButton
      text="Continuer l'histoire"
      :width="23"
      :x="75"
      :y="90"
      @click.native="onNext"
    />

    <CompanySVG class="svg" />

    <RoadSVG
      v-if="getCharacterGender === 'mme'"
      class="road-svg"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

import CompanySVG from '@/assets/svg/Company/background-company.svg';
import RoadSVG from '@/assets/svg/Utils/road.svg';

import PlusButton from '@/components/Utils/PlusButton.vue';
import SimpleText from '@/components/Utils/SimpleText.vue';
import SimpleButton from '@/components/Utils/SimpleButton.vue';

export default {
  name: 'Intro',
  components: {
    CompanySVG,
    RoadSVG,
    SimpleButton,
    SimpleText,
    PlusButton
  },
  data: () => ({
    closePopover1: false,
    closePopover2: false,
    closePopover3: false,
    closePopover4: false
  }),
  computed: {
    ...mapGetters(['getCharacterGender'])
  },
  methods: {
    onNext () {
      this.$store.dispatch('nextScene', {
        sceneId: this.getCharacterGender === 'm' ? 2 : 1
      });
    },
    closePopover (i) {
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
  top: 62%;
  left: 62%;
}

.plus2 {
  position: absolute;
  top: 75%;
  left: 77%;
}

.plus3 {
  position: absolute;
  top: 45%;
  left: 30%;
}

.plus4 {
  position: absolute;
  top: 80%;
  left: 30%;
}
</style>

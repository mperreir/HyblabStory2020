<template>
  <div class="saynette">
    <Background class="svg" />
    <SimpleText :y="15" :x="15" :width="70" :style="{textAlign: 'center'}">
      <span v-if="getCharacterGender === 'mme'">
        Il y a peu, Mme Dubois a fait appel à la Région afin
        <b>d’obtenir des aides pour améliorer l’isolation</b><br> de sa maison.
        Cette rénovation, rendue possible
        <b>grâce aux aides de la Région</b>, a permis à Mme Dubois
        <br />de faire des
        <b>économies d’énergie</b> et de participer à la transition écologique de la région.
      </span>
      <span v-if="getCharacterGender === 'm'">
        Il y a peu, M. Moreau a fait appel à la Région afin
        <b>d’obtenir des aides pour améliorer l’isolation</b> de sa maison.
        Cette rénovation, rendue possible
        <b>grâce aux aides de la Région</b>, a permis à M. Moreau
        <br />de faire des
        <b>économies d’énergie</b> et de participer à la transition écologique de la région.
      </span>
    </SimpleText>
    <transition name="bounce">
      <LittleHouse v-show="indexHouse == 1" class="little" />
    </transition>
    <transition name="bounce">
      <MediumHouse v-show="indexHouse == 2" class="medium" />
    </transition>
    <transition name="bounce">
      <BigHouse v-show="indexHouse == 3" class="big" />
    </transition>
    <div class="size">
      <transition name="bounce">
        <p v-show="indexHouse == 1" class="text">{{ 50 * indexHouse }}m²</p>
      </transition>
      <transition name="bounce">
        <p v-show="indexHouse == 2" class="text">{{ 50 * indexHouse }}m²</p>
      </transition>
      <transition name="bounce">
        <p v-show="indexHouse == 3" class="text">{{ 50 * indexHouse }}m²</p>
      </transition>
    </div>
    <Slider class="slider" @input="onChange" />
    <PlusButton v-model="closePopover1" class="plus1" :width="30" @open="closePopover(1)">
      <p class="text">
        En 2018,
        <span class="orange">1077 maisons</span> <br> ont bénéficié de cette aide <br> à l’isolation.
      </p>
    </PlusButton>
    <PlusButton v-model="closePopover2" class="plus2" :width="35" @open="closePopover(2)">
      <p v-if="getCharacterGender === 'm'">
        La maison de M. Moreau fait
        <span class="orange">50 m².</span> <br> Il a eu le droit à
        <span class="orange">4000 euros</span> d’aides.
      </p>
      <p v-if="getCharacterGender === 'mme'">
        La maison de Mme Dubois fait
        <span class="orange"> <br> 150 m².</span> Elle a eu le droit à
        <span class="orange">4000 euros</span> d’aides.
      </p>
    </PlusButton>
    <PlusButton
      v-show="indexHouse == '1'"
      v-model="closePopover3"
      class="plus3"
      :width="25"
      @open="closePopover(3)"
    >
      <p>
        Pour une maison de
        <span class="orange">50 m².</span>
        Le gain moyen <br> sur la consommation <br> est de
        <span class="orange">58 %</span> après <br> les travaux.
      </p>
    </PlusButton>
    <PlusButton
      v-show="indexHouse == '2'"
      v-model="closePopover4"
      class="plus4"
      :width="30"
      @open="closePopover(4)"
    >
      <p>
        Pour une maison de
        <span class="orange">100 m².</span>
        <br> Le gain moyen <br>sur la consommation <br>est de
        <span class="orange">51 %</span> après les travaux.
      </p>
    </PlusButton>
    <PlusButton
      v-show="indexHouse == '3'"
      v-model="closePopover5"
      class="plus5"
      :width="30"
      @open="closePopover(5)"
    >
      <p>
        Pour une maison de
        <span class="orange">150 m².</span>
        <br>Le gain moyen <br> sur la consommation <br> est de
        <span class="orange">53 %</span> après les travaux.
      </p>
    </PlusButton>
    <SimpleButton
      text="Continuer l'histoire"
      @click.native="onNextCar"
      :width="23"
      :y="90"
      :x="75"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import { Howl } from "howler";

import Background from "@/assets/House/background-house.svg";
import LittleHouse from "@/assets/House/little-house.svg";
import MediumHouse from "@/assets/House/medium-house.svg";
import BigHouse from "@/assets/House/big-house.svg";
import Slider from "@/components/Slider.vue";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import PlusButton from "@/components/PlusButton";

export default {
  name: "House",
  components: {
    Background,
    LittleHouse,
    MediumHouse,
    BigHouse,
    Slider,
    SimpleText,
    SimpleButton,
    PlusButton
  },
  data: () => ({
    indexHouse: 1,
    closePopover1: false,
    closePopover2: false,
    closePopover3: false,
    closePopover4: false,
    closePopover5: false,
    fakeName: "moreau"
  }),
  computed: {
    ...mapGetters(["getCharacterGender"])
  },
  methods: {
    onChange(value) {
      this.indexHouse = value;
      this.clickSound.play();
    },
    onNextCar() {
      this.$store.dispatch("nextScene", {});
    },
    closePopover(i) {
      switch (i) {
        case 1:
          this.closePopover1 = false;
          this.closePopover2 = true;
          this.closePopover3 = true;
          this.closePopover4 = true;
          this.closePopover5 = true;
          break;
        case 2:
          this.closePopover2 = false;
          this.closePopover1 = true;
          this.closePopover3 = true;
          this.closePopover4 = true;
          this.closePopover5 = true;
          break;
        case 3:
          this.closePopover2 = true;
          this.closePopover1 = true;
          this.closePopover3 = false;
          this.closePopover4 = true;
          this.closePopover5 = true;
          break;
        case 4:
          this.closePopover2 = true;
          this.closePopover1 = true;
          this.closePopover3 = true;
          this.closePopover4 = false;
          this.closePopover5 = true;
          break;
        case 5:
          this.closePopover2 = true;
          this.closePopover1 = true;
          this.closePopover3 = true;
          this.closePopover4 = true;
          this.closePopover5 = false;
          break;
      }
    }
  },
  mounted() {
    this.clickSound = new Howl({
      src: ["sounds/water-drop.mp3"],
      volume: 0.2
    });
  }
};
</script>

<style scoped>
.little {
  position: absolute;
  width: 30%;
  top: 68%;
  left: 35%;
}

.medium {
  position: absolute;
  width: 30%;
  top: 65%;
  left: 35%;
}

.big {
  position: absolute;
  width: 50%;
  top: 65%;
  left: 25%;
}

.slider {
  position: absolute;
  top: 92%;
  left: 31%;
}

.size {
  position: absolute;
  top: 87%;
  left: 49%;
  font-size: 2.2vh;
}

.plus1 {
  position: absolute;
  top: 65%;
  left: 70%;
}

.plus2 {
  position: absolute;
  top: 67%;
  left: 35%;
}

.plus3 {
  position: absolute;
  top: 60%;
  left: 55%;
}
.plus4 {
  position: absolute;
  top: 55%;
  left: 55%;
}
.plus5 {
  position: absolute;
  top: 52%;
  left: 45%;
}

.bounce,
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@-webkit-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@-ms-keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes bounce-in {
  0% {
    transform: scale(0);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
}
</style>

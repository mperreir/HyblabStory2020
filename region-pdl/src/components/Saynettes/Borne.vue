<template>
  <div class="saynette">
    <Background class="svg" />
    <SimpleText :width="70" :x="15" :y="15" :style="{textAlign: 'center'}">
      Pour accompagner la transition énergétique, la Région participe au
      déploiement de bornes de recharge pour véhicules électriques sur
      l’ensemble du territoire ligérien. Ainsi, lorsque {{ getCharacter }} prend sa
      voiture, <br>{{ getCharacterGender === 'm' ? 'il' : 'elle' }} sait qu’il y aura toujours une
      <b>borne à proximité</b>.
    </SimpleText>

    <TrainSVG v-show="!nextInitiated" ref="movingTrain" class="train" />

    <Car class="car" />

    <BoatSVG class="boat" />

    <PlusButton class="plus-button" :width="23">
      <p class="text">
        En moyenne, on peut trouver une borne <br> tous les
        <span class="orange">13 km</span> dans toute la région.
      </p>
    </PlusButton>

    <BorneSVG class="borne-svg" />

    <transition name="nextButtonDisppear">
      <SimpleButton
        v-if="!nextPressed"
        text="Continuer l'histoire"
        :width="23"
        :x="75"
        :y="90"
        @click.native="onNext"
      />
    </transition>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

import Background from "@/assets/Borne/background-borne.svg";
import SimpleText from "@/components/SimpleText";
import TrainSVG from "@/assets/Borne/train.svg";
import BoatSVG from "@/assets/Utils/boat.svg";
import BorneSVG from "@/assets/Borne/borne.svg";
import PlusButton from "@/components/PlusButton";
import SimpleButton from "@/components/SimpleButton";
import Car from "@/components/Car";

export default {
  name: "Borne",
  components: {
    Background,
    SimpleText,
    TrainSVG,
    BoatSVG,
    Car,
    PlusButton,
    SimpleButton,
    BorneSVG
  },
  data: () => ({
    nextPressed: false,
    nextInitiated: false
  }),
  computed: {
    ...mapGetters(["getCharacter", "getCharacterGender"])
  },
  methods: {
    onNext() {
      if (!this.nextPressed) {
        this.nextPressed = true;
        this.goNext();
      }
    },
    goNext() {
      this.$nextTick(() => {
        let train = this.$refs.movingTrain.getBoundingClientRect();
        if (train.x + train.width < 0) {
          this.nextInitiated = true;
          this.$store.dispatch("nextScene", {
            sceneId: this.getCharacterGender === "m" ? 2 : 1
          });
        } else {
          setTimeout(this.goNext, 200);
        }
      });
    }
  }
};
</script>

<style scoped>
.train {
  position: absolute;
  width: 50%;
  left: 0%;
  top: 57.5%;
  z-index: -1;
  animation-name: train-move;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
  animation-duration: 4s;
}

@-webkit-keyframes train-move {
  from {
    transform: translateX(-400%);
    -ms-transform: translateX(-400%);
    -moz-transform: translateX(-400%);
    -webkit-transform: translateX(-400%);
    -o-transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
    -ms-transform: translateX(200%);
    -moz-transform: translateX(200%);
    -webkit-transform: translateX(200%);
    -o-transform: translateX(200%);
  }
}
@keyframes train-move {
  from {
    transform: translateX(-400%);
    -ms-transform: translateX(-400%);
    -moz-transform: translateX(-400%);
    -webkit-transform: translateX(-400%);
    -o-transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
    -ms-transform: translateX(200%);
    -moz-transform: translateX(200%);
    -webkit-transform: translateX(200%);
    -o-transform: translateX(200%);
  }
}

.boat {
  position: absolute;
  width: 12%;
  left: 55%;
  top: 59%;
  animation: 1s ease infinite alternate float;
}

@-webkit-keyframes float {
  from {
    transform: translateY(0%);
    -ms-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -o-transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
    -ms-transform: translateY(-5%);
    -moz-transform: translateY(-5%);
    -webkit-transform: translateY(-5%);
    -o-transform: translateY(-5%);
  }
}

@keyframes float {
  from {
    transform: translateY(0%);
    -ms-transform: translateY(0%);
    -moz-transform: translateY(0%);
    -webkit-transform: translateY(0%);
    -o-transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
    -ms-transform: translateY(-5%);
    -moz-transform: translateY(-5%);
    -webkit-transform: translateY(-5%);
    -o-transform: translateY(-5%);
  }
}

.plus-button {
  position: absolute;
  left: 82%;
  top: 69%;
  z-index: 2;
}

.nextButtonDisppear-enter-active,
.nextButtonDisppear-leave-active {
  transition: opacity 0.5s;
}
.nextButtonDisppear-enter,
.nextButtonDisppear-leave-to {
  opacity: 0;
}

.borne-svg {
  position: absolute;
  top: 70.5%;
  left: 73%;
  width: 7%;
}

.tree-svg {
  position: absolute;
  top: 67.5%;
  left: -1%;
  width: 7%;
}
</style>

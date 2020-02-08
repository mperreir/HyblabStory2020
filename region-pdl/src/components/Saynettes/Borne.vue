<template>
  <div class="saynette">
    <Background class="svg" />
    <SimpleText :x="53" :y="17" :width="41">
      <p>
        Pour accompagner la transition énergétique, la Région participe au
        déploiement de bornes de recharge pour les véhicules électriques sur
        l’ensemble du territoire ligérien. Ainsi, lorsque {{ name }} prend sa
        voiture, il sait qu’il y aura toujours une borne à proximité.
      </p>
    </SimpleText>

    <TrainSVG v-show="!nextInitiated" ref="movingTrain" class="train" />

    <Car class="car" />

    <BoatSVG class="boat" />

    <PlusButton class="plus-button" :width="23">
      <p class="text">
        En moyenne, on peut trouver une borne tous les
        <span class="red">13 km</span> dans toute la région.
      </p>
    </PlusButton>

    <BorneSVG class="borne-svg" />

    <SimpleButton text="Continuer l'histoire" :width="23" :x="75" :y="90" @click.native="onNext" />
  </div>
</template>

<script>
import Background from "@/assets/Borne/background-borne.svg";
import SimpleText from "@/components/SimpleText";
import TrainSVG from "@/assets/Borne/train.svg";
import BoatSVG from "@/assets/Persos/bateau jauneFichier 4.svg";
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
    name() {
      return this.$store.state.character === "dubois"
        ? "Mme Dubois"
        : "M. Moreau";
    }
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
          this.$store.dispatch("nextScene", { sceneId: null });
        } else {
          setTimeout(this.goNext, 100);
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
    transform: translateX(-350%);
    -ms-transform: translateX(-350%);
    -moz-transform: translateX(-350%);
    -webkit-transform: translateX(-350%);
    -o-transform: translateX(-350%);
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
    transform: translateX(-350%);
    -ms-transform: translateX(-350%);
    -moz-transform: translateX(-350%);
    -webkit-transform: translateX(-350%);
    -o-transform: translateX(-350%);
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

.borne-svg {
  position: absolute;
  top: 70.5%;
  left: 73%;
  width: 7%;
}
</style>

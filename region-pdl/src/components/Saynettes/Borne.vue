<template>
  <div class="saynette">
    <Background class="svg" />

    <SimpleText
      :width="70"
      :x="15"
      :y="15"
      :style="{textAlign: 'center'}"
    >
      Pour accompagner la transition énergétique, la Région participe au
      déploiement de bornes de recharge pour véhicules électriques sur
      l’ensemble du territoire ligérien. Ainsi, lorsque {{ getCharacter }} prend sa
      voiture,
      <br>
      {{ getCharacterGender === 'm' ? 'il' : 'elle' }} sait qu’il y aura toujours une
      <b>borne à proximité</b>.
    </SimpleText>

    <TrainSVG
      v-show="!nextInitiated"
      ref="movingTrain"
      class="train"
    />

    <Car class="car" />

    <BoatSVG class="boat" />

    <PlusButton
      class="plus-button"
      :width="23"
    >
      <p class="text">
        En moyenne, on peut trouver une borne
        <br>tous les
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
import { mapGetters } from 'vuex';

import Background from '@/assets/svg/Borne/background-borne.svg';
import TrainSVG from '@/assets/svg/Borne/train.svg';
import BoatSVG from '@/assets/svg/Utils/boat.svg';
import BorneSVG from '@/assets/svg/Borne/borne.svg';

import SimpleText from '@/components/Utils/SimpleText.vue';
import PlusButton from '@/components/Utils/PlusButton.vue';
import SimpleButton from '@/components/Utils/SimpleButton.vue';
import Car from '@/components/Utils/Car.vue';

export default {
  name: 'Borne',
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
    ...mapGetters(['getCharacter', 'getCharacterGender'])
  },
  methods: {
    onNext () {
      if (!this.nextPressed) {
        this.nextPressed = true;
        this.goNext();
      }
    },
    goNext () {
      this.$nextTick(() => {
        const train = this.$refs.movingTrain.getBoundingClientRect();

        if (train.x + train.width < 0) {
          this.nextInitiated = true;
          this.$store.dispatch('nextScene', {
            sceneId: this.getCharacterGender === 'm' ? 2 : 1
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

.train {
  position: absolute;
  width: 50%;
  left: 0%;
  top: 57.5%;
  z-index: -1;
  -webkit-animation: train-move 4s infinite linear;
  -moz-animation: train-move 4s infinite linear;
  -ms-animation: train-move 4s infinite linear;
  animation: train-move 4s infinite linear;
}

.boat {
  position: absolute;
  width: 12%;
  left: 55%;
  top: 59%;
  -webkit-animation: float 1s ease infinite alternate;
  -moz-animation: float 1s ease infinite alternate;
  -ms-animation: float 1s ease infinite alternate;
  animation: float 1s ease infinite alternate;
}

@-webkit-keyframes train-move {
  from {
    transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
  }
}
@-moz-keyframes train-move {
  from {
    transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
  }
}
@-ms-keyframes train-move {
  from {
    transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
  }
}
@keyframes train-move {
  from {
    transform: translateX(-400%);
  }
  to {
    transform: translateX(200%);
  }
}

@-webkit-keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
@-moz-keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
@-ms-keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
@keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}
</style>

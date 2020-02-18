<template>
  <div class="saynette">
    <Background
      class="svg"
      style="display: hidden"
    />

    <BackgroundLarge :class="{test: true, moved: carHasStarted}" />

    <div :class="{carStartProposal: true, carStartProposalFade: carHasStarted}">
      <SimpleText
        :style="{textAlign: 'center'}"
        :x="15"
        :y="15"
        :width="70"
      >
        Sur le chemin du travail, {{ getCharacter }} observe de nombreux équipements
        <br>pour la
        <b>transition énergétique qui ont bénéficié d'un financement régional.</b>
      </SimpleText>

      <TextTitle
        :style="{textAlign: 'center'}"
        :y="40"
      >
        Démarrer la voiture
      </TextTitle>

      <SwitchButton
        :width="10"
        :x="45"
        :y="47"
        @toggle="startCar"
      />
    </div>

    <div v-show="carGoesOut">
      <SimpleText
        :style="{textAlign: 'center'}"
        :x="15"
        :y="15"
        :width="70"
      >
        Pendant le trajet, {{ getCharacter }} s'aperçoit que la batterie de sa voiture est faible.
        <br>Un passage aux bornes de recharge s'impose.
      </SimpleText>
    </div>

    <transition name="nextButtonAppear">
      <SimpleButton
        v-if="outButton"
        text="Continuer l'histoire"
        :width="23"
        :x="75"
        :y="90"
        @click.native="onNext"
      />
    </transition>

    <Car
      :moving="carHasStarted"
      :rolling-out="carGoesOut"
    />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import { Howl } from 'howler';

import Background from '@/assets/svg/Utils/empty-background.svg';
import BackgroundLarge from '@/assets/svg/Car/larger-background.svg';

import SwitchButton from '@/components/Utils/SwitchButton.vue';
import Car from '@/components/Utils/Car.vue';
import TextTitle from '@/components/Utils/TextTitle.vue';
import SimpleText from '@/components/Utils/SimpleText.vue';
import SimpleButton from '@/components/Utils/SimpleButton.vue';

export default {
  components: {
    Background,
    BackgroundLarge,
    SwitchButton,
    TextTitle,
    SimpleText,
    SimpleButton,
    Car
  },
  data: () => ({
    carHasStarted: false,
    carGoesOut: false,
    outButton: false,
    podcastSong: null
  }),
  computed: {
    ...mapGetters(['getCharacter'])
  },
  mounted () {
    this.podcastSong = new Howl({
      src: ['sounds/podcast.wav']
    });
  },
  methods: {
    startCar () {
      this.carHasStarted = true;
      this.podcastSong.play();
      setTimeout(() => {
        this.carGoesOut = true;
        setTimeout(() => {
          this.outButton = true;
        }, 5000);
      }, 16000);
    },
    onNext () {
      this.$store.dispatch('nextScene', {});
    }
  }
};
</script>

<style scoped>
.test {
  position: absolute;
  height: 100vh;
  left: 0;
  transition: left 16s ease-in;
}

.moved {
  left: -100%;
}

.car {
  left: 0%;
  transition: left 16s linear;
}

.carStartProposal {
  opacity: 1;
  transition: opacity 1s linear;
}

.carStartProposalFade {
  opacity: 0;
}

.carGoesOut {
  left: 100%;
}

.nextButtonAppear-enter-active,
.nextButtonAppear-leave-active {
  transition: opacity 0.5s;
}
.nextButtonAppear-enter,
.nextButtonAppear-leave-to {
  opacity: 0;
}
</style>

<template>
  <!-- <div class="saynette" @click="onNext"> -->
  <div class="saynette">
    <Background class="svg" />
    <SimpleText :x="53" :y="17" :width="41">
      La Région pose des bornes de recharge de voiture électriques source
      l'entièreté de son territoire. Ainsi, lorsque M. Moreau prend sa
      voiture, il sait qu’il trouvera en moyenne une borne tous les 13 km.
    </SimpleText>
    <TrainSVG
      ref="movingTrain"
      class="train"
      :class="{'slow-train': !nextPressed, 'fast-train': nextPressed}"
    />
    <!-- <Car class="car" /> -->
    <Car :moving="true"/>
    <BoatSVG class="boat" />
    <PlusButton class="plus-button" @open="closePopover(1)" v-model="closePopover1">
      <p class="text">Répartition des bornes par département :</p>
      <RenderingChart :chart-data="chartData" class="chart" />
    </PlusButton>
  </div>
</template>

<script>
import Background from "@/assets/Borne/background-borne.svg";
import SimpleText from "@/components/SimpleText";
import TrainSVG from "@/assets/Borne/train.svg";
import BoatSVG from "@/assets/Persos/bateau jauneFichier 4.svg";
import PlusButton from "@/components/PlusButton";
import Car from "@/components/Car";

import RenderingChart from '@/components/Saynettes/RenderingChart';

export default {
  name: "Borne",
  components: {
    Background,
    SimpleText,
    TrainSVG,
    BoatSVG,
    Car,
    RenderingChart,
    PlusButton
  },
  data: () => ({
    nextPressed: false
  }),
  computed: {
    chartData() {
      return {
        labels: [
          'Loire-Atlantique',
          'Maine-et-Loire',
          'Mayenne',
          'Sarthe',
          'Vendée'
        ],
        datasets: [{
          data: [
            25, 20, 15, 20, 30
          ],
          backgroundColor: [
            'red',
            'green',
            'rgba(231, 76, 60, 1)',
            'rgba(52, 73, 94, 1)',
            'rgba(208, 216, 232, 1)'
          ]
        }]
      }
    }
  },
  methods: {
    onNext() {
      let train = this.$refs.movingTrain.getBoundingClientRect();
      let x = train.x;
      // this.nextPressed = true;
      this.$refs.movingTrain.getBoundingClientRect().x = x;
      this.$nextTick(() => {
        let train = this.$refs.movingTrain.getBoundingClientRect();
        if(train.x + train.width < 0) {
          this.$store.dispatch("nextScene", { sceneId: null});
        }
        else {
          setTimeout(this.onNext, 100);
        }
      });
    }
  }
};
</script>

<style scoped>
/* .car {
  z-index: 5;
} */

.train {
  position: absolute;
  width: 50%;
  left: 0%;
  top: 57.5%;
  z-index: -1;
  animation-name: train-move;
  animation-iteration-count: infinite;
  animation-timing-function: linear;
}

.slow-train {
  animation-duration: 4s;
}

/* unused */
.fast-train {
  animation-duration: 3s;
}

@keyframes train-move {
  from {
    transform: translateX(-350%);
  }
  to {
    transform: translateX(200%);
  }
}

.boat {
  position: absolute;
  width: 12%;
  left: 55%;
  top: 59%;
  animation: 1s ease infinite alternate float;
}

@keyframes float {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}

.chart {
  position: absolute;
  width: 70%;
  left: 5%;
  top: 20%;
}

.plus-button {
  position: absolute;
  left: 80%;
  top: 70%;
}

.borne {
  width: 72px;
  height: 135px;

  position: absolute;
  top: 60%;
  left: 70%;
}
</style>

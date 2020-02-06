<template>
  <div class="saynette">
    <Background class="svg" />
    <TextTitle :y="22" :style="{textAlign: 'center'}">Se loger (aides isolation particuliers)</TextTitle>
    <SimpleText :y="30" :style="{textAlign: 'center'}">
    <p v-if="$store.state.character === 'dubois' || fakeName ==='dubois'"> Il y a peu, Mme Dubois a fait appel à la Région afin d’obtenir des aides pour refaire l’isolation de sa maison. 
    <br>Cette  rénovation rendue possible grâce aux aides de la Région, a permis à Mme Dubois de faire des économies d’énergie et de participer à la transition écologique de la région.</p>
     <p v-if="$store.state.character === 'moreau' || fakeName ==='moreau'">Il y a peu, M. Moreau a fait appel à la Région afin d’obtenir des aides pour refaire l’isolation de sa maison. <br>
     Cette  rénovation rendue possible grâce aux aides de la Région, a permis à M. Moreau de faire des économies d’énergie et de participer à la transition écologique de la région.</p>
     
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
    <Slider @input="onChange" class="slider" />
    <ul>
      <li>
        <PlusButton class="plus1" @open="closePopover(1)" v-model="closePopover1">
          <p class="text">En 2018, <span class = "data"> 1077 maisons </span> ont bénéficié de cette aide à l’isolation.</p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus2" @open="closePopover(2)" v-model="closePopover2">
          <p v-if="$store.state.character === 'dubois'">La maison de M. Moreau  fait <span class = "data"> 50 m². </span> Il a eu le droit à <span class = "data">4000 euros </span> d’aides.</p>
          <p v-if="$store.state.character === 'moreau'" >La maison de Mme Dubois fait <span class = "data"> 150 m². </span> Elle a eu le droit à <span class = "data">4000 euros</span> d’aides.</p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus3" @open="closePopover(3)" v-model="closePopover3">
          <p v-if="this.indexHouse == '1'">Pour une maison de <span class = "data"> 50 m². </span> Le gain moyen sur la consommation est de <span class = "data">58 % </span> après les travaux.</p>
          <p v-if="this.indexHouse == '2'" >Pour une maison de <span class = "data"> 100 m². </span> Le gain moyen sur la consommation est de  <span class = "data">51 %</span> après les travaux.</p>
          <p v-if="this.indexHouse == '3'" >Pour une maison de <span class = "data"> 150 m². </span> Le gain moyen sur la consommation est de <span class = "data">53 %</span> daprès les travaux.</p>
        </PlusButton>
      </li>
    </ul>
    <SimpleButton
      text="Voir la suite"
      
      :width="20"
      :y="90"
      :x="75"
    />
  </div>
</template>

<script>
import Background from "@/assets/House/background-house.svg";
import LittleHouse from "@/assets/House/little-house.svg";
import MediumHouse from "@/assets/House/medium-house.svg";
import BigHouse from "@/assets/House/big-house.svg";
import Slider from "@/components/Slider.vue";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import PlusButton from "@/components/PlusButton"

export default {
  name: "House",
  components: {
    Background,
    LittleHouse,
    MediumHouse,
    BigHouse,
    Slider,
    TextTitle,
    SimpleText,
    SimpleButton,
    PlusButton,
    
  },
  data: () => ({
    indexHouse: 1,
    closePopover1: false,
    closePopover2: false,
    closePopover3:false,
    fakeName:'moreau'
  }),
  methods: {
    onChange(value) {
      this.indexHouse = value;
    },
    closePopover(i) {
      switch (i) {
        case 1:
          this.closePopover1 = false;
          this.closePopover2 = true;
          this.closePopover3 = true;
          break;
        case 2:
          this.closePopover2 = false;
          this.closePopover1 = true;
          this.closePopover3 = true;
          break;
        case 3:
          this.closePopover2 = true;
          this.closePopover1 = true;
          this.closePopover3 = false;
          break;
      }
    }
  }
};
</script>

<style scoped>
* {
  list-style: none;
}

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
  top: 95%;
  left: 33%;
}

.size {
  position: absolute;
  top: 90%;
  left: 49%;
}

ul li {
  position: absolute;
  top: 0;
  left: 0;
}

ul li .plus1 {
  position: relative;
  top: 60vh;
  left: 40vw;
}

ul li .plus2 {
  position: relative;
  top: 70vh;
  left: 26vw;
}

ul li .plus3 {
  position: relative;
  top: 75vh;
  left: 55vw;
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

.data {
  color:red;
}
</style>

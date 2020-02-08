<template>
  <div class="saynette">
    <Boat class="boat" />
    <Background class="svg" />
    <TextTitle :y="22" :style="{textAlign: 'center'}">Qui voulez-vous suivre aujourd'hui ?</TextTitle>
    <SimpleText :y="30" :style="{textAlign: 'center'}">
      Madame Dubois et Monsieur Moreau vivent dans la région Pays de Loire.
      <br />Ils ont tous les deux une maison au coeur d'un quartier plein de verdure.
      <br />Ils sont très attentifs à leur impact sur l'environnement. Par souci économique
      <br />et écologique, ils pratiquent le covoiturage pour
      se rendre sur leur lieu de travail.
    </SimpleText>
    <SimpleButton
      text="Mme Dubois"
      @mouseover.native="animDubois = true"
      @mouseleave.native="animDubois = false"
      @click.native="() => { onNext('dubois')}"
      :width="20"
      :y="45"
      :x="20"
    />
    <PersoFemme class="perso p1" :class="{ grow: animDubois }" />
    <SimpleButton
      text="M. Moreau"
      @mouseover.native="animMoreau = true"
      @mouseleave.native="animMoreau = false"
      @click.native="() => { onNext('moreau')}"
      :width="20"
      :y="45"
      :x="60"
    />
    <PersoHomme class="perso p2" :class="{ grow: animMoreau }" />
  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import PersoHomme from "@/assets/Persos/man.svg";
import PersoFemme from "@/assets/Persos/woman.svg";
import Boat from "@/assets/boat.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    PersoHomme,
    PersoFemme,
    Boat
  },
  data: () => {
    return {
      animDubois: false,
      animMoreau: false
    };
  },
  methods: {
    onNext(characterName) {
      this.$store.dispatch("nextScene", { sceneId: null });
      this.$store.dispatch("setCharacter", { name: characterName });
    }
  }
};
</script>

<style scoped>
.perso {
  position: absolute;
}

.p1 {
  left: 24%;
  top: 58%;
  width: 8%;
}

.p2 {
  left: 64%;
  top: 58%;
  width: 11%;
}

.grow {
  -webkit-animation: grow 1s linear infinite reverse;
  -moz-animation: grow 1s linear infinite reverse;
  -ms-animation: grow 1s linear infinite reverse;
  animation: grow 1s linear infinite reverse;
}

@-webkit-keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@-moz-keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@-ms-keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@keyframes grow {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}

.boat {
  position: absolute;
  width: 8%;
  left: 11%;
  top: 66%;
  -webkit-animation: float 25s linear infinite alternate;
  -moz-animation: float 25s linear infinite alternate;
  -ms-animation: float 25s linear infinite alternate;
  animation: float 25s linear infinite alternate;
}

@-webkit-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@-moz-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@-ms-keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
@keyframes float {
  from {
    transform: translateX(0%);
  }
  to {
    transform: translateX(350%);
  }
}
</style>

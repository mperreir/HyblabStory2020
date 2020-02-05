<template>
  <div class="saynette">
    <MaisonSVG class="bg-lightgrey svg" />
    <Cloud1 class="cloud" />
    <SimpleButton :x="8" :y="65" :width="25" text="Démarrer l'aventure" />>
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/HOME FOND_Plan de travail 1.svg";
import Cloud1 from "@/assets/HOME/Nuage 1Fichier 7.svg";
import SimpleButton from '@/components/SimpleButton';

export default {
    name: "Intro",
    components: {
        MaisonSVG,
        Cloud1,
        SimpleButton,
    },
    data: () => ({
        classObject: {
            animated: false,
            fadeInRight: false,
        },
    }),

    methods: {
        arrive() {
            this.classObject = {
                animated: true,
                fadeInRight: true,
            };
        }
    },


};

</script>

<style scoped>
.cloud {
    position: absolute;
    top: 25%;
    left: 20%;
    width: 10%;
    color: red;
    font-size: 3vw;
}

.house {
  position: absolute;
  top: 25%;
  left: 20%;
  width: 10%;
  color: red;
  font-size: 3vw;
}
</style>

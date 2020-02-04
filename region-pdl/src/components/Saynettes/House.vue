<template>
  <div class="saynette">
    <MaisonSVG class="bg-lightblue svg" />
    <Cloud1 class="cloud" />
    <House class="house" />
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/HOME FOND_Plan de travail 1.svg";
import Cloud1 from "@/assets/HOME/Nuage 1Fichier 7.svg";
import House from "@/assets/house.svg";

export default {
    name: "Maison",
    components: {
        MaisonSVG,
        Cloud1,
        House
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

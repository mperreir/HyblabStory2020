<template>
  <div class="saynette">
    <MaisonSVG class="svg-scene house" />
    <Cloud1 class="cloud" />
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/HOME FOND_Plan de travail 1.svg";
import Cloud1 from "@/assets/HOME/Nuage 1Fichier 7.svg";

export default {
    name: "Maison",
    components: {
        MaisonSVG,
        Cloud1
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
.saynette {
    display: inline-block;
    position: relative;
    vertical-align: middle;
    overflow: hidden;
}

.cloud {
    position: absolute;
    top: 25%;
    left: 20%;
    width: 10%;
    color: red;
    font-size: 3vw;
}
</style>

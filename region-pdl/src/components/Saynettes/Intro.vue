<template>
  <div class="saynette">
    <LogoRegion class="logoRegion"/>
    <TextTitle :x="7" :y="30">La Région Pays de la Loire<br> pour la transition énergétique</TextTitle>
    <SimpleText :x="7" :y="43" :width="40">
        Suivez la journée de Monsieur Moreau et Madame Dubois et découvez comment la Région <b>Pays de La Loire</b> les accompagne pour une consommation d'énergie plus verte.
    </SimpleText>
    <SimpleButton text="Démarrer l'aventure" :width="23" :x="7" :y="58"/>
    <MaisonSVG class="svg"/>
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/FOND HOME-01.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import LogoRegion from "@/assets/HOME/logo_region.svg";

export default {
    name: "Intro",
    components: {
        MaisonSVG,
        TextTitle,
        SimpleButton,
        SimpleText,
        LogoRegion,
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
.logoRegion {
    position: absolute;
    left: 7%;
    top: 4%;
    width: 15%;
}
</style>

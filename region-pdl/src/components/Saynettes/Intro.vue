<template>
  <div class="saynette">
    <TextTitle :x="7" :y="37">La Région Pays de la Loire<br> pour la transition énergétique</TextTitle>
    <SimpleText :x="7" :y="50" :width="40">
        Suivez la journée de Monsieur Moreau et Madame Dubois et découvez comment la Région <b>Pays de La Loire</b> les accompagne pour une consommation d'énergie plus verte.
    </SimpleText>
    <SimpleButton text="Démarrer l'aventure" :width="23" :x="7" :y="65"/>
    <MaisonSVG class="svg" />
  </div>
</template>

<script>
import MaisonSVG from "@/assets/HOME/FOND HOME-01.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

export default {
    name: "Intro",
    components: {
        MaisonSVG,
        TextTitle,
        SimpleButton,
        SimpleText,
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

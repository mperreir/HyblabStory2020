<template>
  <div class="saynette">
    <SimpleText :style="{textAlign: 'center' , fontSize: '2.5vh', color: 'black'}" :x="15" :y="15" :width="70" >
        <p v-if="this.$store.state.character === 'moreau' || fakeName == 'dubois'">L’entreprise de Mme Dubois est engagée pour la transition énergétique et profite des aides de la Région. À présent, l’entreprise crée sa propre énergie verte grâce à la biomasse.  </p>

        <p v-if="this.$store.state.character === 'moreau' || fakeName === 'moreau'"> À côté de l’école dans laquelle enseigne M. Moreau, se trouve l’entreprise de Mme Dubois. Eux aussi se sont engagés pour la transition énergétique et profitent des aides de la Région. À présent, ils créent leur propre énergie verte grâce à la biomasse. 
</p>
    </SimpleText>
    <SimpleButton text="Voir l'école" :width="23" :x="75" :y="92" @click.native="onNextSchool" />

    <ul>
      <li>
        <PlusButton class="plus1" @open="closePopover(1)" v-model="closePopover1">
          <p class="text">La <span class = "highlight">biomasse</span> utilise le méthane produit par la décomposition de déchets ménagers pour chauffer les bâtiments.</p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus2" @open="closePopover(2)" v-model="closePopover2">
          <p class="text">Avec la biomasse, une entreprise peut produire <span class = "highlight">113 000 MWh.</span></p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus3" @open="closePopover(3)" v-model="closePopover3">
          <p class="text"> <span class = "highlight">2 000 m3 </span> de biogaz équivaut à <span class = "highlight">1 tonne de pétrole.</span></p>
        </PlusButton>
      </li>
      <li>
        <PlusButton class="plus4" @open="closePopover(4)" v-model="closePopover4">
          <p class="text">En Pays de la Loire, la biomasse produit <span class = "highlight">651 GWh.</span> Cela équivaut à <span class = "highlight">56 000 tonnes de pétrole.</span></p>
        </PlusButton>
      </li>
    </ul>

    <CompanySVG class="svg"/>
  </div>
</template>

<script>
import CompanySVG from "@/assets/Company/FOND ENTREPRISE-01.svg"
import PlusButton from "@/components/PlusButton";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import LogoRegion from "@/assets/HOME/logo_region.svg";

export default {
    name: "Intro",
    components: {
        CompanySVG,
        TextTitle,
        SimpleButton,
        SimpleText,
        LogoRegion,
        PlusButton,
    },
    data: () => ({
        classObject: {
            animated: false,
            fadeInRight: false,
            
            closePopover1: false,
            closePopover2: false
        },
        fakeName: 'dubois',
    }),
    //this.$store.state.character
    methods: {
        arrive() {
            this.classObject = {
                animated: true,
                fadeInRight: true,
            };
        },
        onNextSchool() {
            this.$store.dispatch("nextScene", {sceneId: 1});
        },
        closePopover(i) {
        switch (i) {
          case 1:
            this.closePopover1 = false;
            this.closePopover2 = true;
            this.closePopover3 = false;
            this.closePopover4 = false;
          case 2:
            this.closePopover2 = false;
            this.closePopover1 = true;
            this.closePopover3 = false;
            this.closePopover4 = false;
          case 3:
            this.closePopover1 = false;
            this.closePopover2 = false;
            this.closePopover3 = true;
            this.closePopover4 = false;
          case 3:
            this.closePopover1 = false;
            this.closePopover2 = false;
            this.closePopover3 = false;
            this.closePopover4 = true;
        }
    }
    },
};

</script>

<style scoped>
* {
  list-style: none;
}

ul li {
  position: absolute;
  top: 0;
  left: 0;
}

ul li .plus1 {
  position: relative;
  top: 80vh;
  left: 56.5vw;
}

ul li .plus2 {
  position: relative;
  top: 52vh;
  left: 40vw;
}

ul li .plus3 {
  position: relative;
  top: 43vh;
  left: 12vw;
}

ul li .plus4 {
  position: relative;
  top: 90vh;
  left: 7.5vw;
}

.highlight {
  color: red;
}
</style>
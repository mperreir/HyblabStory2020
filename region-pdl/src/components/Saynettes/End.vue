<template>
  <div class="saynette">
    <LogoPolytech class="logoPolytech"/>
    <img src="@/assets/End/logo_agr.png" class="logoAgr">
    <img src="@/assets/End/logo_audencia.png" class="logoAudencia">
    <img src="@/assets/End/logo_hyblab.png" class="logoHyb">
    <img src="@/assets/End/logo_Nantes.png" class="logoNantes">
    <img src="@/assets/End/logo_OML.png" class="logoOML">


    <TextTitle :x="40" :y="30">Félicitations !</TextTitle>
    <Background class="svg" />
    
    <SimpleText :y="40" :style="{textAlign: 'center'}" >
      <p class="text">Désormais, vous en savez davantage sur les actions de la Région des Pays de la Loire pour la transition énergétique. <br>
Pour en savoir plus, rendez-vous sur <a href="https://www.region-paysdelaloire.fr/energies/">www.region-paysdelaloire.fr/energies/</a> </p>
    </SimpleText>

    <SimpleText :y="50" :x="10" :width="55" >
      <p class="text"><strong> Notre équipe : </strong></p>
      <p> <strong>AGR :</strong> Marine BOISMAIN et Mathilde MOUSSET </p>
      <p> <strong>Audencia SciencesCom :</strong> Vinciane LE BORGNE et Nina NAULLEAU </p>
      <p> <strong>Polytech :</strong> Julien GARCIA, Xavier TREMILLON, Nathan SEVA, Nicolas VAUTIER et Mathis LE BERRIGAUD </p>

    </SimpleText>
    

  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";

import LogoRegion from "@/assets/logo-region.svg";
import LogoPolytech from "@/assets/End/logo-polytech.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    LogoRegion,
    LogoPolytech
  },
  methods: {
    onNext(characterName) {
      this.$store.dispatch("nextScene", { sceneId: null});
    }
  }
};
</script>

<style scoped>

.text{
  color:black;
}
a {
  color: 
}

.logoOML{
  position: absolute;
    left: 80%;
    top: 80%;

    width:18%;
    background-color:white;
    opacity:0.8;
    padding:0.5%;
    border-radius:10px;
}

.logoNantes{
  position: absolute;
    left: 60%;
    top: 80%;

    width:18%;
    background-color:white;
    opacity:0.8;
    padding:0.5%;
    border-radius:10px;
}

.logoHyb{
  position: absolute;
    left: 40%;
    top: 80%;

    width:18%;
    background-color:white;
    opacity:0.8;
    padding:0.5%;
    border-radius:10px;
}

.logoAudencia{
  position: absolute;
    left: 28%;
    top: 80%;

    width:10%;
    background-color:white;
    opacity:0.8;
    padding:0.5%;
    border-radius:10px;
}

.logoAgr{
  position: absolute;
    left: 16%;
    top: 80%;

    width:10%;
    background-color:white;
    opacity:0.8;
    padding:0.5%;
    border-radius:10px;
}

.logoPolytech{
  position: absolute;
    left: 1%;
    top: 80%;

    width:10%;
    background-color:white;
    opacity:0.8;
    padding:0% 2%;
    border-radius:10px;
}

.logoRegion {
    position: absolute;
    left: 7%;
    top: 4%;
    width: 15%;
}
</style>

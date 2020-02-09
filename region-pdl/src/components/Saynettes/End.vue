<template>
  <div class="saynette">
    <LogoPolytech class="logoPolytech" />
    <img src="@/assets/End/logo_agr.png" class="logoAgr" />
    <img src="@/assets/End/logo_audencia.png" class="logoAudencia" />
    <img src="@/assets/End/logo_hyblab.png" class="logoHyb" />
    <img src="@/assets/End/logo_Nantes.png" class="logoNantes" />
    <img src="@/assets/End/logo_OML.png" class="logoOML" />

    <TextTitle :x="40" :y="15">Félicitations !</TextTitle>
    <Background class="svg" />

    <SimpleText :y="22" :style="{textAlign: 'center'}">
      <p class="text">
        Désormais, vous en savez davantage sur les actions de la Région des Pays de la Loire pour la transition énergétique.
        <br />Pour en savoir plus, rendez-vous sur :
        <br />
        <a class="darkblue" href="https://www.region-paysdelaloire.fr/energies/" target="_blank">
          <b>www.region-paysdelaloire.fr/energies/</b>
        </a>
      </p>
    </SimpleText>

    <SimpleText :y="45" :x="10" :width="20" :style="{textAlign: 'center'}">
      <b>Storytelling :</b>
      <br />Nina Naulleau
      <br />Vinciane Le Borgne
    </SimpleText>

    <SimpleText :y="45" :x="35" :width="30" :style="{textAlign: 'center'}">
      <b>Développement et intégration :</b>
      <br />Julien Garcia
      <br />Nicolas Vautier
      <br />Mathis Le Berrigaud
      <br />Xavier Tremillon
      <br />Nathan Seva
    </SimpleText>

    <SimpleText :y="45" :x="70" :width="20" :style="{textAlign: 'center'}">
      <b>Direction artistique :</b>
      <br />Mathilde Mousset
      <br />Marine Boismain
    </SimpleText>
  </div>
</template>

<script>
import Background from "@/assets/Persos/background-perso.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import SimpleButton from "@/components/SimpleButton";
import LogoPolytech from "@/assets/End/logo-polytech.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    SimpleButton,
    LogoPolytech
  },
  methods: {
    onNext(characterName) {
      this.$store.dispatch("nextScene", { sceneId: null });
    }
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  opacity: 0.7;
}

.logoOML {
  position: absolute;
  left: 80%;
  top: 80%;

  width: 18%;
  background-color: white;
  opacity: 0.8;
  padding: 0.5%;
  border-radius: 10px;
}

.logoNantes {
  position: absolute;
  left: 60%;
  top: 80%;

  width: 18%;
  background-color: white;
  opacity: 0.8;
  padding: 0.5%;
  border-radius: 10px;
}

.logoHyb {
  position: absolute;
  left: 40%;
  top: 80%;

  width: 18%;
  background-color: white;
  opacity: 0.8;
  padding: 0.5%;
  border-radius: 10px;
}

.logoAudencia {
  position: absolute;
  left: 28%;
  top: 80%;

  width: 10%;
  background-color: white;
  opacity: 0.8;
  padding: 0.5%;
  border-radius: 10px;
}

.logoAgr {
  position: absolute;
  left: 16%;
  top: 80%;

  width: 10%;
  background-color: white;
  opacity: 0.8;
  padding: 0.5%;
  border-radius: 10px;
}

.logoPolytech {
  position: absolute;
  left: 1%;
  top: 80%;

  width: 10%;
  background-color: white;
  opacity: 0.8;
  padding: 0% 2%;
  border-radius: 10px;
}

.logoRegion {
  position: absolute;
  left: 7%;
  top: 4%;
  width: 15%;
}
</style>

<template>
  <div class="saynette">
    <div class="logo-div">
      <img src="@/assets/End/logo-hyblab.png" class="logo" />
      <img src="@/assets/End/logo-Nantes.png" class="logo" />
      <img src="@/assets/End/logo-OML.png" class="logo" />
      <img src="@/assets/End/logo_cc.png" class="logo logo-cc" />
      <img src="@/assets/End/logo_opensource.png" class="logo logo-cc" />
    </div>

    <TextTitle :x="40" :y="15">Félicitations !</TextTitle>
    <Background class="svg" />

    <LogoAgr class="logo-agr" />
    <SimpleText :y="22" :style="{textAlign: 'center'}">
      <p class="text">
        Désormais, vous en savez davantage sur les actions de la Région des Pays de la Loire pour la transition énergétique.
        <br />
        <br />Pour en savoir plus, rendez-vous sur :
        <br />
        <a class="darkblue" href="https://www.region-paysdelaloire.fr/energies/" target="_blank">
          <b>www.region-paysdelaloire.fr/energies/</b>
        </a>
      </p>
    </SimpleText>

    <img src="@/assets/End/logo-audencia.png" class="logo-audencia" />
    <SimpleText :y="60" :x="10" :width="20" :style="{textAlign: 'center'}">
      <span class="large-text">Storytelling</span>
      <br />Nina Naulleau
      <br />Vinciane Le Borgne
    </SimpleText>

    <LogoPolytech class="logo-polytech" />
    <SimpleText :y="60" :x="35" :width="30" :style="{textAlign: 'center'}">
      <span class="large-text">Développement et intégration</span>
      <br />Julien Garcia
      <br />Nicolas Vautier
      <br />Mathis Le Berrigaud
      <br />Xavier Tremillon
      <br />Nathan Seva
    </SimpleText>

    <SimpleText :y="60" :x="70" :width="20" :style="{textAlign: 'center'}">
      <span class="large-text">Direction artistique</span>
      <br />Mathilde Mousset
      <br />Marine Boismain
    </SimpleText>
  </div>
</template>

<script>
import Background from "@/assets/End/background-end.svg";
import TextTitle from "@/components/TextTitle";
import SimpleText from "@/components/SimpleText";
import LogoPolytech from "@/assets/End/logo-polytech.svg";
import LogoAgr from "@/assets/End/logo-agr.svg";

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    LogoPolytech,
    LogoAgr
  }
};
</script>

<style scoped>

.logo-agr {
  position: absolute;
  width: 12%;
  left: 74%;
  top: 43%;
}

.logo-polytech {
  position: absolute;
  width: 18%;
  left: 41%;
  top: 46%;
}

.logo-audencia {
  position: absolute;
  width: 18%;
  left: 10%;
  top: 49%;
}

.large-text {
  font-weight: bold;
  font-size: 2vh;
}

a {
  text-decoration: none;
}

a:hover {
  opacity: 0.75;
}

.logo-div {
  position: absolute;
  top: 88%;
  left: 2%;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.logo {
  width: 15%;
}

.logo-cc {
  width: 7%;
}

.agr {
  width: 10%;
}
</style>

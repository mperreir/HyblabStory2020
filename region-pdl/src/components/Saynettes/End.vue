<template>
  <div class="saynette">
    <div class="logo-div">
      <LogoPolytech class="logo" />
      <img src="@/assets/End/logo-audencia.png" class="logo" />
      <img src="@/assets/End/logo-agr.png" class="logo agr" />
      <img src="@/assets/End/logo-hyblab.png" class="logo" />
      <img src="@/assets/End/logo-Nantes.png" class="logo" />
      <img src="@/assets/End/logo-OML.png" class="logo" />
    </div>

    <TextTitle :x="40" :y="15">Félicitations !</TextTitle>
    <Background class="svg" />

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

    <SimpleText :y="50" :x="10" :width="20" :style="{textAlign: 'center'}">
      <b>Storytelling :</b>
      <br />Nina Naulleau
      <br />Vinciane Le Borgne
    </SimpleText>

    <SimpleText :y="50" :x="35" :width="30" :style="{textAlign: 'center'}">
      <b>Développement et intégration :</b>
      <br />Julien Garcia
      <br />Nicolas Vautier
      <br />Mathis Le Berrigaud
      <br />Xavier Tremillon
      <br />Nathan Seva
    </SimpleText>

    <SimpleText :y="50" :x="70" :width="20" :style="{textAlign: 'center'}">
      <b>Direction artistique :</b>
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

export default {
  name: "Persos",
  components: {
    Background,
    TextTitle,
    SimpleText,
    LogoPolytech
  }
};
</script>

<style scoped>
a {
  text-decoration: none;
}

a:hover {
  opacity: 0.75;
}

.logo-div {
  position: absolute;
  top: 84%;
  left: 2%;
  width: 96%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 15%;
}

.agr {
  width: 10%;
}
</style>

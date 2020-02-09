<template>
  <div class="saynette">

    <TextTitle :y="12" :style="{textAlign: 'center'}">Bilan de consommation d’énergie</TextTitle>

    <SimpleText :style="{textAlign: 'center'}" y="20">
      <p>
        <b>Grâce à tous les dispositifs et les aides mises en place par la Région, </b> M. Moreau et Mme Dubois
        <br />font des <b>économies</b> et <b> réduisent </b> leur impact sur l’environnement en utilisant des énergies plus vertes et durables.
        <br />Et maintenant, un petit quiz pour tester vos connaissances ? 
      </p>   
    </SimpleText>

     <SimpleText :style="{textAlign: 'center'}" :width="23.5" :x="4" :y="37">
      <p>
        Pour qui la Région
        propose-t-elle des aides de réhabilitation
        et de rénovation pour l’isolation?
      </p>   
    </SimpleText>

        <SimpleText :style="{textAlign: 'center'}"  :y="37" :width="23.5" :x="37.5">
      <p>
        En moyenne, à quelle distance
        se situe une borne de chargement
        de voiture électrique ?
      </p>   
    </SimpleText>

        <SimpleText :style="{textAlign: 'center'}" :width="23.5" :x="71" :y="39">
      <p>
        La biomasse sert le plus souvent à :
      </p>   
    </SimpleText>

    <QuizzButton id="11" text="Pros et particuliers" @click.native="() => { onSelectFirstQuestion(1)}" :selected=selected11 :answer=q1a1 :width=15 :y=52 :x=8.5 />
    <QuizzButton id="12" text="Particuliers uniquement" @click.native="() => { onSelectFirstQuestion(2)}" :selected=selected12 :answer="'waiting'" :width=15 :y=65 :x=8.5 />
    <QuizzButton id="13" text="Pros uniquement" @click.native="() => { onSelectFirstQuestion(3)}" :selected=selected13 :answer="'waiting'" :width=15 :y=78 :x=8.5 />

    <QuizzButton id="21" text="33 km" @click.native="() => { onSelectSecondQuestion(1)}" :selected=selected21 :answer="'waiting'" :width=15 :y=52 :x=42 />
    <QuizzButton id="22" text="13 km" @click.native="() => { onSelectSecondQuestion(2)}" :selected=selected22 :answer=q2a2 :width=15 :y=65 :x=42 />
    <QuizzButton id="23" text="53 km" @click.native="() => { onSelectSecondQuestion(3)}" :selected=selected23 :answer="'waiting'" :width=15 :y=78 :x=42 />

    <QuizzButton id="31" color =red text="Eclairer" @click.native="() => { onSelectThirdQuestion(1)}" :selected=selected31 :answer="'waiting'" :width=15 :y=52 :x=75 />
    <QuizzButton id="32" text="Se déplacer" @click.native="() => { onSelectThirdQuestion(2)}" :selected=selected32 :answer="'waiting'" :width=15 :y=65 :x=75 />
    <QuizzButton id="33" text="Chauffer" @click.native="() => { onSelectThirdQuestion(3)}" :selected=selected33 :answer=q3a3 :width=15 :y=78 :x=75 />


    <QuizzButton v-if="Answer1 != null && Answer2 != null && Answer3 != null"  text="Valider" :width=23 :x=37.7 :y=90 @click.native="onCheck"/>

    <SimpleButton v-if="validate" text="Continuer l'histoire" @click.native="onNext" :width="23" :y="92" :x="75"/>

    <Background class="svg" /> 
  </div>
</template>

<script>
import SimpleText from "@/components/SimpleText";
import Background from "@/assets/Quizz/background-quizz.svg";
import TextTitle from "@/components/TextTitle";
import QuizzButton from "@/components/QuizzButton";
import SimpleButton from "@/components/SimpleButton";

export default {
  name: "Quizz",
  components: {
    Background,
    SimpleText,
    TextTitle,
    QuizzButton,
    SimpleButton
  },
  data: () => ({
    //Handle if answer is true or not
    Answer1: null,
    Answer2: null,
    Answer3: null,

    //Display wrongs and goods answers
    q1a1: "waiting",
    q1a2: "waiting",
    q1a3: "waiting",
    q2a1: "waiting",
    q2a2: "waiting",
    q2a3: "waiting",
    q3a1: "waiting",
    q3a2: "waiting",
    q3a3: "waiting",

    //Handle if user clicked on the button
    selected11: false,
    selected12: false,
    selected13: false,

    selected21: false,
    selected22: false,
    selected23: false,

    selected31: false,
    selected32: false,
    selected33: false,

    //Handle next scene button
    validate: false,


  }),
  methods: {

    onNext()
    {
      this.$store.dispatch("nextScene", { sceneId: null})
    },

    onSelectFirstQuestion(numero)
    {
      if (numero === 1)
      {
        this.Answer1 = true;
        this.selected11 = true;
        this.selected12 = false;
        this.selected13 = false;
      }
      else if (numero === 2)
      {
        this.Answer1 = false;
        this.selected11 = false;
        this.selected12 = true;
        this.selected13 = false;
      }
      else 
      {
        this.Answer1 = false;
        this.selected11 = false;
        this.selected12 = false;
        this.selected13 = true;
      }
    },

     onSelectSecondQuestion(numero)
    {
      if (numero === 1)
      {
        this.Answer2 = false;
        this.selected21 = true;
        this.selected22 = false;
        this.selected23 = false;
      }
      else if (numero === 2)
      {
        this.Answer2 = true;
        this.selected21 = false;
        this.selected22 = true;
        this.selected23 = false;
      }
      else 
      {
        this.Answer2 = false;
        this.selected21 = false;
        this.selected22 = false;
        this.selected23 = true;
      }
    },

     onSelectThirdQuestion(numero)
    {
      if (numero === 1)
      {
        this.Answer3 = false;
        this.selected31 = true;
        this.selected32 = false;
        this.selected33 = false;
      }
      else if (numero === 2)
      {
        this.Answer3 = false;
        this.selected31 = false;
        this.selected32 = true;
        this.selected33 = false;
      }
      else 
      {
        this.Answer3 = true;
        this.selected31 = false;
        this.selected32 = false;
        this.selected33 = true;
      }
    },

    onCheck()
    {
      this.q1a1 = "vrai";

      this.q2a2 = "vrai";

      this.q3a3 = "vrai";

      this.validate = true;
      },
    },
  }
</script>

<style scoped>
</style>

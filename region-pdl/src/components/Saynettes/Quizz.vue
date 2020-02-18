<template>
  <div class="saynette">
    <TextTitle :y="12" :style="{textAlign: 'center'}">Bilan de consommation d’énergie</TextTitle>

    <SimpleText :style="{textAlign: 'center'}" :y="20">
      <p>
        <b>Grâce à tous les dispositifs et les aides mises en place par la Région,</b> M. Moreau et Mme Dubois
        <br />font des
        <b>économies</b> et
        <b>réduisent</b> leur impact sur l’environnement en utilisant des énergies plus vertes et durables.
        <br />Et maintenant, un petit quiz pour tester vos connaissances ?
      </p>
    </SimpleText>

    <SimpleText :style="{textAlign: 'center'}" :width="23.5" :x="5.5" :y="37">
      <p>Qui peut bénéficier des aides régionales pour la rénovation énergétique ?</p>
    </SimpleText>

    <SimpleText :style="{textAlign: 'center'}" :y="37" :width="23.5" :x="38">
      <p>
        En moyenne, à quelle distance
        se situe une borne de chargement
        de voiture électrique ?
      </p>
    </SimpleText>

    <SimpleText :style="{textAlign: 'center'}" :width="23.5" :x="71" :y="39">
      <p>La biomasse sert le plus souvent à :</p>
    </SimpleText>

    <div class="answers">
      <div class="column">
        <QuizzButton
          :class="answer11"
          text="Professionnels et particuliers"
          :selected="selected11"
          :answer="q1a1"
          @click.native="onSelectFirstQuestion(1)"
        />
        <QuizzButton
          :class="answer12"
          text="Particuliers uniquement"
          :selected="selected12"
          :answer="'waiting'"
          @click.native="onSelectFirstQuestion(2)"
        />
        <QuizzButton
          :class="answer13"
          text="Professionnels uniquement"
          :selected="selected13"
          :answer="'waiting'"
          @click.native="onSelectFirstQuestion(3)"
        />
      </div>
      <div class="column">
        <QuizzButton
          :class="answer21"
          text="33 km"
          :selected="selected21"
          :answer="'waiting'"
          @click.native="onSelectSecondQuestion(1)"
        />
        <QuizzButton
          :class="answer22"
          text="13 km"
          :selected="selected22"
          :answer="q2a2"
          @click.native="onSelectSecondQuestion(2)"
        />
        <QuizzButton
          :class="answer23"
          text="53 km"
          :selected="selected23"
          :answer="'waiting'"
          @click.native="onSelectSecondQuestion(3)"
        />
      </div>
      <div class="column">
        <QuizzButton
          :class="answer31"
          color="red"
          text="Eclairer"
          :selected="selected31"
          :answer="'waiting'"
          @click.native="onSelectThirdQuestion(1)"
        />
        <QuizzButton
          :class="answer32"
          text="Se déplacer"
          :selected="selected32"
          :answer="'waiting'"
          @click.native="onSelectThirdQuestion(2)"
        />
        <QuizzButton
          :class="answer33"
          text="Chauffer"
          :selected="selected33"
          :answer="q3a3"
          @click.native="onSelectThirdQuestion(3)"
        />
      </div>
    </div>

    <transition name="fade">
      <SimpleButton
        v-if="Answer1 != null && Answer2 != null && Answer3 != null && !validate"
        text="Valider"
        :width="23"
        :x="37.7"
        :y="90"
        @click.native="onCheck"
      />
    </transition>
    <transition name="fade">
      <SimpleButton
        v-if="validate"
        text="Terminer l'histoire"
        :width="23"
        :y="92"
        :x="75"
        @click.native="onNext"
      />
    </transition>

    <Background class="svg" />
  </div>
</template>

<script>
import SimpleText from "@/components/Utils/SimpleText";
import Background from "@/assets/svg/Quizz/background-quizz.svg";
import TextTitle from "@/components/Utils/TextTitle";
import QuizzButton from "@/components/Utils/QuizzButton";
import SimpleButton from "@/components/Utils/SimpleButton";

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

    // Handle answer position
    answer11: null,
    answer12: null,
    answer13: null,

    answer21: null,
    answer22: null,
    answer23: null,

    answer31: null,
    answer32: null,
    answer33: null
  }),
  created() {
    let q1Order = this.shuffle([1, 2, 3]);
    this.answer11 = `index-${q1Order[0]}`;
    this.answer12 = `index-${q1Order[1]}`;
    this.answer13 = `index-${q1Order[2]}`;

    let q2Order = this.shuffle([1, 2, 3]);
    this.answer21 = `index-${q2Order[0]}`;
    this.answer22 = `index-${q2Order[1]}`;
    this.answer23 = `index-${q2Order[2]}`;

    let q3Order = this.shuffle([1, 2, 3]);
    this.answer31 = `index-${q3Order[0]}`;
    this.answer32 = `index-${q3Order[1]}`;
    this.answer33 = `index-${q3Order[2]}`;
  },
  methods: {
    shuffle(array) {
      return array.sort(() => Math.random() - 0.5);
    },
    onNext() {
      this.$store.dispatch("nextScene", { sceneId: null });
    },
    onSelectFirstQuestion(numero) {
      if (numero === 1) {
        this.Answer1 = true;
        this.selected11 = true;
        this.selected12 = false;
        this.selected13 = false;
      } else if (numero === 2) {
        this.Answer1 = false;
        this.selected11 = false;
        this.selected12 = true;
        this.selected13 = false;
      } else {
        this.Answer1 = false;
        this.selected11 = false;
        this.selected12 = false;
        this.selected13 = true;
      }
    },
    onSelectSecondQuestion(numero) {
      if (numero === 1) {
        this.Answer2 = false;
        this.selected21 = true;
        this.selected22 = false;
        this.selected23 = false;
      } else if (numero === 2) {
        this.Answer2 = true;
        this.selected21 = false;
        this.selected22 = true;
        this.selected23 = false;
      } else {
        this.Answer2 = false;
        this.selected21 = false;
        this.selected22 = false;
        this.selected23 = true;
      }
    },
    onSelectThirdQuestion(numero) {
      if (numero === 1) {
        this.Answer3 = false;
        this.selected31 = true;
        this.selected32 = false;
        this.selected33 = false;
      } else if (numero === 2) {
        this.Answer3 = false;
        this.selected31 = false;
        this.selected32 = true;
        this.selected33 = false;
      } else {
        this.Answer3 = true;
        this.selected31 = false;
        this.selected32 = false;
        this.selected33 = true;
      }
    },
    onCheck() {
      this.q1a1 = "vrai";
      this.q2a2 = "vrai";
      this.q3a3 = "vrai";
      this.validate = true;
    }
  }
};
</script>

<style scoped>
.answers {
  position: absolute;
  top: 52%;
  left: 10%;
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.column {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 35vh;
}

.index-1 {
  order: 1;
}

.index-2 {
  order: 2;
}

.index-3 {
  order: 3;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s linear;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>

import Component from "../../js/Component.js";
import Porte from "./1_Porte/Porte.js";
import ATable from "./2_ATable/ATable.js";
import Culotte from "./3_Culotte/Culotte.js";
import Buzzer4 from "./4_Buzzer/Buzzer.js";
import Discussion from "./5_Discussion/Discussion.js";
import SuperPapa from "./6_SuperPapa/SuperPapa.js";
import Rayon from "./7_Rayon/Rayon.js";
import Choix from "./8_Choix/Choix.js";
import Fin from "./10_Fin/Fin.js";
import Credits from "./11_Credits/Credits.js";

export default class Puberte extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;

    // Carousel container section for the puberté playscript
    this.section = document.createElement("section");
    this.section.setAttribute("id", "puberte");

    this.porte = new Porte({
      onGoToATable: this.goToATable.bind(this),
      onStart
    });
    this.atable = new ATable();
    this.culotte = new Culotte({
      goToDiscussion: () => {
        this.culotte.componentWillUnmount();
        this.discussion.render(this.section);
      },
      onGoToBuzzer4: this.goToBuzzer4.bind(this)
    });
    this.buzzer4 = new Buzzer4({
      goToDiscussion: this.goToDiscussion.bind(this)
    });
    this.discussion = new Discussion({
      goToSuperPapa: () => this.superPapa.render(this.section)
    });
    this.superPapa = new SuperPapa({
      goToRayon: () => this.rayon.render(this.section)
    });
    this.rayon = new Rayon({
      goToChoix: () => this.choix.render(this.section)
    });
    this.choix = new Choix({ goToFin: () => this.fin.render(this.section) });
    this.fin = new Fin({
      goToCredits: () => this.credits.render(this.section)
    });
    this.credits = new Credits();
  }

  goToATable(e) {
    this.onStart(this);
    this.porte.componentWillUnmount();
    this.atable.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.atable.componentWillUnmount();
      this.goToCulotte();
    }, 500);
  }

  goToCulotte() {
    this.culotte.render(this.section);
  }

  goToBuzzer4(e) {
    this.culotte.componentWillUnmount();
    this.buzzer4.render(this.section);
    e.preventDefault();
  }

  goToDiscussion(e) {
    this.discussion.render(this.section);
    e.preventDefault();
  }

  async load() {
    await Promise.all([
      this.porte.load(),
      this.atable.load(),
      this.culotte.load(),
      this.buzzer4.load(),
      this.discussion.load(),
      this.superPapa.load(),
      this.rayon.load(),
      this.choix.load(),
      this.fin.load(),
      this.credits.load()
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.porte.render(this.section);
    this.componentDidMount();
  }
}

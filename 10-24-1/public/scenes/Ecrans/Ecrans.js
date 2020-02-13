import Component from "../../js/Component.js";
import Porte from "./Porte/Porte.js";
import PorteChoix from "./PorteChoix/PorteChoix.js";
import Rentrer from "./Rentrer/Rentrer.js";
import Chambre from "./Chambre/Chambre.js";
import Reprimande from "./Reprimande/Reprimande.js";
import Visage from "./Visage/Visage.js";
import PlageHoraire from "./PlageHoraire/PlageHoraire.js";
import PlageHoraire2 from "./PlageHoraire2/PlageHoraire2.js";
import PlageHoraire3 from "./PlageHoraire3/PlageHoraire3.js";
import PageFin from "./PageFin/PageFin.js";
import Credits from "./Credits/Credits.js";

export default class Ecrans extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;

    this.section = document.createElement("section");
    this.section.setAttribute("id", "ecran");

    this.PorteChoix = new PorteChoix({
      onGoToRentrer: this.goToRentrer.bind(this),
      onGoToPorte: this.goToPorte.bind(this),
      onStart
    });
    // this.Porte = new Porte();
    this.Porte = new Porte({
      goToPorteChoix: this.goToPorteChoix.bind(this)
    });
    this.Rentrer = new Rentrer({
      goToChambre: () => this.Chambre.render(this.section)
    });
    this.Chambre = new Chambre({
      goToReprimande: () => this.Reprimande.render(this.section)
    });
    this.Reprimande = new Reprimande({
      goToVisage: () => this.Visage.render(this.section)
    });
    this.Visage = new Visage({
      goToPlageHoraire: () => this.PlageHoraire.render(this.section)
    });
    this.PlageHoraire = new PlageHoraire({
      goToPageFin: () => this.PageFin.render(this.section)
    });
    this.PageFin = new PageFin({
      goToCredits: () => this.Credits.render(this.section)
    });
    this.Credits = new Credits();
  }


  goToRentrer(e) {
    this.onStart(this);
    this.PorteChoix.componentWillUnmount();
    this.Rentrer.render(this.section);
    e.preventDefault();
  }

  goToPorte(e) {
    this.PorteChoix.componentWillUnmount();
    this.Porte.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.Porte.componentWillUnmount();
      this.goToPorteChoix();
    }, 2000);
  }

  goToPorteChoix() {
    // this.Porte.componentWillUnmount();
    this.PorteChoix.render(this.section);
    // e.preventDefault();
  }

  async load() {
    await Promise.all([
      this.Porte.load(),
      this.PorteChoix.load(),
      this.Rentrer.load(),
      this.Chambre.load(),
      this.Reprimande.load(),
      this.Visage.load(),
      this.PlageHoraire.load(),
      this.PageFin.load(),
      this.Credits.load()
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.PorteChoix.render(this.section);
    this.componentDidMount();
  }
}

import Component from "../../js/Component.js";
import Porte from "./Porte/Porte.js";
import PorteChoix from "./PorteChoix/PorteChoix.js";
import Rentrer from "./Rentrer/Rentrer.js";
import Chambre from "./Chambre/Chambre.js";
import Reprimande from "./Reprimande/Reprimande.js";
import Visage from "./Visage/Visage.js";
import PageFin from "./PageFin/PageFin.js";

export default class Ecrans extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;

    this.section = document.createElement("section");
    this.section.setAttribute("id", "ecran");

    this.Porte = new Porte();
    this.PorteChoix = new PorteChoix({
      onGoToRentrer: this.goToRentrer.bind(this),
      onGoToPorte: this.goToPorte.bind(this),
      onStart
    });
    this.Rentrer = new Rentrer({
      onGoToChambre: this.goToChambre.bind(this)
    });
    this.Chambre = new Chambre({
      onGoToReprimande: this.goToReprimande.bind(this)
    });
    this.Reprimande = new Reprimande({
      onGoToVisage: this.goToVisage.bind(this)
    });
    this.Visage = new Visage({
      onGoToPageFin: this.goToPageFin.bind(this) //en attendant de resoudre PlageHoraire
    });
    this.PageFin = new PageFin();
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
    }, 500);
  }

  goToChambre(e) {
    this.Rentrer.componentWillUnmount();
    this.Chambre.render(this.section);
    e.preventDefault();
  }

  goToReprimande(e) {
    this.Chambre.componentWillUnmount();
    this.Reprimande.render(this.section);
    e.preventDefault();
  }

  goToVisage(e) {
    this.Reprimande.componentWillUnmount();
    this.Visage.render(this.section);
    e.preventDefault();
  }

  goToPageFin(e) {
    this.Visage.componentWillUnmount();
    this.PageFin.render(this.section);
  }

  async load() {
    await Promise.all([
      this.PorteChoix.load(),
      this.Rentrer.load(),
      this.Chambre.load(),
      this.Reprimande.load(),
      this.Visage.load(),
      this.PageFin.load()
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.PorteChoix.render(this.section);
    this.componentDidMount();
  }
}

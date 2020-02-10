import Component from "../../js/Component.js";
import Porte from "./Porte/Porte.js"
import Arrivee from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import PorteClaque from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import ViewDerniereTentative from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import ViewPremierChoix from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import FewHoursBefore from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import FlashBack from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import FinHistoire from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import Lendemain from "./1_ArriveeEnfant/1_ArriveeEnfant.js"

export default class Harcelement extends Component {
  constructor(onStart) {
    super();
    this.onStart = onStart;
    this.section = document.createElement("section");
    this.section.setAttribute("id", "harcelement");
    this.porte = new Porte({
      arrivee: this.goToArriveeEnfant.bind(this),
      onStart
    });
    this.arrivee = new Arrivee();
    /*this.porteClaque = new PorteClaque();
    this.premierChoix = new ViewPremierChoix({
      onGoToViewDiscussion: this.goToViewDiscussion.bind(this)
    });
    /*this.derniereTentative = new ViewDerniereTentative({
      onGoToViewDiscussion: this.goToViewDiscussion.bind(this)
    });
    this.fewHoursBefore = new FewHoursBefore();
    this.flashBack = new FlashBack();
    this.finHistoire = new FinHistoire();
    this.lendemain = new Lendemain();
    */
  }


  goToArriveeEnfant(e){
    this.onStart(this);
    this.porte.componentWillUnmount();
    this.arrivee.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToClaquePorte(e);
    }, 3000);
  }

  goToClaquePorte(e){
    this.onStart(this);
    this.arrivee.componentWillUnmount();
    this.porteClaque.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToPremierChoix();
    }, 3000);
  }

  goToPremierChoix(){
    this.porteClaque.componentWillUnmount();
    this.premierChoix.render(this.section);
  }
  /*
  goToDernièreTentative(){
    this.premierChoix.componentWillUnmount();
    this.derniereTentative.render(this.section);
  }

  goToFewHoursBefore(e){
    this.onStart(this);
    this.derniereTentative.componentWillUnmount();
    this.fewHoursBefore.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToFlashBack(e);
    }, 3000);
  }

  goToFlashBack(e){
    this.onStart(this);
    this.fewHoursBefore.componentWillUnmount();
    this.flashBack.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToFinHistoire(e);
    }, 3000);
  }

  goToFinHistoire(e){
    //je sais pas
  }

  gotoLendemain(e){
    this.onStart(this);
    this.premierChoix.componentWillUnmount();
    //ou derniereTentative mais je sais pas comment faire
    this.lendemain.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToArriveeEnfant(e);
    }, 3000);
  }
  */


  async load() {
    await Promise.all([
      this.porte.load(),
      this.arrivee.load(),
      /*this.porteClaque.load(),
      this.premierChoix.load(),
      this.derniereTentative.load(),
      this.fewHoursBefore.load(),
      this.flashBack.load(),
      this.finHistoire.load(),
      this.lendemain.load()*/
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.porte.render(this.section);
    this.componentDidMount();
  }
}
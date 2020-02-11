import Component from "../../js/Component.js";
import Porte from "./Porte/Porte.js"
import Arrivee from "./1_ArriveeEnfant/1_ArriveeEnfant.js"
import PorteClaque from "./2_PorteClaque/2_PorteClaque.js"
import ViewDerniereTentative from "./3_PremierChoix/3_PremierChoix.js"
import ViewPremierChoix from "./4_DerniereTentative/4_DerniereTentative.js"
import FewHoursBefore from "./5_FewHoursBefore/5_FewHoursBefore.js"
import FlashBack from "./6_FlashBack/6_FlashBack.js"
import FinHistoire from "./7_FinHistoire/7_FinHistoire.js"
import Lendemain from "./Lendemain/Lendemain.js"

export default class Harcelement extends Component {
  constructor(onStart) {
    super();
    this.onStart = onStart;

    // Carousel container section for the puberté playscript
    this.section = document.createElement("section");
    this.section.setAttribute("id", "harcelement");

    this.porte = new Porte({
      onGoToArriveeEnfant: this.goToArriveeEnfant.bind(this),
      onStart
    });
    this.arrivee = new Arrivee();
    this.porteClaque = new PorteClaque({
      goToClaquePorte: () => this.porteClaque.render(this.section)
    });
    this.premierChoix = new ViewPremierChoix({
      onGoToDerniereTentative: this.goToDernièreTentative.bind(this),
      onGoToLendemain : this.goToLendemain.bind(this)
    });
    this.derniereTentative = new ViewDerniereTentative({
      onGoToFewHoursBefore: this.goToFewHoursBefore.bind(this),
      onGoToLendemain : this.goToLendemain.bind(this)
    });

    this.fewHoursBefore = new FewHoursBefore();

    this.flashBack = new FlashBack();

    this.finHistoire = new FinHistoire({
      goToFinHistoire: () => this.finHistoire.render(this.section)
    });

    this.lendemain = new Lendemain();
    
  }


  goToArriveeEnfant(e){
    this.onStart(this); 
    //erreur ici je sais pas pourquoi mais ça empeche le lancement du scenario
    //il me dit que onStart n'est pas une fonction du coup je sais pas pourquoi ca marche chez Yoann
    this.porte.componentWillUnmount();
    this.arrivee.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToClaquePorte();
    }, 3000);
  }


  goToPremierChoix(){
    this.premierChoix.render(this.section);
  }
  

  goToDernièreTentative(){
    this.derniereTentative.render(this.section);
  }

  goToFewHoursBefore(){
    this.fewHoursBefore.render(this.section)
  }

  
  goToFlashBack(){ 
    this.flashBack.render(this.section)
  }


  goToLendemain() {
    this.lendemain.render(this.section)
  }

  async load() {
    await Promise.all([
      this.porte.load(),
      this.arrivee.load(),
      this.porteClaque.load(),
      this.premierChoix.load(),
      this.derniereTentative.load(),
      this.fewHoursBefore.load(),
      this.flashBack.load(),
      this.finHistoire.load(),
      this.lendemain.load()
    ]);
  }


  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.porte.render(this.section);
    this.componentDidMount();
  }
}
import Component from "../../js/Component.js";
import Porte from "./Porte/Porte.js"
import Arrivee from "./1_ArriveeEnfant/1_ArriveeEnfant.js"

export default class Harcelement extends Component {
  constructor(OnStart) {
    super();
    this.OnStart = OnStart;
    this.section = document.createElement("section");
    this.section.setAttribute("id", "harcelement");
    this.discussion = new ViewDiscussion();
    this.porte = new Porte({
      arrivee: this.arrivee.bind(this),
      onStart
    });
    this.arrivee = new Arrivee();
    this.porteClaque = new PorteClaque();
    this.premierChoix = new PremierChoix({
      onGoToViewDiscussion: this.goToViewDiscussion.bind(this)
    });
  }


  goToArriveeEnfant(e){
    this.onStart(this);
    this.porte.componentWillUnmount();
    this.arrivee.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToClaquePorte();
    }, 3000);
  }

  goToArriveeEnfant(){
    this.onStart(this);
    this.arrivee.componentWillUnmount();
    this.porteClaque.render(this.section);
    setTimeout(() => {
      this.goToPremierChoix();
    }, 3000);
  }

  goToPremierChoix(){
    this.porteClaque.componentWillUnmount();
    this.premierChoix.render(this.section);
  }



  goToViewDiscussion(e) {
    this.culotte.componentWillUnmount();
    this.discussion.render(this.section);
    e.preventDefault();
  }

  async load() {
    await Promise.all([
      this.porte.load(),
      this.culotte.load(),
      this.discussion.load(),
      this.atable.load()
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.porte.render(this.section);
    this.componentDidMount();
  }
}
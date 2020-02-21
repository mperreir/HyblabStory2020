import Component from "../../../js/Component.js";

export default class PlageHoraire2 extends Component {
  constructor({ goToPlageHoraire3, goToPlageHoraire2, goToPlageHoraire2_2, goToPlageHoraire2_3 }) {
    super();
    this.html = "";
    this.valuemin = 0;
    this.valuemax = 24;
    this.plage = this.valuemax - this.valuemin;
    this.goToPlageHoraire3 = goToPlageHoraire3;
    this.goToPlageHoraire2 = goToPlageHoraire2;
    this.goToPlageHoraire2_2 = goToPlageHoraire2_2;
    this.goToPlageHoraire2_3 = goToPlageHoraire2_3;
  }

  async load() {
    this.html = await this.loadHTML(
      "scenes/Ecrans/PlageHoraire2/PlageHoraire2.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("e_validation")
      .addEventListener("click", e => {
        this.valuemin = document.getElementById('min_slider_2').value;
        this.valuemax = document.getElementById('max_slider_2').value;
        this.plage = this.valuemax - this.valuemin;
        if ((this.plage <= 2) && (this.valuemin >= 8) && (this.valuemax <= 21)) {
          this.goToPlageHoraire3(e);
        }
        else if ((this.plage <= 2) && (this.valuemin < 8)) {
          this.goToPlageHoraire2_2(e);
        }
        else if ((this.plage <= 2) && (this.valuemax > 21)) {
          this.goToPlageHoraire2_3(e);
        }
        else {
          this.goToPlageHoraire2(e);
        }
      });
  }

  render(target) {
    document.getElementById("buzzer-player").pause();

    document.getElementById("buzzer-player").elemMusicOn = true;
    document.getElementById("buzzer-player").volume = 0.1;
    if (!document.getElementById("buzzer-player").isMuted) {
      document.getElementById("buzzer-player").play();
    }
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}

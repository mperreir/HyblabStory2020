import Component from "../../../js/Component.js";

export default class PlageHoraire2 extends Component {
  constructor({ goToPlageHoraire2, goToPlageHoraire3 }) {
    super();
    this.html = "";
    this.goToPlageHoraire2 = goToPlageHoraire2;
    this.goToPlageHoraire3 = goToPlageHoraire3;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-1/scenes/Ecrans/PlageHoraire2/PlageHoraire2.html"
    );
  }

  componentDidMount() {
    // document
    //   .getElementById("e_next")
    //   .addEventListener("click", e => this.goToPlageHoraire2(e));
    // document
    //   .getElementById("e_next")
    //   .addEventListener("click", e => this.goToPlageHoraire3(e));
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}

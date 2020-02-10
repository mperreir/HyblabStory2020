import Component from "../../js/Component.js";
import Porte from "./1_Porte/Porte.js";
import Culotte from "./3_Culotte/Culotte.js";
import ViewDiscussion from "./Discussion/Discussion.js";
import ATable from "./2_ATable/ATable.js";

export default class Puberte extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;
    this.section = document.createElement("section");
    this.section.setAttribute("id", "puberte");
    this.discussion = new ViewDiscussion();
    this.culotte = new Culotte({
      onGoToViewDiscussion: this.goToViewDiscussion.bind(this)
    });
    this.porte = new Porte({
      onGoToATable: this.goToATable.bind(this),
      onStart
    });
    this.atable = new ATable();
  }

  goToATable(e) {
    this.onStart(this);
    this.porte.componentWillUnmount();
    this.atable.render(this.section);
    e.preventDefault();
    setTimeout(() => {
      this.goToCulotte();
    }, 3000);
  }

  goToCulotte() {
    this.atable.componentWillUnmount();
    this.culotte.render(this.section);
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

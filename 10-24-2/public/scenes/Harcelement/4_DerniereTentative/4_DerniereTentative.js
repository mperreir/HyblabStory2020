import Component from "../../../js/Component.js";

export default class ViewDerniereTentative extends Component {
  constructor({ onGoToViewDiscussion }) {
    super();
    this.html = "";
    this.onGoToViewDiscussion = onGoToViewDiscussion;
  }

  async load() {
    this.html = await this.loadHTML(
      "/10-24-2/scenes/Harcelement/4_DerniereTentative/4_DerniereTentative.html"
    );
  }

  componentDidMount() {
    document
      .getElementById("harcelement")
      .addEventListener("click", this.onGoToViewDiscussion);
  }

  comonentWillUnmount() {
    document
      .getElementById("harcelement")
      .removeEventListener("click", this.onGoToViewDiscussion);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}

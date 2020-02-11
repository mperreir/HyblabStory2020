import Component from "../../../js/Component.js";
import Buzzer9 from "../9_Buzzer/Buzzer.js";

export default class Choix extends Component {
  constructor({ goToFin, goToBuzzer }) {
    super();
    this.html = "";
    this.goToFin = goToFin;
    this.goToBuzzer = goToBuzzer;
    this.state = {
      t_clicked: false,
      s_clicked: false,
      c_clicked: false
    };
    this.buzzer = new Buzzer9({
      goToChoix: () => {
        this.render(this.target);
      }
    });
    this.target = null; // will be defined in render method
  }

  async load() {
    const promises = await Promise.all([
      this.loadHTML("/10-24-2/scenes/Puberte/8_Choix/Choix.html"),
      this.buzzer.load()
    ]);
    this.html = promises[0];
  }

  componentDidMount() {
    const { x, y } = document.getElementById("panier").getBoundingClientRect();

    document.querySelector("body").addEventListener("click", () => {
      document
        .querySelectorAll(".un-choix")
        .forEach(el => el.classList.remove("showText"));
    });

    document.querySelectorAll(".un-choix").forEach(el => {
      // hide text
      el.addEventListener("dragstart", () => {
        console.log("start");
        document
          .querySelectorAll(".un-choix")
          .forEach(el => el.classList.remove("showText"));
      });

      // show text
      el.addEventListener("dragend", e => {
        if (e.x > x && e.y > y) {
          if (el.id === "tampon") {
            el.classList.toggle("showText");
            this.state.t_clicked = true;
          } else if (el.id === "serviette") {
            el.classList.toggle("showText");
            this.state.s_clicked = true;
          } else if (el.id === "couche") {
            this.buzzer.render(this.target);
            this.state.c_clicked = true;
          }
        }
        if (
          this.state.c_clicked &&
          this.state.t_clicked &&
          this.state.s_clicked
        ) {
          setTimeout(() => {
            this.componentWillUnmount();
          }, 3000);
        }
      });
    });
  }

  componentWillUnmount() {
    this.state.c_clicked = false;
    this.state.t_clicked = false;
    this.state.s_clicked = false;
    $("*[draggable!=true]", ".slick-track").bind("dragstart");
    this.goToFin();
  }

  render(target) {
    $(function() {
      $("*[draggable!=true]", ".slick-track").unbind("dragstart");
      $(".un-choix");
    });
    this.target = target;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}

import Component from "../../../js/Component.js";
import Buzzer9 from "../9_Buzzer/Buzzer.js";

function isMobile() {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  );
}

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
      this.loadHTML("/10-24-1/scenes/Puberte/8_Choix/Choix.html"),
      this.buzzer.load()
    ]);
    this.html = promises[0];
  }

  componentDidMount() {
    document.getElementById("puberte-global-player").play();
    document.getElementById("choix-portes").style.display = "block";
    const { x, y } = document.getElementById("panier").getBoundingClientRect();

    document.querySelector("body").addEventListener("click", () => {
      document
        .querySelectorAll(".un-choix")
        .forEach(el => el.classList.remove("showText"));
    });

    document.querySelectorAll(".un-choix").forEach(el => {
      // hide text
      el.addEventListener("dragstart", () => {
        document
          .querySelectorAll(".un-choix")
          .forEach(el => el.classList.remove("showText"));
      });
      console.log(isMobile());
      if (isMobile()) {
        // show text
        el.addEventListener("click", e => {
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

          if (
            this.state.c_clicked &&
            this.state.t_clicked &&
            this.state.s_clicked
          ) {
            document.getElementById("choix-portes").style.display = "none";
            setTimeout(() => {
              this.componentWillUnmount();
            }, 3500);
          }
        });
      } else {
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
            document.getElementById("choix-portes").style.display = "none";
            setTimeout(() => {
              this.componentWillUnmount();
            }, 6000);
          }
        });
      }
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
    document.getElementById("rayon-player").pause();
    document.getElementById("rayon-player").elemMusicOn = false;
    document.getElementById("buzzer-player").pause();
    document.getElementById("buzzer-player").elemMusicOn = false;

    $(function() {
      $("*[draggable!=true]", ".slick-track").unbind("dragstart");
      $(".un-choix");
    });
    this.target = target;
    this.renderHtmlInTarget(target, this.html);
    this.componentDidMount();
  }
}

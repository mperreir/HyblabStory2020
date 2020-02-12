// import View from "../../js/View.js";
//
// export default class ViewFlemme extends View {
//   constructor () {
//     super("flemme", document.getElementById("root"));
//   }
//
//   linkElements () {
//     document.getElementById("flemme").addEventListener("click", () => console.log("toc"));
//   }
// }

import Component from "../../js/Component.js";
import S1 from "./S1/S1.js";
import S2 from "./S2/S2.js";
import S3 from "./S3/S3.js";
import S4 from "./S4/S4.js";
import S5 from "./S5/S5.js";
import S6 from "./S6/S6.js";
import S7 from "./S7/S7.js";
import S8 from "./S8/S8.js";
import S9 from "./S9/S9.js";
import S10 from "./S10/S10.js";
import S11 from "./S11/S11.js";
import S12 from "./S12/S12.js";
import S13 from "./S13/S13.js";
import Credits from "./S14_Credits/Credits.js";

export default class Flemme extends Component {
  constructor({ onStart }) {
    super();
    this.onStart = onStart;

    console.log("Flemme --- Starting to create");
    // Carousel container section for the flemme playscript
    this.section = document.createElement("section");
    this.section.setAttribute("id", "flemme");

    this.S1 = new S1({
      onGoToS2: this.goToS2.bind(this),
      onStart
    });
    this.S2 = new S2({
      onGoToS3: this.goToS3.bind(this),
      onStart
    });
    this.S3 = new S3({
      onGoToS4: this.goToS4.bind(this),
      onStart
    });
    this.S4 = new S4({
      onGoToS5: this.goToS5.bind(this),
      onStart
    });
    this.S5 = new S5({
      onGoToS6: this.goToS6.bind(this),
      onStart
    });
    this.S6 = new S6({
      onGoToS7: this.goToS7.bind(this),
      onStart
    });
    this.S7 = new S7({
      onGoToS8: this.goToS8.bind(this),
      onStart
    });
    this.S8 = new S8({
      onGoToS9: this.goToS9.bind(this),
      onStart
    });
    this.S9 = new S9({
      onGoToS10: this.goToS10.bind(this),
      onStart
    });
    this.S10 = new S10({
      onGoToS11: this.goToS11.bind(this),
      onStart
    });
    this.S11 = new S11({
      onGoToS12: this.goToS12.bind(this),
      onStart
    });
    this.S12 = new S12({
      onGoToS13: this.goToS13.bind(this),
      onStart
    });
    this.S13 = new S13({
      goToCredits: () => this.credits.render(this.section)
    });
    this.credits = new Credits();

    console.log("Flemme --- created");
  }

  goToS2(e) {
    console.log("Flemme --- going to s2");
    this.onStart(this);
    this.S1.componentWillUnmount();
    this.S2.render(this.section);
    setTimeout(() => {
      this.S2.componentWillUnmount();
      this.goToS3();
    }, 4500);
  }

  goToS3(e) {
    console.log("Flemme --- going to s3");
    this.onStart(this);
    this.S2.componentWillUnmount();
    this.S3.render(this.section);
    setTimeout(() => {
      this.S3.componentWillUnmount();
      this.goToS4();
    }, 4500);
  }

  goToS4(e) {
    console.log("Flemme --- going to s4");
    this.onStart(this);
    this.S3.componentWillUnmount();
    this.S4.render(this.section);
    setTimeout(() => {
      this.S4.componentWillUnmount();
      this.goToS5();
    }, 4500);
  }

  goToS5(e) {
    console.log("Flemme --- going to s5");
    this.onStart(this);
    this.S4.componentWillUnmount();
    this.S5.render(this.section);
    setTimeout(() => {
      this.S5.componentWillUnmount();
      this.goToS6();
    }, 4500);
  }

  goToS6(e) {
    console.log("Flemme --- going to s6");
    this.onStart(this);
    this.S5.componentWillUnmount();
    this.S6.render(this.section);
    setTimeout(() => {
      this.S6.componentWillUnmount();
      this.goToS7();
    }, 4500);
  }

  goToS7(e) {
    console.log("Flemme --- going to s7");
    this.onStart(this);
    this.S6.componentWillUnmount();
    this.S7.render(this.section);
    setTimeout(() => {
      this.S7.componentWillUnmount();
      this.goToS8();
    }, 4500);
  }

  goToS8(e) {
    console.log("Flemme --- going to s8");
    this.onStart(this);
    this.S7.componentWillUnmount();
    this.S8.render(this.section);
    setTimeout(() => {
      this.S8.componentWillUnmount();
      this.goToS9();
    }, 4500);
  }

  goToS9(e) {
    console.log("Flemme --- going to s9");
    this.onStart(this);
    this.S8.componentWillUnmount();
    this.S9.render(this.section);
    setTimeout(() => {
      this.S9.componentWillUnmount();
      this.goToS10();
    }, 4500);
  }

  goToS10(e) {
    console.log("Flemme --- going to s10");
    this.onStart(this);
    this.S9.componentWillUnmount();
    this.S10.render(this.section);
    setTimeout(() => {
      this.S10.componentWillUnmount();
      this.goToS11();
    }, 4500);
  }

  goToS11(e) {
    console.log("Flemme --- going to s11");
    this.onStart(this);
    this.S10.componentWillUnmount();
    this.S11.render(this.section);
    setTimeout(() => {
      this.S11.componentWillUnmount();
      this.goToS12();
    }, 4500);
  }

  goToS12(e) {
    console.log("Flemme --- going to s12");
    this.onStart(this);
    this.S11.componentWillUnmount();
    this.S12.render(this.section);
    setTimeout(() => {
      this.S12.componentWillUnmount();
      this.goToS13();
    }, 4500);
  }

  goToS13(e) {
    console.log("Flemme --- going to s13");
    this.onStart(this);
    this.S12.componentWillUnmount();
    this.S13.render(this.section);
  }

  goToS14(e) {
    console.log("Flemme --- going to s14");
    this.onStart(this);
    this.S13.componentWillUnmount();
    this.S14.render(this.section);
  }



  async load() {
    await Promise.all([
      this.S1.load(),
      this.S2.load(),
      this.S3.load(),
      this.S4.load(),
      this.S5.load(),
      this.S6.load(),
      this.S7.load(),
      this.S8.load(),
      this.S9.load(),
      this.S10.load()
    ]);
  }

  render(target) {
    this.renderHtmlInTarget(target, this.section);
    this.S1.render(this.section);
    this.componentDidMount();
  }
}

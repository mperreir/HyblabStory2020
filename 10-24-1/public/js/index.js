import Accueil from "../scenes/Accueil/Accueil.js";

window.addEventListener("load", async function() {
  const accueil = new Accueil();
  await accueil.load();
  accueil.render(document.getElementById("root"));
});

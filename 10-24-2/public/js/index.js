import ViewEcrans from "../views/ecrans/ecrans.js";
import ViewFlemme from "../views/flemme/flemme.js";
import ViewHome from "../views/home/home.js";
import ViewCarousel from "../views/carousel/carousel.js";
import ViewPlayscriptTemplate from "../views/playscriptTemplate/playscriptTemplate.js";

async function getloadedViews () {
  const viewEcrans = new ViewEcrans();
  const viewFlemme = new ViewFlemme();
  const viewCarousel = new ViewCarousel(viewEcrans, viewFlemme, viewEcrans, viewFlemme);
  const viewPlayscriptTemplate = new ViewPlayscriptTemplate(viewCarousel);
  const viewHome = new ViewHome(viewPlayscriptTemplate);
  const views = {
    viewEcrans,
    viewFlemme,
    viewCarousel,
    viewHome,
    viewPlayscriptTemplate
  };
  const loadPromises = Object.values(views).map(view => view.load());
  await Promise.all(loadPromises);
  return views;
}

window.addEventListener("load", async function () {
  const views = await getloadedViews();
  views.viewHome.render(document.getElementById("root"));
});

import Vue from "vue";
import VueRouter from "vue-router";
import View from "../views/View.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "view",
    component: View
  }
];

const router = new VueRouter({
  routes
});

export default router;

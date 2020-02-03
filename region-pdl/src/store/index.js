import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSceneIndex: 0
  },
  mutations: {
      nextScene(state) {
        state.currentSceneIndex+=1;
      }
  },
  actions: {
    nextScene({ commit }) {
      commit('nextScene');
    }
  },
  getters: {
    //insert getters here if needed
  },
  modules: {}
});

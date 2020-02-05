import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSceneIndex: 0
  },
  mutations: {
    nextScene(state, sceneId) {
      if (sceneId === null)
        state.currentSceneIndex++;
      else {
        state.currentSceneIndex += sceneId;
      }
    }
  },
  actions: {
    nextScene({ commit }, { sceneId }) {
      commit('nextScene', sceneId);
    }
  },
  getters: {
    //insert getters here if needed
  },
  modules: {}
});

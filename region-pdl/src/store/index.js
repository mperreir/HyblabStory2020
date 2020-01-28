import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentScene: null
  },
  mutations: {
    initScene(state, sceneName) {
      state.currentScene = sceneName; 
    }
  },
  actions: {
    initScene({ commit }, { sceneName }) {
      commit('initScene', sceneName);
    }
  },
  getters: {
    //insert getters here if needed
  },
  modules: {}
});

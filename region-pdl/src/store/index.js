import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    currentSceneIndex: 7,
    nbScenes: 8,
    character: ""
  },
  mutations: {
    nextScene(state, sceneId) {
      if (sceneId === null)
        state.currentSceneIndex++;
      else {
        state.currentSceneIndex += sceneId;
      }
    },
    setCharacter(state, name) {
      state.character = name;
    }
  },
  actions: {
    nextScene({ commit }, { sceneId }) {
      commit('nextScene', sceneId);
    },
    setCharacter({ commit }, { name }) {
      commit('setCharacter', name);
    }
  },
  getters: {
    getChatacter: state => {
      return state.character === "dubois"
        ? "Mme Dubois"
        : "M. Moreau";
    },
    getChatacterGender: state => {
      return state.character === "dubois"
        ? "mme"
        : "m";
    }
  },
  modules: {}
});

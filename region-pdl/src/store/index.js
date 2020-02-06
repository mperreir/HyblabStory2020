import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
<<<<<<< HEAD
    currentSceneIndex: 3,
=======
    currentSceneIndex: 0,

>>>>>>> develop
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
    //insert getters here if needed
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        currentSceneIndex: 0,
        nbScenes: 9,
        character: ""
    },
    mutations: {
        nextScene(state, sceneId) {
            state.currentSceneIndex += sceneId;
        },
        setCharacter(state, name) {
            state.character = name;
        }
    },
    actions: {
        nextScene({ commit }, { sceneId }) {
            commit('nextScene', sceneId || 1);
        },
        setCharacter({ commit }, { name }) {
            commit('setCharacter', name);
        }
    },
    getters: {
        getCharacter: state => {
            return state.character === "dubois" ?
                "Mme Dubois" :
                "M. Moreau";
        },
        getCharacterGender: state => {
            return state.character === "dubois" ?
                "mme" :
                "m";
        }
    }
});
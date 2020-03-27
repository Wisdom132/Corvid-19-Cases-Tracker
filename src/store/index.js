import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    cases: [],
  },
  mutations: {
    SET_CASES(state, payload) {
      state.cases = payload;
    }
  },
  actions: {
    async getAllCases({
      commit
    }) {
      try {
        let response = await axios.get("http://localhost:4000");
        console.log(response.data);
        commit("SET_CASES", response.data.areas);
      } catch (err) {
        console.log(err);
      }
    }
  },

  modules: {}
});

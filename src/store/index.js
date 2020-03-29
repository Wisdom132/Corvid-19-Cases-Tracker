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

        //i made some changes here..i deployed and backend on heroku and changed the localhost url wit the heroku url
        let response = await axios.get("https://codesource-corvid-data.herokuapp.com/");
        console.log(response.data);
        commit("SET_CASES", response.data.areas);
      } catch (err) {
        console.log(err);
      }
    }
  },

  modules: {}
});

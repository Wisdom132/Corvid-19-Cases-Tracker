import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import uk from "uikit";
import Icons from "uikit/dist/js/uikit-icons";
import moment from 'moment'

Vue.prototype.moment = moment
uk.use(Icons);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: function (h) {
    return h(App);
  }
}).$mount("#app");

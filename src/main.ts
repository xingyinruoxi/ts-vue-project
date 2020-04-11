import Vue from "vue";
import App from "./App.vue";
import "./plugins/element.js";
import router from "./router/index";
import store from "./store";
import axios from "axios";
import "./test";
Vue.prototype.$axios = axios;
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

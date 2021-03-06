import Vue from "vue";
import "./plugins/vuetify";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./registerServiceWorker";
import { rtdbPlugin } from "vuefire";

Vue.config.productionTip = false;

Vue.use(rtdbPlugin);

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

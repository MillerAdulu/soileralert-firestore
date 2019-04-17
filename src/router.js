import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Previous from "./views/Previous.vue";
import Sensors from "./views/Sensors.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/sensors",
      name: "sensors",
      component: Sensors
    },
    {
      path: "/previous",
      name: "previous",
      component: Previous
    }
  ]
});

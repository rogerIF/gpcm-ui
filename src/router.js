import Vue from "vue";
import Router from "vue-router";
import LearnVue from "./views/omitAuth/others/LearnVue";
import Home from "./views/Home.vue";
import About from "./views/omitAuth/others/About.vue";
import Monitor from "./views/omitAuth/others/Monitor.vue";
import SystemManage from "./views/omitAuth/others/SystemManage.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
      children:[
          {
              path: "/learnVue",
              name: "learn",
              component: LearnVue
          },
          {
              path: "/about",
              name: "about",
              component: About
          },
          {
              path: "/monitor",
              name: "monitor",
              component: Monitor
          },
          {
              path: "/systemManage",
              name: "systemManage",
              component: SystemManage
          }
      ]
    },

  ]
});

//通过扫描view下的省略授权的vue文件，自动生成路由
import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import login from "../views/omitAuth/login/Login.vue";
import notFound from "../views/omitAuth/notFound/notFound.vue";
import createRouters from "./createRouters";
Vue.use(Router);

export default new Router({
    routes: [
        {
            path: "/",
            name: "home",
            component: Home,
            children:createRouters()
        },
        {
            path: "/login",
            name: "login",
            component: login,
        },
        {
            path:"*",
            name:"all",
            component: notFound
        }


    ]
});
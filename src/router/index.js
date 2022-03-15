import Vue from "vue";
import VueRouter from "vue-router";

import Home from "../views/Login/Login.vue";
Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/Accountuser",
    name: "Accountuser",
    component: () => import("../views/Accountuser.vue"),
  },
  {
    path: "/Kpiuser",
    name: "Kpiuser",
    component: () => import("../views/Kpiuser.vue"),
  },
  {
    path: "/Stopwork",
    name: "Stopwork",
    component: () => import("../views/Stopwork.vue"),
  },

  {
    path: "/docapi",
    name: "Docapi",
    component: () => import("../views/docapi.vue"),
  },

  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login/Login.vue"),
  },
  {
    path: "/register",
    name: "Register",
    component: () => import("../views/Login/Register.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;

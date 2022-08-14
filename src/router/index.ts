import { createRouter, createWebHistory } from "vue-router";
import HomePage from "../pages/index.vue";
import LoginPage from "../pages/login.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/login",
      name: "login",
      component: LoginPage,
    },
  ],
});

export default router;

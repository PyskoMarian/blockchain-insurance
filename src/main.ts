import { createApp } from "vue";
import type { App as Application } from "vue";
import { createPinia } from "pinia";
import { Quasar, Notify } from "quasar";

import "./assets/scss/index.scss";

// Import icon libraries
import "@quasar/extras/material-icons/material-icons.css";

// Import Quasar css
import "quasar/src/css/index.sass";

import App from "./App.vue";

import router from "./router";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "@/firebase";
import { useAuthStore } from "./stores/auth";

let app: Application;
onAuthStateChanged(auth, (user) => {
  if (!app) {
    app = createApp(App);
    app.use(Quasar, { plugins: { Notify } });
    app.use(createPinia());
    app.use(router);
    app.mount("#app");
  }
  if (user) {
    useAuthStore().setUser(user);
  }
});

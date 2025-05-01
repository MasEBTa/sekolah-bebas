import "./assets/main.css";

import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";

import VueStrokeWriter from "vue-stroke-writer";

import { createPinia } from "pinia";

const app = createApp(App);

// instance pinia
const pinia = createPinia();

app.use(router);
// gunakan pinia di app
app.use(pinia);

// vua-stroke-writter
app.use(VueStrokeWriter);

app.mount("#app");

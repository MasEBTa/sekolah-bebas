import { createRouter, createWebHistory } from "vue-router";
import Materi from "../views/Materi.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/barab", // default ke Bahasa Arab
    },
    {
      path: "/:mapel", // path dinamis seperti /barab, /baing, dll
      name: "materi",
      component: Materi,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

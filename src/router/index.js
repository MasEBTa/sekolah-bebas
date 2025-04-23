import { createRouter, createWebHistory } from "vue-router";
import Materi from "../views/Materi.vue";
import DetailLesson from "../views/levelDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/detail",
      name: "detail",
      component: DetailLesson,
    },
    {
      path: "/",
      redirect: "/detail", // default ke Bahasa Arab
    },
    {
      path: "/:mapel", // path dinamis seperti /barab, /baing, dll
      name: "materi",
      component: Materi,
    },
    {
      path: "/:mapel/detail/:idmateri",
      name: "materiDetail",
      component: DetailLesson,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
});

export default router;

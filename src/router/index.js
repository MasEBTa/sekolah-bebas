import { createRouter, createWebHistory } from "vue-router";
import Materi from "../views/Materi.vue";
import DetailLesson from "../views/levelDetail.vue";
import scrollBehavior from "../service/scrollBehavior";

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
      path: "/:mapel/detail/:slugmateri/:id",
      name: "materiDetail",
      component: DetailLesson,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
  ],
  scrollBehavior,
});

export default router;

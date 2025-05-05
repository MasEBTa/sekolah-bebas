import { createRouter, createWebHistory } from "vue-router";
import Materi from "../views/Materi.vue";
import DetailLesson from "../views/levelDetail.vue";
import scrollBehavior from "../service/scrollBehavior";
import ShowMateri from "../views/SoalMateri.vue";
import ShowDetail from "../views/PartitionLevelDetail.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      redirect: "/math", // default ke Bmatematika
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
      path: "/:mapel/show/:id",
      name: "showMateri",
      component: ShowMateri,
    },
    {
      path: "/:mapel/d/:id",
      name: "showDetail",
      component: ShowDetail,
    },
    {
      path: "/canvas",
      name: "canvas",
      component: () => import("../views/CanvasView.vue"),
    },
  ],
  scrollBehavior,
});

export default router;
// save

import { createRouter, createWebHistory } from "vue-router";
import { useAuthStore } from "@/stores/auth";
import Materi from "../views/Materi.vue";
import DetailLesson from "../views/levelDetail.vue";
import scrollBehavior from "../service/scrollBehavior";
import ShowMateri from "../views/SoalMateri.vue";
import ShowDetail from "../views/PartitionLevelDetail.vue";

const routes = [
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
  { path: "/login", component: () => import("@/views/auth/LoginPage.vue") },
  {
    path: "/signup",
    component: () => import("@/views/auth/SignupPage.vue"),
  },
  // { path: '/', component: () => import('@/views/HomePage.vue'), meta: { requiresAuth: true } },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  scrollBehavior,
});

router.beforeEach(async (to, from, next) => {
  const auth = useAuthStore();
  if (!auth.user) await auth.fetchUserAndProfile();

  if (to.meta.requiresAuth && !auth.user) {
    return next("/login");
  }

  next();
});

export default router;
// save

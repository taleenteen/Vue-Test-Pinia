import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import UserListView from "../views/UserListView.vue";
import UserUpdateView from "../views/UserUpdateView.vue";
import UserInfoView from "../views/UserInfoView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/user/:id",
      name: "user-info",
      component: UserInfoView,
    },
    {
      path: "/user",
      name: "user-list",
      component: UserListView,
    },
    {
      path: "/user/create",
      name: "user-create",
      component: UserUpdateView,
    },
    {
      path: "/user/edit/:id",
      name: "user-edit",
      component: UserUpdateView,
    },
  ],
});

export default router;

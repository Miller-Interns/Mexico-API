import { createRouter, createWebHistory } from "vue-router";
import { RoutePaths } from "./route-paths";
import { RouteNames } from "./route-names";

import HomePage from "../views/home-page.vue";
import ContentPage from "../views/content-page.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: RoutePaths.HOME,
      name: RouteNames.HOME,
      component: HomePage,
    },
    {
      path: RoutePaths.CONTENT,
      name: RouteNames.CONTENT,
      component: ContentPage,
    },
  ],
});

export default router;

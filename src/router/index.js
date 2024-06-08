import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const routes = [
  {
    path: "/",
    name: "HomeView",
    component: HomeView,
  },
  {
    path: "/organization",
    name: "OrganizationView",
    component: function () {
      return import("../views/OrganizationView.vue");
    },
  },
  {
    path: "/about",
    name: "AboutView",
    component: function () {
      return import("../views/AboutView.vue");
    },
  },
  {
    path: "/members",
    name: "MembersView",
    component: function () {
      return import("../views/MembersView.vue");
    },
  },
  {
    path: "/archive",
    name: "ArchiveView",
    component: function () {
      return import("../views/ArchiveView.vue");
    },
  },
  {
    path: "/event/:id",
    name: "EventDetails",
    props: (route) => ({
      id: route.params.id,
    }),
    component: function () {
      return import("../views/events/EventDetails.vue");
    },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

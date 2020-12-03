import Vue from "vue";
import Router from "vue-router";
import HelloWorld from "../components/HelloWorld";
import Dashboard from "../components/Dashboard";
import Universities from "../components/Universities";
import Schools from "../components/Schools";
import Courses from "../components/Courses";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/",
      name: "HelloWorld",
      component: HelloWorld,
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      children: [
        {
          path: "/dashboard/universities",
          component: Universities,
        },
        {
          path: "/dashboard/schools",
          component: Schools,
        },
        {
          path: "/dashboard/courses",
          component: Courses,
        },
      ],
    },
  ],
});

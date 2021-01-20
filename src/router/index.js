import Vue from 'vue';
import Router from 'vue-router';
import HelloWorld from '../components/HelloWorld';
import Dashboard from '../components/Dashboard';
import Universities from '../components/Universities';
import Schools from '../components/Schools';
import Courses from '../components/Courses';
import Programs from '../components/Programs';
import Approvals from '../components/Approvals';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloWorld',
      component: HelloWorld,
    },
    {
      path: '/approvals',
      name: 'Approvals',
      component: Approvals,
    },
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: Dashboard,
      children: [
        {
          name: 'universities',
          path: '/dashboard/universities',
          component: Universities,
        },
        {
          name: 'schools',
          path: '/dashboard/schools',
          component: Schools,
        },
        {
          path: '/dashboard/courses',
          component: Courses,
        },
        {
          name: 'courses',
          path: '/dashboard/programs',
          component: Programs,
        },
      ],
    },
  ],
});

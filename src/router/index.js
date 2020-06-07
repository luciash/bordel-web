import Vue from 'vue';
import Router from 'vue-router';
import Home from '../components/Home.vue';
import Join from '../components/Join.vue';
import Projects from '../components/Projects.vue';
import Contact from '../components/Contact.vue';

import teams from '../data/teams';

Vue.use(Router);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/join',
    name: 'Join',
    component: Join,
  },
  {
    path: '/project',
    name: 'Project',
    component: Projects,
  },
  {
    path: '/contact',
    name: 'Contact',
    component: Contact,
  },
];

let route;
Object.keys(teams).forEach((team) => {
  route = {
    path: `/project${teams[team].project.route}`,
    name: teams[team].project.name,
    component: Projects,
    props: teams[team],
  };
  routes.push(route);
});

export default new Router({
  routes,
});

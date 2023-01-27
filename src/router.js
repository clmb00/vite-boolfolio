import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Portfolio from './pages/Portfolio.vue';
import Error404 from './pages/Error404.vue';
import Detail from './pages/Detail.vue';

const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: 'active',
  routes:[
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about-me',
      name: 'about',
      component: About
    },
    {
      path: '/contact-me',
      name: 'contacts',
      component: Contacts
    },
    {
      path: '/portfolio',
      name: 'portfolio',
      component: Portfolio
    },
    {
      path: '/portfolio/details/:slug',
      name: 'detail',
      component: Detail
    },
    {
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});

export { router };
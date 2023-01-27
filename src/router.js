import { createRouter, createWebHistory } from "vue-router";

import Home from './pages/Home.vue';
import About from './pages/About.vue';
import Contacts from './pages/Contacts.vue';
import Portfolio from './pages/Portfolio.vue';
import Error404 from './pages/Error404.vue';

const router = createRouter({
  history: createWebHistory(),
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
      path: '/:pathMatch(.*)*',
      component: Error404
    }
  ]
});

export { router };
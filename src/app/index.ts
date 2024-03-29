import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';
import { routes } from '../pages';

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export const app = createApp(App).use(router);

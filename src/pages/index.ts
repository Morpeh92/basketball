import type { RouteRecordRaw } from 'vue-router';

export const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('./Home/Home.vue'),
    meta: {
      menu: {
        title: 'Home',
        hidden: false,
      },
    },
  },
];

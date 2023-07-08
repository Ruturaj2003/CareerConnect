import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

import JobResultsView from '@/views/JobResultsView.vue';

const routes = [
  {
    name: 'Home',
    path: '/',
    component: HomeView
  },
  {
    name: 'JobResults',
    path: '/jobs/results',
    component: JobResultsView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
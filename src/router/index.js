import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '@/views/HomeView.vue';

import JobResultsView from '@/views/JobResultsView.vue';

import JobView from '@/views/JobView.vue';

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
  },
  {
    name: 'JobListing',
    path: '/jobs/results/:id',
    component: JobView
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior() {
    return {
      top: 0,
      left: 0,
      behavior: 'smooth'
    };
  }
});

export default router;

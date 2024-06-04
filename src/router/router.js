import { createRouter, createWebHistory } from 'vue-router';
import MenPage from '../views/MenPage.vue';
import WomenPage from '../views/WomenPage.vue';

const routes = [
  { path: '/', component: MenPage, name: 'men' },
  { path: '/women', component: WomenPage, name: 'women' },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
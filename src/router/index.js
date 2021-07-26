import Vue from 'vue';
import VueRouter from 'vue-router';
import 'mavon-editor/dist/css/index.css';

Vue.use(VueRouter);

const routes = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/home'),
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login'),
  },
  {
    path: '/register',
    name: 'Register',
    component: () => import('@/views/register'),
  },
  {
    path: '/blogEdit',
    name: 'BlogEdit',
    component: () => import('@/views/blogEdit'),
  },
];

const router = new VueRouter({
  // mode: 'history',
  // base: process.env.BASE_URL,
  mode: 'hash',
  routes,
});

export default router;

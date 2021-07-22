import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '@/views/home';
import BlogEdit from '@/views/blogEdit';
import MavonEditor from 'mavon-editor';
import 'mavon-editor/dist/css/index.css';

Vue.use(VueRouter);
Vue.use(MavonEditor); // 注册markdown编辑器

const routes = [
  {
    path: '/home',
    name: 'home',
    component: Home,
  },
  {
    path: '/blogEdit',
    name: 'BlogEdit',
    component: BlogEdit,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;

import Vue from 'vue';
import VueRouter from 'vue-router';
import Cookies from 'js-cookie';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('@/layout'),
    children: [
      {
        path: 'home',
        name: 'home',
        component: () => import('@/views/home'),
        meta: { name: '首页' },
      },
    ],
  },
  {
    path: '/test',
    name: 'test',
    component: () => import('@/views/test'),
    meta: { name: '测试' },
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login'),
    meta: { name: '登录' },
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('@/views/register'),
    meta: { name: '注册' },
  },
  {
    path: '/blogEdit',
    name: 'blogEdit',
    component: () => import('@/views/blogEdit'),
    meta: { name: '创作中心' },
  },
];

const router = new VueRouter({
  mode: 'hash',
  routes,
});

router.beforeEach((to, from, next) => {
  const isLogin = !!Cookies.get('token');
  const whiteList = ['login', 'register'];
  if (isLogin) {
    if (to.name === 'login' || to.path === '/') {
      next({ name: 'home' });
    } else {
      next();
    }
  } else {
    if (whiteList.includes(to.name)) {
      next();
    } else {
      next({ name: 'login' });
    }
  }
});

export default router;

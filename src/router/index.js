import Vue from 'vue';
import VueRouter from 'vue-router';
import Layout from '@/layout';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: [
      {
        path: 'home',
        component: () => import('@/views/home/index'),
        meta: { title: 'Home', icon: '' }
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/components/Login/index')
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

export default router;

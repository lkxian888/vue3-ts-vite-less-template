/*
 * @Description: your description
 * @Author: lkxian
 * @@@Email: lkxian888@163.com
 * @Date: 2022-08-27 13:34:48
 * @LastEditTime: 2022-08-27 18:08:31
 */
import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '@/views/Home/index.vue';

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }
  ]
});

export default router;

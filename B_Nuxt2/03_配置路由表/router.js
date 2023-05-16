import Vue from "vue";
import VueRouter from "vue-router";

import Home from "./pages/index.vue";
import Detail from "./pages/detail.vue";
import Category from "./pages/category.vue";
import CategoryChild from "./pages/category/_id.vue";

Vue.use(VueRouter)

/**只有配置到表里的才可以路由访问 反之404*/
const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/detail',
    name: 'detail',
    component: Detail
  },
  {
    path: '/category',
    name: 'category',
    component: Category,
    children: [
      {
        path: ':id',
        component: CategoryChild,
        // beforeEnter: (to, from, next) => {
        //   console.log('beforEnter', to);
        //   next();
        // }
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  routes
});

/**服务端和客户端都会触发 */
// router.beforeEach((to, from, next) => {
//   console.log('去往哪个页面: ', to.path, to);
//   console.log('来自哪个页面: ', from.path, from);

//   next();
// });

export function createRouter() {
  return router
};
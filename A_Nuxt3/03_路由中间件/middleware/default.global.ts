// 全局路由守卫，每次跳转都会执行下面的代码
export default defineNuxtRouteMiddleware((to, from) => {
  console.log('要去哪个页面: ', to.path, to);
  console.log('来自哪个页面: ', from.path, from);

  // if (to.path === '/profile/settings') {
  //   console.log('请先登录~~~');
  //   // 阻止导航，如果将一个导航设置为参数则抛出错误

  //   // return abortNavigation();
  //   // or
  //   abortNavigation('未登录？请先登录');
  //   // or
  //   // try {
  //   //   /* code that might throw an error */
  //   // } catch (err) {
  //   //   abortNavigation(err)
  //   // }
  // };

  if (!to.params.name && to.path === '/profile/account') {
    // 将用户重定向到~/error.vue 自定义错误页面，并暴露从中间件传递的错误消息和代码
    throw createError({ statusCode: 404, statusMessage: 'Page Not Found' });
  }
});
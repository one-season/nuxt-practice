export default defineNuxtRouteMiddleware(to => {
  console.log('单个页面触发的路由中间件');
})
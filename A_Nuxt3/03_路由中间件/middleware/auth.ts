// 命名路由中间件
export default defineNuxtRouteMiddleware((to) => {
  const count = 1;

  if (count === 1) {
    return navigateTo('/')
  }

  return navigateTo('/dashboard')
})
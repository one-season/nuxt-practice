export default ({ app, route, store, redirect }) => {
  app.router.beforeEach((to, from, next) => {
    console.log('plugins: ', to);

    next();
  }) 
}
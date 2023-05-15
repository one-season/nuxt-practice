<template>
  <div>
    <h2>id: {{ $route.query.id }}</h2>

    <h2>{{ msg }}</h2>

    <h2>{{ $store.state.fetchMsg }}</h2>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'default'
      }
    },
    /**
     * 1.3. 校验路由参数的生命周期
     *    返回ture进入页面，反之404
     */
    validate({ params, query }) {
      console.log(params, query, 'validate');

      return true;
    },

    /**
     * 1.4.使得你能够在渲染组件之前异步获取数据。
     * 会在组件（限于页面组件）每次加载之前被调用
     */
    asyncData({ isDev, route, store, env, params, query, req, res, redirect, error }) {
      console.log('asyncData');

      return {
        msg: 'from asyncData msg'
      }
    },

    /**
     * 1.5. 用于在渲染页面前填充应用的状态树（store）
     * 数据， 与 asyncData 方法类似，不同的是它不会
     * 设置组件的数据。
     * 如果页面组件设置了 fetch 方法，它会在组件每
     * 次加载前被调用（在服务端或切换至目标路由之前）
     */
    fetch({ store, params }) {
      console.log('fetch');
      store.commit('changeFetchMsg', 'from fetch msg')
    }
  }
</script>


<template>
  <div>
    <h2>IndexPage</h2>

    <button @click="() => {
      $router.push({
        path: '/detail',
        query: {
          id: 1804515999
        }
      })
    }">
      详情
    </button>

    <nuxt-link to="/category">分类</nuxt-link>
    <nuxt-link to="/profile">个人中心</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    
    // 二、服务端和客户端共有的生命周期
    beforeCreate() {
      console.log('beforCreate');
    },
    created() {
      console.log('created');
    },

    // 三、客户端生命周期
    beforeMount() {
      console.log('beforMount');
    },
    mounted() {
      console.log('mounted');
    },
    // ...
  }
</script>

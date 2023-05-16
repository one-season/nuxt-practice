<template>
  <div>
    <h2>IndexPage</h2>

    <nuxt-link :to="{ name: 'detail', query: { id: 321312 }, params: { id: 123654 } }" >
      nuxtLikn - 详情
    </nuxt-link>
    <button @click="() => {
      $router.push({
        path: '/detail',
        query: {
          id: 1804515999
        }
      })

      // $router.push({
      //   name: 'detail',
      //   params: { id: 1233 }
      // })
    }">
      $router - 详情
    </button>

    <hr>

    <nuxt-link to="/category/123213">分类</nuxt-link>
    <nuxt-link to="/profile">个人中心</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
  }
</script>

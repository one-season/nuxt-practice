<template>
  <div>
    <Header></Header>

    <h2 class="title">简介</h2>

    <nuxt-link :to="{ name: 'detail', query: { id: 321312 }, params: { id: 123654 } }" >
      nuxtLikn - 详情
    </nuxt-link>
    <nuxt-link to="/about">关于我们</nuxt-link>

    <Footer></Footer>
  </div>
</template>

<style scoped>
  h2 {
    color: darkcyan;
  }
</style>

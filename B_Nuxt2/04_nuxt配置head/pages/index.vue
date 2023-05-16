<template>
  <div>
    <h2>简介</h2>

    <nuxt-link :to="{ name: 'detail', query: { id: 321312 }, params: { id: 123654 } }" >
      nuxtLikn - 详情
    </nuxt-link>
    <nuxt-link to="/about">关于我们</nuxt-link>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        title: '公司简介'
      }
    },
    head() {
      return {
        title: this.title,
        meta: [
          {
            hid: 'keywords',
            name: 'keywords',
            content: '公司简介关键字'
          },
          {
            hid: 'description',
            name: 'description',
            content: '公司简介很长很长很长的描述'
          }
        ]
      }
    }
  }
</script>

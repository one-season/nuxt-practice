<template>
  <div>
    <ul>
      <li v-for="item in fetchData">
        {{ item.imageName }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        fetchData: []
      }
    },
    /**无法使用 */
    asyncData({isDev, route, store, env, params, query, req, res, redirect, error}) {
      console.log('asyncDataasyncDataasyncData');
    },
    
    async fetch() {
      const res = await this.$axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
      console.log(res.data.data.list);
      this.fetchData = res.data.data.list
      console.log(this, 'thisthis~~~');
    }
  }
</script>
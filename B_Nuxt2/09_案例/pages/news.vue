<template>
  <div>
    <h2>新闻中心</h2>

    <ul>
      <li v-for="item in list">
        {{ item.imageName }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data: () => ({
      list: []      
    }),
    async asyncData({ $axios }) {
      const res = await $axios.get('/api/slider/getSliders');
      console.log(res);
      return {
        list: res.data.list
      }
    }
  }
</script>
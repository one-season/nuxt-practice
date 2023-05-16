<template>
  <div>
    <h2>IndexPage</h2>

    <ul>
      <li v-for="item in list">
        {{ item.imageName }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'IndexPage',
    data() {
      return {
        list: [],
        fetchData: []
      }
    },
    async asyncData({ $axios }) {
      // http://testapi.xuexiluxian.cn/api/slider/getSliders
      const res = await $axios.get('/api/slider/getSliders');
      console.log(res);

      return {
        list: res.data.data.list || []
      };
    }
  }
</script>

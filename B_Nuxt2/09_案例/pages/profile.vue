<template>
  <div>
    <h2>个人简介</h2>

    <img :src="list[0].imageUrl" alt="">
  </div>
</template>

<script>
  export default {
    middleware({ store, redirect }) {
      store.commit('getLocalToken');

      if (!store.state.token) {
        redirect('/login')
      }
    },
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
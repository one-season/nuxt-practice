<template>
  <div>
    <h2>IndexPage</h2>

    <ul>
      <li v-for="item in list">
        {{ item.imageName }}
      </li>
    </ul>

    <ul>
      <li v-for="(item, index) in fetchData">
        {{ index + 1 }}
      </li>
    </ul>

    <nuxt-link to="/category">分类</nuxt-link>
    <nuxt-link to="/profile">个人</nuxt-link>
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

    /**限于页面组件使用 
     * asyncData方法是在组件 初始化 前被调用的，
     * 所以在方法内是没有办法通过 this 来引用组件的
     * 实例对象；
     * 
     * 可以获取数据并返回给当前组件；
    */
    async asyncData({ $axios }) {
      const res = await $axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
      // console.log(res.data.data.list);
      // console.log(this, 'thisthisthis'); //undefined

      return {
        list: res.data.data.list || []
      };
    },
    
    /**
     * 
     * 参数是**页面组件**的上下文对象 context，但是
     * 通过this设置组件数据无法在模板上渲染。只能通过
     * 填充应用的状态树（store）数据，然后渲染；
     * 
     * 在components/中是没有这个参数的，但是可以通
     * 过this设置组件内数据
     */
    async fetch({ store, params, $axios }) {
      const res = await $axios.get('http://testapi.xuexiluxian.cn/api/slider/getSliders');
      console.log(res.data.data.list);
      this.fetchData = res.data.data.list
      console.log(this, 'thisthis');
    }
  }
</script>

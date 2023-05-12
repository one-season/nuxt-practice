<template>
  <div class="app">
    <h2>My App</h2>

    <hr>
    <div>
      <h3>useAsyncData：</h3>
      <template v-if="pending">
        暂无数据。。。
      </template>

      <template v-else>
        <ul>
          <li v-for="item in asyncDataRes" :key="item.id">{{ item.name }}</li>
        </ul>
      </template>
    </div>

    <hr>
    <div>
      <h3>useFetch：</h3>
      <ul>
        <li v-for="item in fetchRes.data" :key="item.Id">{{ item.title.slice(0, 5) }}</li>
      </ul>
    </div>

  </div>
</template>

<script setup>
  import {  } from "vue";

  /**
   * 返回值: 
   *  data: 传入的异步函数的结果
   *  pending: 一个布尔值，指示是否仍在提取数据
   *  refresh/execute: 可用于刷新handler函数返回的数据的函数
   *  error:如果数据获取失败，则错误对象
   * 
   * 下面案例都是把data从返回值结构出来了；
   */
  
  /**
   * useAsyncData：
   *  getList：key: 一个唯一的键，以确保数据获取可以跨请求正确地去重复。
   * 
   *  handler: 返回值的异步函数；
   * 
   *  options：
   *    * lazy： 数据都返回后，才会显示出来 ，简单说就是会阻塞页面。默认是false。
   *    * default: 一个工厂函数，在async函数解析之前设置数据的默认值——lazy: true 选项尤其有用；
   *    * server:是否从服务器上获取数据(默认为true)
   *    * transform: 解析后可用于改变handler函数结果的函数
   *    * pick: 只从handler函数结果中选择该数组中的指定键
   *    * watch: 监视响应源以自动刷新
   *    * immediate: 当设置为false时，将阻止请求立即触发。(默认为true)
   * 
   * 这些选项在开发中很少被配置，一般都使用默认值。所以Nuxt3又提供了一个简单的方法useFetch
   */
  const { pending, data: asyncDataRes } = await useAsyncData(
    "getList", 
    () => $fetch("http://123.207.32.32:9002/album/new?limit=100"),
    {
      lazy: true,
      default: () => ([{ Id: 11, title: 'default' }]),
      transform: (input) => {
        console.log(input);
        return input.albums
      }
    }
  );
  console.log('pengding: ', pending, 'useAsyncData: ', asyncDataRes);

  /**
   * useFetch 可以理解为所有的都选择默认配置的useAsyncData 方法。
   *  URL: 要获取的URL。
   *  Options (extends unjs/ofetch options & AsyncDataOptions):
   *    method: 请求方法。
   *    query: 使用 ufo 添加查询搜索参数到URL。
   *    params: query 的别名。
   *    body: 请求体-自动字符串化(如果传递了一个对象)。
   *    headers: 请求头。
   *    baseURL: 请求的基本URL。
   * 
   */
  // const { data: fetchRes } = await useFetch("http://121.36.81.61:8000/getTenArticleList");
  const { data: fetchRes } = await useFetch("http://121.36.81.61:8000/getTenArticleList", {
    method: 'GET',
    id: 1
  });
  console.log('fetchRes: ', fetchRes);


  // useLazyAsyncData 和useLazyFetch 它们只是把配置选项中的Lazy 设置成了true， 也就是会阻塞页面。
</script>

<style scoped>

</style>
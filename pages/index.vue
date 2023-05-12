<template>
  <div class="page">
    <h2>首页</h2>

    <NuxtLink  to="/detail-season/1804515303974a">详情</NuxtLink>

    <br>
    <br>
    <br>

    <div>
      <theme-normal></theme-normal>
      <theme-small></theme-small>
    </div>

    <br>
    <br>

    <div>
      惰性加载组件：<button type="button" @click="showCom = !showCom">show theme-normal</button>
      <lazy-theme-normal v-if="showCom"></lazy-theme-normal>
    </div>

    <h4>当前时间：{{ time }}</h4>
  </div>
</template>

<script setup>
  import { ref, onMounted, onUnmounted } from "vue";

  const showCom = ref(false);
  const time = ref(getTime());
  let timer = null;

  // composables组合
  foo();
  throttle();
  debounce();

  onMounted(() => {
    timer = setInterval(() => {
      time.value = getTime();
    }, 1000)
  });

  onUnmounted(() => {
    clearInterval(timer);
    timer = null;
  });

</script>

<style scoped>
</style>
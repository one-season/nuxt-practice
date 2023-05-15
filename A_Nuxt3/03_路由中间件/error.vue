<template>
  <button @click="handleError">Clear errors</button>
</template>

<script setup>
  const props = defineProps({
    error: Object
  });
  console.log(props);

  /**
   * 当你准备删除错误页面时，可以调用 clearError助手
   * 函数，它接受一个可选的路径来重定向到(例如，
   * 如果你想导航到一个'安全'页面)。
   */
  const handleError = () => clearError({ redirect: '/' })
</script>

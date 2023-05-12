<template>
  <div class="page">
    <h3>详情ID：{{ route.params.id }}</h3>
    <h3>详情name：{{ $route.params.name }}</h3>
  </div>
</template>

<script setup>
  const route = useRoute();

  console.log(route.params);
</script>

<style scoped>

</style>
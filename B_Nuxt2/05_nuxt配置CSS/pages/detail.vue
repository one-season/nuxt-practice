<template>
  <div>
    <h2 class="title">详情</h2>
    <h4>query - id: {{ $route.query.id }}</h4>
    <h4>params - id: {{ $route.params.id }}</h4>

  </div>
</template>

<script>
  export default {
    data() {
      return {
        msg: 'default'
      }
    },
    validate({ params, query }) {
      console.log(params, query, 'validate');

      // 必须是number类型
      return /^\d+$/.test(query.id);
    },
  }
</script>

<template>
  <div>
    <h2>query - id: {{ $route.query.id }}</h2>
    <h2>params - id: {{ $route.params.id }}</h2>

  </div>
</template>

<script>
  export default {
    middleware: 'auth',
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


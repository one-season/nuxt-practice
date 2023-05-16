<template>
  <div>
    <h2>params - id: {{ this.$route.params.id }}</h2>
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

      return true;
    },
  }
</script>